import React, { useCallback } from "react";
import { FiXCircle } from "react-icons/fi";

import "./styles.css";
import api from "../../services/api";

function DevItem({ dev, handleDeleteDev }) {
  const handleDelete = useCallback(async () => {
    await api.delete(`devs/${dev.github_username}`);
    handleDeleteDev(dev._id);
  }, []);

  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>

        <FiXCircle onClick={handleDelete} color="#8e4dff" />
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}

export default DevItem;
