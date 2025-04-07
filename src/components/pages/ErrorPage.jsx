import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-black text-[#F5F5F5]">
    <h1 className="text-6xl font-bold">404</h1>
    <p className="mt-4 text-xl">Sengaja yak!</p>
    <Link to="/" className="mt-6 bg-blue-500 hover:bg-blue-600 text-[#F5F5F5] py-2 px-4 rounded">
      Iya, maaf.
    </Link>
  </div>
);

export default ErrorPage;
