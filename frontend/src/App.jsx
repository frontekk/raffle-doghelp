import { useState } from "react";
import "./App.css";
import RaffleCard from "./components/RaffleCard";

function App() {
  const raffleAmount = 100;
  return (
    <div className="font-myfont">
      {Array.from({ length: raffleAmount }, (_, i) => (
        <RaffleCard key={i} id={i} />
      ))}
    </div>
  );
}

export default App;
