import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import bgImage from "../../assets/Untitled-1a.png";
import album1Img from "../../assets/album1.png";
import album2Img from "../../assets/album2.png";
import LoadingScreen from '../misc/LoadingScreen';

const getApiUrl = (endpoint) => {
  const baseUrl = import.meta.env.VITE_API_URL_1;
  return baseUrl.replace(':endpoint', endpoint);
};

const localAlbumImages = {
  "1": album1Img,
  "2": album2Img,
};

const useAlbumsData = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch(getApiUrl('albumList'));
        if (!response.ok) {
          throw new Error(`Error fetching albums: ${response.statusText}`);
        }
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, []);

  return { albums, error, loading };
};

const Album = () => {
  const { albums, error, loading } = useAlbumsData();

  const [filterText, setFilterText] = useState('');
  const filterInputRef = useRef(null);

  const handleFilterChange = useCallback((e) => {
    setFilterText(e.target.value);
  }, []);

  const filteredAlbums = useMemo(() => {
    return albums.filter(album =>
      album.albumName.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [albums, filterText]);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto py-20 text-[#F5F5F5]">
        <h1 className="text-4xl font-bold text-center mb-10">Album Favorit Saya</h1>

        <div className="mb-8 text-center">
          <input
            type="text"
            ref={filterInputRef}
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Filter albums..."
            className="p-2 rounded border border-gray-300"
          />
        </div>

        <div className="space-y-6">
          {filteredAlbums.map(album => (
            <div key={album.id} className="flex items-center gap-4 bg-black p-4 rounded shadow-lg">
              <div className="w-[150px] flex-shrink-0">
                <img
                  src={localAlbumImages[album.id] || '/path/to/default-image.jpg'}
                  alt={album.albumName}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{album.albumName}</h2>
                {album.artist && <p className="mt-2">Artist: {album.artist}</p>}
                {album.genre && <p className="mt-2">Genre: {album.genre}</p>}
                {album.releaseDate && (
                  <p className="mt-2">
                    Release Date: {new Date(album.releaseDate).toLocaleDateString()}
                  </p>
                )}
                {album.description && <p className="mt-2">{album.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
