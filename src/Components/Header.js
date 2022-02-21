import React from 'react';
import Link from './Link';
import ReactTyped from 'react-typed';
import SocialComponent from './SubComponents/SocialComponent';

const Header = ({data = { myInfo : [], address : {}, social : []}}) =>{
   
   console.log(data);
      const {myInfo, name, occupation, description, address : {city}, social} = data;

      return (
         <header id="home">
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>  

               <ul id="nav" className="nav">
                  <li className="current"><Link className="smoothscroll" href="#home">Home</Link></li>
               </ul>
            </nav>


            <div className="row banner">
               <div className="banner-text">
                  <h3>Hello,  my  name  is </h3>
                  <h1 className="responsive-headline"> {name}.</h1>
                  <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  <h3>And I'm a </h3><h1>
                  <ReactTyped
                       strings={myInfo}
                       typeSpeed={80}
                       backSpeed={80}
                       backDelay={1}
                       loop
                       smartBackspace
                  /></h1>
                  <ul className="social">
                     <SocialComponent social={social} />
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
}

export default Header;
