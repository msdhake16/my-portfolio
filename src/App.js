import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';

const App = () => {

  const [resumeResponse, setResumeResponse] = useState({});
  
  const getResumeData = async () => {
    try {
      let response = await fetch('/resumeData.json');
      response = await response.json();
      setResumeResponse({ ...response });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getResumeData();
  },[]);

    return (
      <div className="App">
        <Header data={resumeResponse.main} />
        <About data={resumeResponse.main} />
        <Resume data={resumeResponse.resume} />
        <Portfolio data={resumeResponse.portfolio} />
        <Testimonials data={resumeResponse.testimonials} />
        <Contact data={resumeResponse.main} />
        <Footer data={resumeResponse.main} />
      </div>
    );
}

export default App;
