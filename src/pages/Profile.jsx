import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react'
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context';
import {axiosPrivateInstance} from '../config/axios.js'

// const uploadPercentage = (total, loaded) => Math.floor((total/loaded) * 100);

function Profile() {
  const {user, token} = useContext(AuthContext);
  const [file, setFile] = useState(null)
  const [submitting, setSubmitting] = useState(false)


  const handleChange = (evt) => {
    setFile(evt.target.files[0])
    console.log(evt.target.files)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const data = {
      firstName: 'Md',
      lastName: 'Obaydulla',
      user: user.id,
    }
    const formData = new FormData()
    formData.append('files.profilePicture', file, file.name)
    formData.append('data', JSON.stringify(data))
    //Image upload alone
    //along with resource creation
    //Upload file to server
    try{
      setSubmitting(true)
      const response= await axiosPrivateInstance(token).post(
        '/profiles?populate=*', 
        formData,
        {
          onUploadProgress: (progress) => {
            console.log(progress)
          }
        }
      )
      console.log(response.data.data.attributes.profilePicture.data.attributes.url)
      setSubmitting(false)
    }catch (err) {
      console.log(err) 
    }
  }

  const {username, email} = user
  return (
    <>
      <Container>
        <Row>
          <div className="user-wrapper">
            <ProgressBar striped variant="success" now={40} />
            <h4 className='mt-4'>Name: {username}</h4>
            <h4>Email: {email}</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='profilePicture'> Profile Picture: </label>
            <input type='file' id='profilePicture' accept='image/*' onChange={handleChange} />

            <Button type='submit' disabled={submitting}>Upload</Button>
          </form>
        </Row>
      </Container>
    </>
  )
}

export default Profile