import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import bgImage from "../../assets/Untitled-1a.png";
import LoadingScreen from '../misc/LoadingScreen';

const getApiUrl = (endpoint) => {
  const baseUrl = import.meta.env.VITE_API_URL_2;
  return baseUrl.replace(':endpoint', endpoint);
};

const useTechData = () => {
  const [techData, setTechData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const response = await fetch(getApiUrl('techList'));
        if (!response.ok) {
          throw new Error(`Error fetching tech: ${response.statusText}`);
        }
        const data = await response.json();
        setTechData(data);
      } catch (error) {
        console.error('Error fetching tech:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTech();
  }, []);

  return { techData, error, loading };
};

const Tech = () => {
  const { techData, error, loading } = useTechData();
  const [filterText, setFilterText] = useState('');
  const filterInputRef = useRef(null);

  const handleFilterChange = useCallback((e) => {
    setFilterText(e.target.value);
  }, []);

  const techImagesModules = import.meta.glob('../../assets/tech*.{jpg,png}', { eager: true });

  const localTechImages = useMemo(() => {
    const images = {};
    for (const path in techImagesModules) {
      const match = path.match(/tech(\d+)\.(png|jpg)$/);
      if (match) {
        images[match[1]] = techImagesModules[path].default;
      }
    }
    return images;
  }, [techImagesModules]);

  const filteredTech = useMemo(() => {
    return techData.filter((tech) =>
      tech.techName.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [techData, filterText]);

  if (loading) return <LoadingScreen />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto py-20 text-[#F5F5F5]">
        <h1 className="text-4xl font-bold text-center mb-10">Conveniences</h1>

        <div className="mb-8 text-center">
          <input
            type="text"
            ref={filterInputRef}
            value={filterText}
            onChange={handleFilterChange}
            placeholder="Filter tech..."
            className="p-2 rounded border border-gray-300"
          />
        </div>

        <div className="space-y-6">
          {filteredTech.map((tech) => (
            <div key={tech.id} className="flex items-center gap-4 bg-black p-4 rounded shadow-lg">
              <div className="w-[150px] flex-shrink-0">
                <img
                  src={localTechImages[tech.id] || '/path/to/default-tech.jpg'}
                  alt={tech.techName}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{tech.techName}</h2>
                {tech.creator && <p className="mt-2">Creator: {tech.creator}</p>}
                {tech.releaseDate && (
                  <p className="mt-2">
                    Release Date: {new Date(tech.releaseDate).toLocaleDateString()}
                  </p>
                )}
                {tech.techType && <p className="mt-2">Type: {tech.techType}</p>}
                {tech.comment && <p className="mt-2">Comment: {tech.comment}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
