import React, { useState, useEffect } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { FaPencilAlt, FaRegTrashAlt } from 'react-icons/fa'
import {toast} from 'react-toastify'

function ContactDetails({contacts,deleteContact}) {
    const [contact, setContact] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const foundContact = contacts.find((contact) => contact.id === id)
    useEffect(() => {
        if(id && foundContact){
            setContact(foundContact)
        }

    }, [id])

    const handleDelete = (id) => {
        toast.success('Contact is deleted success')
        deleteContact(id)
        navigate('/contacts')
    }

    const {
        firstName, lastName, email, profession, bio, gender, dateOfBirth, image   

    } = contact

    return (
        <>
            <h2 className='text-center mb-4'>Contact Details</h2>
            
            <Card className='mb-4'>
                <div className='d-flex'>
                    <Card.Img className='card-img' src={image} />
                        <Card.Body>
                            <Card.Title>
                                <span className='text-dark'>{firstName} {lastName}</span>
                            </Card.Title>
                            <Card.Subtitle className='mb-3 text-muted'>{profession}</Card.Subtitle>
                            <Card.Text>{bio}</Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                                <ListGroup.Item>Email: {email}</ListGroup.Item>
                                <ListGroup.Item>Date of Birth: {' '} 
                                {dateOfBirth instanceof Object 
                                ? format(dateOfBirth,'dd/MM/yyyy'): dateOfBirth}
                                </ListGroup.Item>
                            </ListGroup>
                            <div className="card-btn mt-3">
                                <Card.Link href="#">
                                    <Button variant='warning ms-3' size='md' type='view'>
                                        <FaPencilAlt />
                                    </Button>
                                    </Card.Link>
                                    <Card.Link>
                                    <Button variant='danger ms-3' size='md' onClick={() => handleDelete(id)}>
                                        <FaRegTrashAlt />
                                    </Button>
                                </Card.Link>
                            </div>
                        </Card.Body>
                </div>
            </Card>
        </>
      )
}

export default ContactDetails