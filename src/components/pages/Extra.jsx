import React, { useState, useEffect } from 'react';
import arkyna from '../../assets/arkyna.png';
import loadingImg from '../../assets/loading.png';

const getApiUrl = (endpoint) => {
  const baseUrl = import.meta.env.VITE_API_URL_2;
  return baseUrl.replace(':endpoint', endpoint);
};

const Extra = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch(getApiUrl('quoteRand'));
      if (!response.ok) {
        throw new Error(`Error fetching quote: ${response.statusText}`);
      }
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].quote);
        setAuthor(data[randomIndex].author);
      } else {
        throw new Error("Data kosong / Invalid data format");
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-[90%] my-[100px] mx-auto">
      <div className="lg:w-1/3 max-w-sm mx-auto">
        <a href="https://github.com/Arkyna" target="_blank" rel="noopener noreferrer">
          <img src={arkyna} alt="arkyna" className="w-full rounded-[10px] object-contain transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
        </a>
      </div>
      <div className="lg:w-2/3 text-[#F5F5F5] text-center mt-8 lg:mt-0 px-4">
        <h3 className="text-2xl mb-5 font-bold">Random Quote</h3>
        {loading ? (
          <p>Memuat opini...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <p>
            {quote} <br />
            <span className="text-sm">— {author}</span>
          </p>
        )}
        <button
          onClick={fetchQuote}
          className="mt-4 transition-colors text-[#F5F5F5] py-2 px-4 rounded inline-flex items-center justify-center cursor-pointer"
        >
          <img
            src={loadingImg}
            alt="Refresh Quote"
            className="w-8 h-8 animate-spin"
            style={{ animationDuration: '3s' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Extra;
