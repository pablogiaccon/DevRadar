const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    let devs;

    if (techs) {
      devs = await Dev.find({
        techs: {
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      }).collation({ locale: 'en', strength: 2 });
    } else {
      devs = await Dev.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });
    }

    return res.status(200).json(devs);
  },
};
