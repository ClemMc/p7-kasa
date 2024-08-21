import React, { useEffect } from 'react';
import '../styles/homePage.scss';
import imgHome from '../assets/imgHome.png';
import Card from '../components/Card';
import Banner from '../components/Banner';
import logements from '../data/logements.json';

const HomePage = () => {
    useEffect(() => {
        document.title = 'Accueil - Kasa';
    }, []);

    return (
        <main className='homePage'>
            <Banner class='image' img={imgHome} alt="Slogan" overlayText="Chez vous, partout et ailleurs" />
            <section className="card-section">
                <article className="card-container">
                {logements.map((logement) => (
                        <Card 
                            key={logement.id} 
                            title={logement.title} 
                            link={`/property/${logement.id}`} 
                            cover={logement.cover}
                        />
                    ))}
                </article>
            </section>
        </main>
    );
};


export default HomePage;
