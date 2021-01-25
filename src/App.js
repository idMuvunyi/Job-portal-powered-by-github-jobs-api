import React, { useState } from 'react';
import Jobs from './fetchJobs';
import { Container } from 'react-bootstrap';
import Job from './job.js';
import JobPagination from './jobPagination';
import SearchForm from './searchForm';

function App() {
  
  const [ params, setParams ] = useState({});
  const [ page, setPage ] = useState(1);
  
  const {jobs, loading, error, hasNextPage} = Jobs(params, page);
  
  function handleParamChange(e){
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    
    setParams(prevParams => {
      return{...prevParams, [param]: value}
    })
  }
  
  return (
    <Container className="my-5">
      <h2 className="mb-4">GitHub Jobs Portal</h2>
      <SearchForm params={params} onParamChange={handleParamChange}/>
        
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      
      {loading && <h3>Fetching data..</h3>}
      {error && <h3>Can't fetch data right now! Try refreshing</h3>}
      <h1>{jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}</h1>
      
      <jobPagination page={page} setPage={setPage}  hasNextPage={true}/>
    </Container>
  );
}

export default App;
