import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="mb-3">
      <Card.Body>
        <div>
          <div>
            <Card.Title>
              {job.title} -{' '}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge
              variant="secondary"
              className="m-2"
              style={{ fontSize: '17px' }}>
              {job.type}
            </Badge>
            <Badge variant="secondary" style={{ fontSize: '17px' }}>
              {job.location}
            </Badge>
            <div style={{ wordBreak: 'break-all', fontSize: '15px' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>

          <img
            className="d-none d-md-block"
            height="50"
            src={job.company_logo}
            alt={job.company}
          />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen((prevOpen) => !prevOpen)}
            variant="info">
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4" style={{ fontSize: '15px' }}>
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}
