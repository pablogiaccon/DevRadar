import React, { useEffect, useState, useCallback } from "react";

import api from "./services/api";

import "./styles/global.css";

import "./Sidebar.css";
import "./Main.css";
import "./App.css";
import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("devs");
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  const handleDeleteDev = useCallback((devId, devs) => {
    const updatedDevs = devs.filter((dev) => dev._id !== devId);
    setDevs(updatedDevs);
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map((dev) => (
            <DevItem
              key={dev._id}
              dev={dev}
              handleDeleteDev={(id) => handleDeleteDev(id, devs)}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
