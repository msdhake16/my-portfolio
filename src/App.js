import React, { useEffect, useState } from 'react';
import Header from './Components/Header';


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
        
      </div>
    );
}

export default App;
