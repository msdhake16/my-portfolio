import React from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './SubComponents/ScrollToTop';
import { Carousel } from 'react-responsive-carousel'; 
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = ({data = { projects : []}}) => {

  const {projects} = data;
  const {hash} = useLocation();

  let myProjects = projects.map((projects) => {
    return <div key={projects.title} className="columns portfolio-item">
       <div className="item-wrap">
        <a href={projects.url} title={projects.title}>
           <img alt={projects.title} src={`images/portfolio/${projects.image}`} />
           <div className="overlay">
              <div className="portfolio-item-meta">
             <h5>{projects.title}</h5>
                 <p>{projects.category}</p>
              </div>
            </div>
          <div className="link-icon"><i className="fa fa-link"></i></div>
        </a>
      </div>
    </div>
  })

    return (
      <section id="portfolio">
        {hash === "#portfolio" && <ScrollToTop/>}
      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <Carousel autoPlay={true}>
                  {myProjects}
                </Carousel>
            </div>
          </div>
      </div>
   </section>
    );
}

export default Portfolio;
