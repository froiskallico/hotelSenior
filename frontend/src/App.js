import React, { useState, useEffect } from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import Section from "./components/Section";
import RadioInput from "./components/RadioInput";
import GuestsTable from "./components/GuestsTable";
import CheckinForm from "./components/CheckinForm";
import TransitionsModal from "./components/NewGuestModal";

import { Previous, Next } from "./components/NavigationButtons";

import "./global.css";

import api from "./services/api";

function App() {
  const [guests, setGuests] = useState([]);
  const [pg, setPg] = useState(0);
  const [present, setPresent] = useState(true);

  useEffect(() => {
    async function loadGuests() {
      const params = {
        pg_size: 3,
        pg,
        present
      };

      const response = await api.get("/guests", { params });
      setGuests(response.data);
    }

    loadGuests();
  }, [pg, present]);

  function handleRadioOptionChange() {
    setPresent(!present);
  }
  
  return (
    <div id="app">
      <TopBar />

      <main id="main">
        <TransitionsModal />
        <Section title="Novo Check-in">
          <CheckinForm />
          
        </Section>

        <Section title="Consultas">
          <p>Filtrar por:</p>

          <RadioInput
            name="present"
            id="true"
            value="true"
            label="Pessoas ainda presentes"
            checked={present}
            onChange={handleRadioOptionChange}
          />

          <RadioInput
            name="present"
            id="false"
            value="false"
            label="Pessoas que já deixaram o hotel"
            checked={!present}
            onChange={handleRadioOptionChange}
          />

          <GuestsTable guests={guests}/>

          <div className="pagination">
          <Previous onClick={setPg} currentPage={pg}/>
          <p>{pg}</p>
          <Next onClick={setPg} currentPage={pg}/>
          </div>
        </Section>
      </main>
    </div>
  );
}

export default App;
