import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel';
import '../styles/propertyPage.scss';
import Tag from '../components/Tag';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import ErrorPage from '../pages/ErrorPage';

const PropertyPage = () => {
  useEffect(() => {
    document.title = 'Logement - Kasa';
}, []); 
  const { id } = useParams();
  const logement = logements.find(l => l.id === id);

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <div className="propertyPage">
      <Carousel pictures={logement.pictures} />
      
      <div className="propertyDetails">
        <div className="propertyInfo">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className="tagsContainer">
            {logement.tags?.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
        </div>

        <div className="hostInfo">
          <div className="host">
            <span className="hostName">{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} className="hostPicture" />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="collapseContainer">
        {logement.description && (
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        )}

        {logement.equipments && (
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        )}
      </div>
    </div>
  );
};

export default PropertyPage;
