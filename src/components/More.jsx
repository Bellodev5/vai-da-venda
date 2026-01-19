import React from 'react';
import { Link } from 'react-router-dom';

export default function More() {
  return (
    <div className="text-center">
      <Link
        to="/planos"
        className="inline-block bg-brand text-white font-bold py-3 px-10 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition"
      >
        VER MAIS SOBRE
      </Link>
    </div>
  );
}
