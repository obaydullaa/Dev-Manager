import React from 'react'

import {Card, ListGroup} from 'react-bootstrap'

export default function Contact({contact}) {
    console.log(contact)
    const {firstName, lastName, email, profession, gender, image, dateOfBirth, bio} = contact
  return (
    <>
        <Card className='mb-4'>
            <div className='d-flex'>
                <Card.Img className='card-img' src={image} />
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                        <Card.Subtitle>{profession}</Card.Subtitle>
                        <Card.Text>{bio}</Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                            <ListGroup.Item>Email: {email}</ListGroup.Item>
                            <ListGroup.Item>Date of Birth: {dateOfBirth}</ListGroup.Item>
                        </ListGroup>
                        <div className="card-btn mt-3">
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </div>
                    </Card.Body>
            </div>
        </Card>
    </>
  )
}
