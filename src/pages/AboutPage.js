import '../styles/aboutPage.scss';
import aboutImage from '../assets/aboutImage.png';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import React, { useEffect } from 'react';

const sections = [
  { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
  { title: 'Respect', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
  { title: 'Service', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
  { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.' },
];

const AboutPage = () => {
    useEffect(() => {
        document.title = 'À propos - Kasa';
    }, []);
  return (
    <div className="aboutPage">
      <Banner class='headerImage' img={aboutImage} alt="About" />
      <section className="sectionsContainer">
        {sections.map((section, index) => (
          <Collapse 
            key={index} 
            title={section.title}
          >
            <p>{section.content}</p>
          </Collapse>
        ))}
      </section>
    </div>
  );
};

export default AboutPage;
