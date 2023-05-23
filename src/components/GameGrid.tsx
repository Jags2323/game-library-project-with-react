import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchedGameDetails {
  count: number;
  results: Game[]; //array of Game objects
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchedGameDetails>("/games")     // response has to be in the format of FetchedGameDetails
      .then((res) => setGames(res.data.results))        //
      .catch((err) => setError(err.message));
  });
  return (
    <ul>
        {games.map(game => <li key={game.id}>game.name</li>)}
    </ul>
  )
  
};

export default GameGrid;
