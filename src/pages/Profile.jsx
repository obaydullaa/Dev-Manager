import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react'
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/Auth.context';

const uploadPercentage = (total, loaded) => Math.floor((total/loaded) * 100);

function Profile() {
  const {user} = useContext(AuthContext);
  const [file, setFile] = useState(null)
  const [percent, setPercent] = useState(0)

  const handleSubmit = async (evt) => {
    console.log('hello api')
    evt.preventDefault();
    const formData = new FormData()
    formData.append('files', file)
    //Send the request to server
    try{
      const upload_res = await axios('http://localhost:1337/api/upload',
       {
        method: 'POST',
        data: formData,

        onUploadProgress: (progress) => {
          const percentageData = uploadPercentage(progress.total, progress.loaded)
          setPercent(percentageData)
        },
      })

    }catch (err) {
      console.log(err.response) 
    }
  }

  const handleChange = (evt) => {
    setFile(evt.target.files[0])
    console.log(evt.target.files[0])
  }
  console.log(percent)
  return (
    <>
      <Container>
        <Row>
          <div className="user-wrapper">

            <form onSubmit={handleSubmit}>
              <input type='file' accept='image/*' onChange={handleChange} />
              <Button type='submit'>Upload </Button>
            </form>
            <ProgressBar striped variant="success" now={40} />
            <h4 className='mt-4'>Name: {user.username}</h4>
            <h4>Email: {user.email}</h4>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Profile