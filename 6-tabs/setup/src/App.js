import React, { useState, useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App () {
  
  const [ isLoading, setIsLoading ] = useState( true );
  const [ jobs, setJobs ] = useState( [] );
  const [ value, setValue ] = useState( 0 );

  // Fetch Jobs
  const fetchJobs = async () => {
    const response = await fetch( url );
    const newJobs = await response.json();
    setJobs( newJobs );
    console.log(newJobs);
    setIsLoading( false );
  }

  // Call fetchJobs on App render
  useEffect( () => {
    fetchJobs();
  }, [] );

  if ( isLoading )
  {
    return <section className="loading section">
      <h2>Loading...</h2>
    </section>
  }

  const { company, dates, duties, title } = jobs[ value ];

  return (
    <section className="section">
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map( ( item, index ) => {
              return <button key={index} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`} >{item.company}</button>
            })
          }
        </div>
        <article className="job-info">
          <h3>{ title }</h3>
          <h4>{ company }</h4>
          <p className="job-date">{ dates }</p>
          {
            duties.map( ( duty, index ) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleRight className="job-icon"></FaAngleRight>
                  <p>{ duty }</p>
                </div>
              )
            })
          }
        </article>
      </div>
    </section>
  );
}

export default App
