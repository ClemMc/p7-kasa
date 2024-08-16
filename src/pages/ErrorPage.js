import { Link } from 'react-router-dom';
import '../styles/errorPage.scss';
import React, { useEffect } from 'react';


const ErrorPage = () => {
    useEffect(() => {
      document.title = '404 - Kasa';
    }, []);
  return (
    <div className="errorPage">
      <h1 className="errorCode">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="backToHome">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;
