import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import bgImage from "../../assets/Untitled-1a.png";
import LoadingScreen from '../misc/LoadingScreen';

const getApiUrl = (endpoint) => {
  const baseUrl = import.meta.env.VITE_API_URL_1;
  return baseUrl.replace(':endpoint', endpoint);
};

const useGamesData = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(getApiUrl('gameList'));
        if (!response.ok) {
          throw new Error(`Error fetching games: ${response.statusText}`);
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  return { games, error, loading };
};

const Games = () => {
  const { games, error, loading } = useGamesData();
  const [filterText, setFilterText] = useState('');
  const filterInputRef = useRef(null);

  const gameImagesModules = import.meta.glob('../../assets/game*.{jpg,png}', { eager: true });

  const localGameImages = useMemo(() => {
    const images = {};
    for (const path in gameImagesModules) {
      const match = path.match(/game(\d+)\.(png|jpg)$/);
      if (match) {
        images[match[1]] = gameImagesModules[path].default;
      }
    }
    return images;
  }, [gameImagesModules]);

  const handleFilterChange = useCallback((e) => {
    setFilterText(e.target.value);
  }, []);

  const filteredGames = useMemo(() => {
    return games.filter((game) =>
      game.gameName.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [games, filterText]);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto py-20 text-[#F5F5F5]">
        <h1 className="text-4xl font-bold text-center mb-10">Only Memorables One</h1>

        <div className="mb-8 text-center">
          <input
            type="text"
            ref={filterInputRef}
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Filter games..."
            className="p-2 rounded border border-gray-300"
          />
        </div>

        <div className="space-y-6">
          {filteredGames.map(game => (
            <div key={game.id} className="flex items-center gap-4 bg-black p-4 rounded shadow-lg">
              <div className="w-[150px] flex-shrink-0">
                <img
                  src={localGameImages[game.id] || '/path/to/default-game.jpg'}
                  alt={game.gameName}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{game.gameName}</h2>
                {game.developer && <p className="mt-2">Developer: {game.publisher}</p>}
                {game.genre && <p className="mt-2">Genre: {game.genre}</p>}
                {game.releaseDate && (
                  <p className="mt-2">
                    Release Date: {new Date(game.releaseDate).toLocaleDateString()}
                  </p>
                )}
                {game.mode && <p className="mt-2">Mode: {game.mode}</p>}
                {game.comment && <p className="mt-2">Comment: {game.comment}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
