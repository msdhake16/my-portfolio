import React from 'react';
import ReactTyped from 'react-typed';
import SocialComponent from './SubComponents/SocialComponent';

const Header = ({data = { myInfo : [], address : {}, social : []}}) =>{
   
      const {myInfo, name, occupation, description, address : {city}, social} = data;

      return (
         <header id="home">
            <div className="row banner">
               <div className="banner-text">
                  <h3>Hello,  my  name  is </h3>
                  <h1 className="responsive-headline"> {name}.</h1>
                  <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  <h3>And I'm a </h3><h1>
                  {myInfo.length === 0 ? null : 
                     <ReactTyped
                        strings={myInfo}
                        typeSpeed={80}
                        backSpeed={80}
                        backDelay={1}
                        loop
                        smartBackspace
                     />
                  }</h1>
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
