import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = () => {
  return (
    <Row>
    <Col lg={1}>
        <img 
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"
        />
    </Col>
    <Col lg={11}>
        <div>
            박해진
        </div>
        <div>
            010-1111-1111
        </div>
    </Col>
    </Row>
  )
}

export default ContactItem
