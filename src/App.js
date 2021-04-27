import React, { useState } from 'react'
import Jobs from './fetchJobs'
import { Col, Container, Row } from 'react-bootstrap'
import Job from './job.js'
import JobPagination from './jobPagination'
import SearchForm from './searchForm'

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)

  const { jobs, loading, error, hasNextPage } = Jobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)

    setParams((prevParams) => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-5">
      <Row>
        <Col sm="6">
          <div
            style={{
              border: '1px solid #007BFF',
              borderRadius: '10px',
              padding: '10px',
              background: '#FFF',
            }}>
            <h2 className="mb-4" style={{ color: '#007BFF' }}>
              FindTech
            </h2>
            <p className="mb-5">
              If you are looking for a job, you are at the right place because
              we help you find job in technology industry anywhere on the globe.
            </p>
            <SearchForm params={params} onParamChange={handleParamChange} />
          </div>
        </Col>

        <Col sm="6">
          <JobPagination
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />

          {loading && <h3>Fetching data..</h3>}
          {error && <h3>Can't fetch data right now! Try refreshing</h3>}
          <h1>
            {jobs.map((job) => {
              return <Job key={job.id} job={job} />
            })}
          </h1>

          <jobPagination page={page} setPage={setPage} hasNextPage={true} />
        </Col>
      </Row>
    </Container>
  )
}

export default App
