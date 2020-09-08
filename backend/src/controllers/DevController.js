const axios = require('axios');
const Dev = require('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    // console.log(req.body);

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`,
      );

      // eslint-disable-next-line no-undef
      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      );

      sendMessage(sendSocketMessageTo, 'new-dev', dev);

      return res.status(200).json(dev);
    }
    return res.status(401).json({ message: 'Dev already registred' });
  },

  async index(req, res) {
    const devs = await Dev.find();

    return res.status(200).json(devs);
  },

  async destroy(req, res) {
    const { github_username } = req.params;

    const devDestroy = await Dev.findOneAndDelete({ github_username });

    if (!devDestroy) {
      return res.status(400).json({ message: 'Dev do not exist' });
    }

    return res.status(200).json({ message: 'Dev deleted' });
  },

  async update(req, res) {
    const { techs, name, avatar_url, bio, latitude, longitude } = req.body;
    const { github_username } = req.params;

    const updateDev = {};

    if (name) updateDev.name = name;
    if (avatar_url) updateDev.avatar_url = avatar_url;
    if (bio) updateDev.bio = bio;
    if (techs) updateDev.techs = parseStringAsArray(techs);
    if (latitude && longitude) {
      updateDev.location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
    }

    const dev = await Dev.findOneAndUpdate(
      { github_username },
      { $set: updateDev },
      { new: true },
    );

    return res.status(200).json({ dev });
  },
};
