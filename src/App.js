import React, { useEffect, useState } from 'react';

const App = () => {

  const [resumeResponse, setResumeResponse] = useState({});
  
  const getResumeData = async () => {
    try {
      let response = await fetch('/resumeData.json');
      response = await response.json();
      setResumeResponse({ resumeData: response });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getResumeData();
  },[]);

    return (
      <div>
        <h1>in app...</h1>
        <code>{JSON.stringify(resumeResponse, undefined, 2)}</code>
      </div>
    );
}

export default App;
