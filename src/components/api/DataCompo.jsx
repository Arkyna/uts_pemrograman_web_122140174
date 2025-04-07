import React, { useState, useEffect } from 'react';

const API_URLS = [
  import.meta.env.VITE_API_URL_1, // API1: untuk gameList dan albumList
  import.meta.env.VITE_API_URL_2  // API2: untuk techList dan randQuote im just that broke
].filter(Boolean); 

const endpointApiMapping = {
  gameList: 0,
  albumList: 0,
  techList: 1,
};

const getApiUrlForEndpoint = (endpoint) => {
  const apiIndex = endpointApiMapping[endpoint];
  if (apiIndex === undefined) {
    throw new Error(`Mapping API tidak ditemukan untuk endpoint: ${endpoint}`);
  }
  const baseUrl = API_URLS[apiIndex];
  return baseUrl.replace(':endpoint', endpoint);
};

const fetchData = async (endpoint) => {
  const url = getApiUrlForEndpoint(endpoint);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }
  return response.json();
};

const useFetchAllData = () => {
  const [gameData, setGameData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [techData, setTechData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [games, albums, tech] = await Promise.all([
          fetchData('gameList'),
          fetchData('albumList'),
          fetchData('techList'),
        ]);
        setGameData(games);
        setAlbumData(albums);
        setTechData(tech);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return { gameData, albumData, techData, loading, error };
};

const DataComponent = () => {
  const { gameData, albumData, techData, loading, error } = useFetchAllData();

  if (loading) return <p>Tunggu, memuat...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <section>
        <h2>Game List</h2>
        {gameData.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Album List</h2>
        {albumData.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Tech List</h2>
        {techData.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DataComponent;
