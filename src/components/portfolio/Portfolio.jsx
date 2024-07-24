import React from 'react';
import IMG1 from '../../assets/flipkart.png';
import IMG2 from '../../assets/log.png';
import IMG3 from '../../assets/movies.png';
import IMG4 from '../../assets/products.png';
import IMG5 from '../../assets/word.png';
import IMG6 from '../../assets/profile.png';
import './portfolio.css';

function Portfolio () {
  let soloProjects = [
    {
      id: 1,
      title: 'E-commerce web site',
      img: IMG1,
      description:
        'E-commerce web site is a simple website was built to reach a bigger audience.',
      technologies: 'React | HTML | CSS',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | HTML | CSS',
    },
    {
      id: 3,
      title: 'Students Records',
      img: IMG2,
      description: 'Students Records is a simple website to record Students details',
      technologies: 'React | HTML | CSS',

    },
    {
      id: 4,
      title: 'Movies',
      img: IMG3,
      description:'Movies API is a simple website to fetch details about movies',
      technologies: 'React | HTML | CSS',
    },
    {
      id: 5,
      title: 'World Press',
      img: IMG5,
      description:'Fully responsive interactive website built based on HTML and CSS',
      technologies: 'HTML | CSS',

    },
    {
      id: 6,
      title: 'Personal Portfolio',
      img: IMG6,
      description:'it is a simple persoanl details portfolio',
      technologies: 'React | HTML | CSS',    
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
