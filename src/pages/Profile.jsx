import React from 'react'
import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../context/Auth.context'

function Profile() {
  const {user} = useContext(AuthContext);
  console.log(user.username)
  return (
    <>
      <Container>
        <Row>
          <div className="user-wrapper">
            <h2>{user.username}</h2>
            <h2>{user.email}</h2>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Profile