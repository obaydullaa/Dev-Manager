/**
 * Date: 09-08-2022
 * =======================
 * Dev Manager :
 *  CRUD
 *  Form Handling
 *  Remote API server connection and handling
 *  Routing
 *  Context API
 *  Authentication (Registration, Login, Logout)
 *  Advance login - forgot-password, password-reset, email - sending
 *  Image-upload, pagination
 *  Search Functionality
 *  Securely identify the user (Authorization)
 * 
 */
/**
 * All Package Install
 * ========================================
 * 1. For Id Generator -> unick id
 * 2. For date picker : search ::  react Date picker   ->  https://reactdatepicker.com/
 * 3. From validation : React hook form ->    https://react-hook-form.com/
 *    4.  yup for showing error         ->    https://www.npmjs.com/package/yup
 *      react hook form and yup install:  yarn add react-hook-form yup
 *      npm install @hookform/resolvers yup
 * 5. react toastify github pages  -> https://fkhadra.github.io/react-toastify/introduction/
 * 6. axios install -------> yarn add axios
 * 
 */

/**
 * First Part contact create and how display
 * 
 * ===================================================
  npm create vite@latest issue-tracker -- --template react
 
 */

// App.jsx ->
// ==============
// 1. We get contact info :

    const initialContacts = [
    {
      id: 1,
      firstName: 'Barbette',
      lastName: 'Pfertner',
      email: 'bpfertner0@drupal.org',
      profession: 'Web Developer',
      gender: 'Female',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      dateOfBirth: '05/11/2021',
      bio: 'All About me',
    },
    {
      id: 2,
      firstName: 'Ignatius',
      lastName: 'McPhilip',
      email: 'imcphilip1@toplist.cz',
      profession: 'Software Developer',
  
      gender: 'Male',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      dateOfBirth: '04/04/2022',
      bio: 'All About me',
    },
    {
      id: 3,
      firstName: 'Fletch',
      lastName: 'Veel',
      email: 'fveel2@yellowbook.com',
      profession: 'Graphic Designer',
  
      gender: 'Male',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      dateOfBirth: '17/05/2022',
      bio: 'All About me',
    },
    {
      id: 4,
      firstName: 'Shawn',
      lastName: 'Lawrenz',
      email: 'slawrenz3@independent.co.uk',
      profession: 'Data entry specialist',
      gender: 'Female',
      image: 'https://randomuser.me/api/portraits/women/80.jpg',
      dateOfBirth: '30/07/2022',
      bio: 'All About me',
    },
    {
      id: 5,
      firstName: 'Bucky',
      lastName: 'Casaccio',
      email: 'bcasaccio4@netlog.com',
      gender: 'Male',
      profession: 'Data scientist',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      dateOfBirth: '21/03/2022',
      bio: 'All About me',
    },
    {
      id: 6,
      firstName: 'Regan',
      lastName: 'Lodford',
      email: 'rlodford5@nbcnews.com',
      profession: 'python Developer',
      gender: 'Female',
      image: 'https://randomuser.me/api/portraits/women/81.jpg',
      dateOfBirth: '16/01/2022',
      bio: 'All About me',
    },
    {
      id: 7,
      firstName: 'Hubert',
      lastName: 'Langhorne',
      email: 'hlanghorne6@thetimes.co.uk',
      gender: 'Male',
      profession: 'CPA Marketer',
      image: 'https://randomuser.me/api/portraits/men/80.jpg',
      dateOfBirth: '05/02/2022',
      bio: 'All About me',
    },
  ]
// 2. tracking this info we get state -> const [contacts, setContacts] = useState(initialContacts)
// 3. For organized Create folder: "contacts" folder -> Contacts.jsc

  // App.jsx -:
  // ==========
  function App() {
    const [contacts, setContacts] = useState(initialContacts)
    return (
      <div>
       <Contacts contacts={contacts}/>
      </div>
    )
  }
  
  export default App
  
  4. এখন আমরা contacts গুলো দেখাবো এই জন্য লুপ করব। যেহেতু লুপ এবং পেজিনেশন করব সেই জন্য আমরা আরেকটা contact নামে কম্পোনেট নিব । সেখানে contact গুলো রাখব ।  
    // Contacts.jsx
    // ==================
    import { default as React, default as React, useReducer, useState } from 'react'
import Contact from './Contact'

    export default function Contacts({contacts}) {
    return (
        <>
        {contacts.map((contact) => (
            <Contact key='contact.id' contact={contact}/>
        ))}
        </>
    )
    }

    Contact.jsx:
    ====================

    export default function Contact({contact}) {
        console.log(contact)
    return (
        <div>Contact</div>
    )
    }

    // এখন আমরা ব্রাউজারে দেখব contact 7 বার দেখিয়েছে কারণ আমাদের 7 ডাটা আছে ।
5. এখন আমরা src folder এর মধ্য 'layout' folder নিয়ে এর মধ্য Header.jsx নামের ফাইল নিব । react bootstrap থেকে NabBar কপি করে  Header.jsx এর মধ্য পেস্ট করে দিব । 
App.jsx:

import Contacts from './contacts/Contacts'
import Header from './layouts/Header'

function App() {
  const [contacts, setContacts] = useState(initialContacts)

  return (
    <div>
      <Header/>
      <Contacts contacts={contacts}/>
    </div>
  )
}

export default App


// Header.jsx:
// =============
// import React from 'react'

import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'


export default function Header() {
  return (
    <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <Nav.Link href="#" disabled>
                    Link
                </Nav.Link>
                </Nav>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

6. Add font family and text center and some style add
7. Add card markup from card react bootstrap in Contact.jsx
    and dynamically show contacts info
8. add react icons cmd -> yarn add react-icons

// Contact.jsx:
// =================


import React from 'react'

import { Card, ListGroup } from 'react-bootstrap'
import { FaEye, FaLaughBeam, FaRegTrashAlt } from 'react-icons/fa'

export default function Contact({contact}) {
    console.log(contact)
    const {firstName, lastName, email, profession, gender, image, dateOfBirth, bio} = contact
  return (
    <>
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
                            <ListGroup.Item>Date of Birth: {dateOfBirth}</ListGroup.Item>
                        </ListGroup>
                        <div className="card-btn mt-3">
                            <Card.Link href="#">
                                <Button variant='warning ms-3' size='md' type='view'>
                                    <FaEye />
                                </Button>
                                <Button variant='danger ms-3' size='md' type='view'>
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

9.এখন আমরা ডিলিট আইকোনে ক্লিক করলে ডিলেইট হয়ে যাবে সেটা করতে হলে id ধরতে হবে । onClick eventlistener add করব। আমাদের ডাটা রয়েছে App.jsx ফাইলে তাই আমরা App.jsx ফাইলে ফাংশন নিব । এবং সেখান থেকে props হিসাবে ডাটা পাঠিয়ে দিব । 
// App.jsx :
// ===========
function App() {
  const [contacts, setContacts] = useState(initialContacts)

  const deleteContact = (id) => { // this
    console.log(id)
  }

  return (
    <>
      <Header/>
      <Container style={{width: '800px', margin: '0 auto'}} className='pt-5'> 
        <Contacts contacts={contacts} deleteContact={deleteContact}/> // this
      </Container>
    </>
  )
}
ফাইনালি Contact.jsx এর মধ্য callback function নিব । যেন সরাসরি কল না হয়ে যায় । 

আমরা id পেয়েগিয়েছি । এখন আমরা যে id পেয়েছি সেটা বাদে বাকি গুলো contacts state এর মধ্য সেট করে দিব । আমরা ডিরেক্ট মডিফাই করতে পারি । এর জন্য আমরা slice use করতে পারি । আমরা জানি  slice অরিজিনিয়াল array কে ডিরেক্ট মডিফাই করে দেয় । কিন্তু আমরা কখনই অরিজিনিয়াল ডাটা কে মডিফাই করব না । তাহলে আমরা aray helper method use করতে পারি । এর মধ্য আমরা filter use করতে পারি । যে আইটেমটার id আসতেছে সেটা বাদে বাকি আইটেম গুলোকে filter করে contact এ সেট করে দিব। contact এ সেটা হওয়া মানে আবার component new করে রিলোড হবে । 

10. এখন আমরা শিখব contact Add করা। এই জন্য আমরা contacts foler -> contacts -> AddCotact.jsx file নিব । App.jsx ফাইল container এর উপরে রাখব । এর পর react bootstrap থেকে form এনে মার্কাআপ করব। এর পর আমরা ডাইনামিক contact set করব। 

আমাদের contact file রয়েছে contacts -> AddContact.jsx file এ । কিন্তু আমাদের contact info এড হবে App.jsx এ । Children থেকে প্যারেন্টে ডাটা পাঠাতে হবে । এই জন্য আমরা App.jsx ফাইলে function নিয়ে props হিসবে ডাটা পাঠাবো ।

আমরা আমাদের initialContacts এর মধ্য সেট করে দিতে পারতাম কিন্তু আমাদের একটা ডাটা নেই সেটা হলো id এইজন্য আমর uuid নামের একটা প্যাকেজ ইন্সটল করে নিব। 

Package Install for unick id --> uuid

আমরা ডিরেক্ট initialContacts এর মধ্য পুশ করলে হবে না, কারণ আমাদের অর্জিনিয়াল array কে চেঞ্জ করলে হবে না । নতুন array বানিয়ে দেখাতে হবে ।
 
// App.jsx:
// ===========
import { v4 as uuidv4 } from 'uuid'

import AddContact from './contacts/AddContact'

function App() {
  const [contacts, setContacts] = useState(initialContacts)

  const deleteContact = (id) => {
    const updatedContact = contacts.filter((contact) => contact.id !== id)
    setContacts(updatedContact)
  }

  const addContact = contact => { //this
      id: uuidv4,
      ...contact,
    }
    setContacts([contactToAdd, ...contacts])
  }

  return (
    <>
      <Header/>
      <Container style={{width: '800px', margin: '0 auto'}} className='pt-5'> 
        <AddContact addContact={addContact}/>
        <Contacts contacts={contacts} deleteContact={deleteContact}/>
      </Container>
    </>
  )
}

export default App

// AddContact.jsx:
// =======================
import React from 'react'

import { Col, Row } from 'react-bootstrap'

export default function AddContact({addContact}) {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        bio: '',
        dateOfBirth: new Date(),
        gender: 'male',
        image: '',
    })
    const handleChange = (evt) => {
        setContact({
            ...contact,
            [evt.target.name]: evt.target.value,
        })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(contact)
        // checking validation


        //Form Submission
        addContact(contact)
    }

    const {firstName, lastName, email, profession, bio, dateOfBirth, gender, image} = contact
  return (
    <>
        <h2 className='text-center mb-5'>Add Contact</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='firstName' column>
                        First Name
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="FistName"
                    id='firstName' 
                    name='firstName'
                    value={firstName}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='lastName' column>
                        LastName
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="LastName"
                    id='lastName' 
                    name='lastName'
                    value={lastName}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='email' column>
                        Email
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="email" 
                    placeholder="Email"
                    id='email' 
                    name='email'
                    value={email}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='profession' column>
                    Profession
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="Profession"
                    id='profession' 
                    name='profession'
                    value={profession}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='image' column>
                    Profile Picture
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter link of your profile picture"
                    id='image' 
                    name='image'
                    value={image}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='dateOfBirth' column>
                        Date Of Birth
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="date" 
                    placeholder="dateOfBirth"
                    id='dateOfBirth' 
                    name='dateOfBirth'
                    value={dateOfBirth}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='firstName' column>
                        Gender
                    </Form.Label>
                </Col>
                <Col xs='auto'>
                    <Form.Check
                    type="radio" 
                    name='gender'
                    label='Male'
                    value='male'
                    checked={gender === 'male'}
                    onChange={handleChange}
                    />
                    </Col>
                    <Col xs='auto'>     
                    <Form.Check
                    type="radio" 
                    label='Female'
                    name='gender'
                    value='female'
                    checked={gender === 'female'}
                    onChange={handleChange}
                    />  
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='dateOfBirth' column>
                        Bio
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    as='textarea'
                    type="text" 
                    placeholder="Bio"
                    id='bio' 
                    name='bio'
                    value={bio}
                    onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Button className='text-center' variant='primary' size='md' type='submit'>
                Add Contact
            </Button>
        </Form>
    </>
  )
}


// Class: 11 React Apply (Videos 1.38:58)
//=================================================================

11.  Install React Datepicker
12. react hook form and yup install => yarn add react-hook-form yup
13. npm install @hookform/resolvers yup
14. from এর আগের ফাংশন কমেন্ট করে দিব এবং একটা ইনপুট রেখে বাকি গুলে কমেন্ট করে দিব।
useForm Hook দিয়ে ইরোর মেসেজ দেখিয়েছি ।

import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from 'yup'

export default function AddContact({addContact}) { 
    const [birthYear, setBirthYear] = useState(new Date());
    
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    console.log(errors)
 
    const onSubmit = data => {
        console.log(data)
    }

  return (
    <>
        <h2 className='text-center mb-5'>Add Contact</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} className="mb-3">
                <Col sm={3}>
                    <Form.Label htmlFor='firstName' column>
                        First Name
                    </Form.Label>
                </Col>
                <Col sm={9}>
                    <Form.Control 
                    type="text" 
                    placeholder="FistName"
                    id='firstName' 
                    {...register('firstName', {required: 'FirstName is Required', minLength: {value: 3, message:'Length must be 3'}})}
                    />
                {errors?.firstName?.message}
                </Col>
            </Form.Group>
            <Button className='text-center' variant='primary' size='md' type='submit'>
                Add Contact
            </Button>
        </Form>
    </>
  )
}

15. এখন আমরা react bootstrap & useForm  দিয়ে ইরোর মেসেজ দেখব । 

<Form.Group as={Row} className="mb-3">
<Col sm={3}>
    <Form.Label htmlFor='firstName' column>
        First Name
    </Form.Label>
</Col>
<Col sm={9}>
    <Form.Control 
    type="text" 
    placeholder="FistName"
    id='firstName' 
    {...register('firstName', 
    {required: 'FirstName is Required', 
    minLength: {value: 3, message:'Length must be 3'},
    })}
    isInvalid={errors?.firstName}
    />
    <Form.Control.Feedback type='invalid' >
        {errors?.firstName?.message}
    </Form.Control.Feedback>
</Col>
</Form.Group>

16. এখন আমরা yup use করব। এই জন্য ফাংশনের উপরে schema ভ্যারিএবল নিব এর মধ্য yup লিখব ;
const schema = you.object({
  firstName: yupResolver.string()
  .required('FistName is Required')
  .min(3, 'FistName must be 3 or more')
})

এরপরে UseForm এর মধ্য পেস্ট করে দিব।
const { register, 
  handleSubmit, 
  watch, 
  formState: 
  { errors, isSubmitting },
} = useForm({
  resolver: yupResolver(schema)
});
17. Date of birth ফিল্ড এর জন্য আমরা একটা স্টেট নিব । সেটার মাধ্যমে ম্যানুয়ালি ডিল করবঃ
          const [birthYear, setBirthYear] = useState(new Date())
          dateOfBirth track করতে হলে যা করতে হলে useEffect হুক ইউজ করতে হবে । 

          const [birthYear, setBirthYear] = useState(new Date()) // New Added.
          useEffect(() => {
           setValue('dateOfBirth', birthYear)
          },[birthYear]) 
       
           const { register, 
               handleSubmit, 
               watch, 
               setValue, // এড করা হয়েছে 
               formState:{ errors, isSubmitting },
            } = useForm({
               resolver: yupResolver(schema),
            });

18. submit button  এ অনেক সময় ইউজার বার বার ক্লিক করতে পারে । এ জন্য বার বার সার্ভাসে ফর্ম প্রসেস হতে পারে এটা বন্ধের জন্য আমরা এটা ইউজ করতে পারি । formState:{ errors, isSubmitting, isSubmitSuccessful }, ->  isSubmitting মানে সাবমিট অবস্থায় আছে । এটা ইউজ করে বারবার সাবমিট অফ করতে পারি ।
<Button 
className='text-center' 
variant='primary' size='md' 
type='submit'
disabled={isSubmitting? 'disabled':''}
>
    Add Contact
</Button>

// Part-2:- Edit Update ( length 2:23:39 )
// =============================================================
// 19. profession area selec tor add korbo so bootstrap thake nibo and baki golor mot ovalidate korbo.  

<Form.Group as={Row} className="mb-3">
<Col sm={3}>
    <Form.Label htmlFor='profession' column>
    Profession
    </Form.Label>
</Col>
<Col sm={9}>
<Form.Select
 {...register('profession')} 
 id='profession'
 defaultValue={profession}
 aria-label="Select your profession"
 isInvalid={errors?.profession}
 >
    <option value='' disabled>Select Your Profession</option>
    <option value="developer">Developer</option>
    <option value="designer">Designer</option>
    <option value="marketer">Marketer</option>
    </Form.Select>
    <Form.Control.Feedback type='invalid' >
        {errors?.profession?.message}
    </Form.Control.Feedback>
</Col>
</Form.Group>
20. amra from a default value niye bibo jate var var form add korte na hoi.. amader time save hobe
const defaultValue = {
  firstName: 'Obaydul',
  lastName: 'Islam',
  email: 'obaaydulIslam@gmail.com',
  profession: 'developer',
  bio: 'All about myself, Modify of your own if necessary',
  image: 'https://randomuser.me/api/portraits/men/78.jpg',
}
const {firstName, lastName, email, profession, bio, image} = defaultValue

21. addContact a contact golo add korbo. submit ar modde data golo past kore dibo
  const onSubmit = data => {
    addContact(data)
  }

  এখন একটা ইরোর আসবে একটা object কে jsx এর মধ্য carly bases এর মধ্য লিখতে পারবো না। একটা object direct expresson না। 
  date niye kaj korle ekto jamela hoi... date formate korar jonno amader date-fns dakte hobe amra datepicker install korese datepicker ar sate date-fns add kora ase.

// Contact.jsx 
  <ListGroup.Item>Date of Birth: {' '} 
  {dateOfBirth instanceof Object 
  ? format(dateOfBirth,'dd/MM/yyyy'): dateOfBirth}
  </ListGroup.Item>

  আমরা App.jsx এর মধ্য ডাটা গুলোর মধ্য  id নাম্বার হিসাবে আছে তাই আমরা id স্টিং করে দিব। 

  22. sucess message দেখানোর জন্য আমরা react toastify github pages এখান থেকে এটা ইন্সটল করে এড করে নিব । index.jsx file a css import korbo & and App.jsx file a ToastContainer import korbo.
  amora jekhane toast message dakabo sekhan tost add korbo. amora AddContact a toast msg dakhabo tai sekhane toast import korbo.

// App.js ->
import { ToastContainer } from 'react-toastify'

return (
  <> 
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
  </>
)
//AddContact.jsx

import { toast } from 'react-toastify'

const onSubmit = data => {
  //show flash message
  toast.success('Contact is added Successfully')
  //adding contacts
  addContact(data)
}

23. install react router dom and import  করবimport EditContactimportimport { useNavigate } from 'react-router-dom'
 ContactForm from './src/components/contacts/ContactForm'
 from './src/pages/EditContact'
 । আমরা Header.jsx এ Link এড না করে NavLink এড করব এর কারণ NavLink মেনু তে একটা একটিভ ক্লাস এড করবে । আমাদের প্রোজনে কিছু পেজ নিয়েছি । সেগুলো মেনু তে এড করেছি, এবং রাউটিং করেছি ।
 contacts :-
      AddContact.jsx
      Contact.jsx
      Contacts.jsx

pages :-
    Home.jsx
    EdditContact.jsx
    Login.jsx
    NotFound.jsx
    Register.jsx
    App.jsx

EditContact.jsx এ আমরা AddContact.jsx এর মত ফর্ম লাগবে আমরা AddContact.jsx এর ফর্ম ইউজ করব, কিন্তু কপি পেস্ট করব না ।   

আমরা EditContact এর path আসলে এটা না <Route path='/edit-contact' element={<EditContact />} /> আমরা এভাবে path='/edit-contact/:id' এভাবে ভ্যারিএবল এর মত করে নিতে পারি । 

24. EditContact.jsx -> আমরা id টা পেয়েছি । এখন আমরা এটা খুজে বের করতে হবে । এই জন্য amora contact props hisbe pathabo.

// App.jsx: ->
<Route path='/edit-contact/:id' element={<EditContact contacts={contacts} />} />

// EditContact.jsx :->
const params = useParams()
const {id} = params

const {id} = params
const foundContact = contacts.find((contact) => contact.id === id)

return <ContactForm contact={foundContact} />

আমরা এখব update করব । আমাদের ডাটা গুলো আছে Apps.jsx file a. তাই এখান থেকে ডাটা গুলো পাঠাতে হবে এজন্য এখানেই function nibo. এবং props হিসাবে EditContactjsx এ পাঠাবো । EditContactjsx এ রিসিভ করে ContactForm এ props হিসাবে পাঠাবো । 

ContactForm component এ আমরা AddContact.jsx Or EditContact.jsx থেকে আসতেছে সেটা বুঝার জন্য আমরা  return <ContactForm contact={foundContact} updatecontact={updatecontact} /> component pass করছি ।  AddContact.jsx থেকে আমরা কোন component পাঠাচ্ছি না। 

এর পর defaultValue এর সাথে এড করে দিব। contact থেকে ডাটা আসলে সে গুলো পাবো তা না হলে defaultValue এর ডাট পাবে । 

আরেকটা জিনিস মেইল চেক করা জন্য আমরা একটু চেঞ্জ করে দিব। আর আমাদের initialContacts এ capital letter a Male & Female লিখে আছে । কিন্তু আমরা চেক করেছি samll letter a তাই initialContacts এর male & felamle kore dibo.
defaultChecked={gender === 'male'}
defaultChecked={gender === 'female'}

const defaultValue = {
  firstName: contact?.firstName || 'Obaydul',
  lastName:  contact?.lastName ||'Islam',
  gender: contact?.gender || 'male',
  email: contact?.email || 'obaaydulIslam@gmail.com',
  profession: contact?.profession || 'developer',
  bio: contact?.bio || 'All about myself, Modify of your own if necessary',
  image: contact?.image || 'https://randomuser.me/api/portraits/men/78.jpg',
  dateOfBirth: contact?.dateOfBirth || new Date(),
}
const {firstName, lastName, email, profession, bio, image, gender} = defaultValue

25. আমরা Edit Contact স্টেজে আছি নাকি Add Contact এ আছি এটা বুঝার জন্য daynamicly add kore dibo, button tayo dinamicaly change hobe.
//  ContactForm.jsx :
return (
  <>
      <h2 className='text-center mb-5'>{contact?.id? 'Edit Contact' : 'Add Contact'}</h2>

      {contact?.id? 'Update Contact' : 'Add Contact'}
  </Button>
// 26. App.jsx --> 
 ফাইলে আসার পরে colsole এ দেখব যে ডাটা রিসেট হয়েছে । এবং আপডেট contact peyechi.Add  
 const updatecontact = (contact, id) => {
  console.log(contact, id)
}

26. Contact edit & update korar pore amader nevigate korte hoi..programicaly navigar korte chaile "react router dom "  useNavigate use korte hobe. ContactForm.jsx a import korbo.

// ContactForm.jsx
import {useNavigate } from 'react-router-dom';

const navigate = useNavigate()

const onSubmit = data => {
  const id = contact?.id
  //show flash message
  
  //adding contacts
  if(id) {
      toast.success('Contact is Updated Successfully')
      updatecontact(data, id)
  }else {
      toast.success('Contact is Added Successfully')
      addContact(data)
  }

   navigate('/contacts') //this
}


27. আমরা এখন contact delete ar flash message add korbo. সো এখন আমরা Contact.jsx Filer button ar eventlistener ar name change korbo... handleDelet namdibo.

// Contact.jsx 
import {toast} from 'react-toastify'

const handleDelete = (id) => {
  toast.success('Contact is Deleted Successfully')
  deleteContact(id)
}

28. Eye icon a click korle single contact open hobe. Route bebar ta deal korte hobe.

// App.jsx ->
<Route path='/contact/:id' element={<ContactDetails contacts={contacts} />} />

create ContactDetails compoent 

// ContactDetails.jsx  ->
Copy card from Contac.jsx

// 29. ContactDetails.jsx -->
get state --> const [contact, setContact] = useState({})



/**
 * Applying Context API ( 49.09 minute )
 * ================================================================================
 */

// Step: 1:-

আমরা Contact এ Context API use করব। এই জন্য scr folder এ Contact.context.jsx নামের component নিব।
src->context -> Contact.context.jsx : -->

import { createContext } from "react";

// create context
export const ContactContext = createContext()

// create provider
export const ContactProvider = ({children}) => {

    return  <ContactContext.Provider value={'Obaydulla'}>{children}</ContactContext.Provider>
}

// Step: 2:-

import {ContactProvider} from './context/Contact.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactProvider>
      <App />
    </ContactProvider>
  </React.StrictMode>
)

//Step: 3 :-
import { useContext, useState } from 'react';

function App() {
  const context = useContext(ContactContext)
  console.log(context)
}


/**
 * Refactoring form input ( 30.43 minute )
 * ================================================================================
 */
1. component create in layouts folder-> FormTextInput.jsx & copy Form.Group from ContactForm.jsx

// FormTextInput.jsx :-

import React from 'react'
import {Form, Col, Row} from 'react-bootstrap'
import axios from 'axios'

function FormTextInput({name, label, placeholder, type='text', errors, register, defaultValue, ...rest}) {
  return (
    <Form.Group as={Row} className="mb-3">
        <Col sm={3}>
            <Form.Label htmlFor='firstName' column>
               {label}
            </Form.Label>
        </Col>
        <Col sm={9}>
            <Form.Control 
            type={type} 
            placeholder={placeholder}
            id={name} 
            defaultValue={defaultValue}
            {...register(name)}
            isInvalid={errors?.name}
            {...rest}
            />
            <Form.Control.Feedback type='invalid' >
                {errors[name]?.message}
            </Form.Control.Feedback>
        </Col>
    </Form.Group>
  )
}

export default FormTextInput

//ContactForm.jsx  :-> 
//========================================================
return (
  <>
      <h2 className='text-center mb-5'>{contact?.id? 'Edit Contact' : 'Add Contact'}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTextInput
          name ='firstName'
          label = 'First Name'
          placeholder = 'Enter your First Name'
           errors ={errors} 
           register={register} 
           defaultValue={firstName}
          />

          <FormTextInput
          name ='lastName'
          label = 'Last Name'
          placeholder = 'Enter your Last Name'
           errors ={errors} 
           register={register} 
           defaultValue={lastName}
          />

          <FormTextInput
              name ='email'
              label = 'Email'
              type='email'
              placeholder = 'Enter your Email'
              errors ={errors} 
              register={register} 
              defaultValue={email}
          />
          <Form.Group as={Row} className="mb-3">
              <Col sm={3}>
                  <Form.Label htmlFor='profession' column>
                  Profession
                  </Form.Label>
              </Col>
              <Col sm={9}>
              <Form.Select
               {...register('profession')} 
               id='profession'
               defaultValue={profession}
               aria-label="Select your profession"
               isInvalid={errors?.profession}
               >
                  <option value='' disabled>Select Your Profession</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="marketer">Marketer</option>
                  </Form.Select>
                  <Form.Control.Feedback type='invalid' >
                      {errors?.profession?.message}
                  </Form.Control.Feedback>
              </Col>
          </Form.Group>
          <FormTextInput
              name ='image'
              label = 'Profile Picture'
              type='url'
              placeholder = 'Enter your Profile URL'
              errors ={errors} 
              register={register} 
              defaultValue={image}
          />
           <Form.Group as={Row} className="mb-3">
              <Col sm={3}>
                  <Form.Label htmlFor='dateOfBirth' column>
                      Date Of Birth
                  </Form.Label>
              </Col>
              <Col sm={9}>
                  <DatePicker
                      selected={birthYear}
                      name='dateOfBirth'
                      id='dateOfBirth'
                      placeholder='Enter Your Date'
                      maxDate={new Date()}
                      showYearDropdown
                      showMonthDropdown
                      onChange={(date) => setBirthYear(date)}
                  />
              </Col>
          </Form.Group> 
          <Form.Group as={Row} className="mb-3">
              <Col sm={3}>
                  <Form.Label htmlFor='gender' column>
                      Gender
                  </Form.Label>
              </Col>
              <Col xs='auto'>
                  <Form.Check
                  type="radio" 
                  label='Male'
                  value='male'
                  defaultChecked={gender === 'male'}
                  {...register('gender')}
                  />
                  </Col>
                  <Col xs='auto'>     
                  <Form.Check
                  type="radio" 
                  label='Female'
                  value='female'
                  defaultChecked={gender === 'female'}
                  {...register('gender')}
                  />  
              </Col>
          </Form.Group>
          <FormTextInput
              name ='bio'
              label = 'Bio'
              as='textarea'
              type='text'
              placeholder = 'Enter your Bio'
              errors ={errors}  
              register={register} 
              defaultValue={bio}
          />
          <Form.Group as={Row} className="mb-3">
              <Col sm={3}>
                  <Form.Label htmlFor='bio' column>
                      Bio
                  </Form.Label>
              </Col>
              <Col sm={9}>
                  <Form.Control 
                  as='textarea'
                  type="text" 
                  placeholder="Bio"
                  defaultValue={bio}
                  {...register('bio')}
                  isInvalid={errors?.bio}
                  />
                  <Form.Control.Feedback type='invalid' >
                      {errors?.bio?.message}
                  </Form.Control.Feedback>
              </Col>
          </Form.Group>
          <Button 
          className='text-center' 
          variant='primary' size='md' 
          type='submit'
          disabled={isSubmitting? 'disabled':''}
          >
              {contact?.id? 'Update Contact' : 'Add Contact'}
          </Button>
      </Form>
  </>
)
}
/**
 * class: 17.1 ( advance hook useReducer()) 46 minute
 *==============================================================================
 */

1. ডেট পিকার এর ডেট পরিবর্তন করলে ডেট আপডেট হচ্চে কিন্তু আমাদের AddContact.jsx form এ ডেট পরবর্ত্ন হচ্ছে না । এটা সল্ভ করার জন্য আমরা আমাদের data initialContacts variable এর ডেট strin hisabe ase. sei golo new Date() kore dib. 

// Contact.context.jsx :--->
old : dateOfBirth: '25/08/2022'  update -> dateOfBirth: new Date(),

// ContactForm.jsx : -->
const {
  firstName,
  lastName,
  email,
  profession,
  bio,
  image,
  gender,
  dateOfBirth, // this
} = defaultValue;

const [birthYear, setBirthYear] = useState(
  dateOfBirth ? dateOfBirth : new Date()  // this
);

// Contact.context.jsx  :
2. useReducer  

const contactsReducer (state, action) => {

}
 state = initialContacts
 action = dispatch
// create provider
export const ContactProvider = ({children}) => {

  const [contacts, dispatch] = useReducer(contactsReducer, initialContacts)

  
// Full Note useReducer  ================ X ===
// Contact.context.jsx  : ---->

export const DELETE_CONTACT = 'DELETE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'


const contactsReducer = (state, action) => {
  //state = initialContacts
  //action = {type: 'DELETE_CONTACT', payload: id}  (dispatch)
  const {type, payload} = action
  switch (type){
    case DELETE_CONTACT:
    const updatedContacts = state.filter(
      (contact) => contact.id !== action.payload
    )
    return [...updatedContacts]

    case ADD_CONTACT: 
    const newContact = {
      id: uuidv4(),
      ...payload,
    }
    return [newContact, ...state ]

    case UPDATE_CONTACT:
    const {id, contactToUpdate} = payload;
    const contacts = state.map(contact => {
      if(contact.id === id) {
        //Update
        return {
          id,
          ...contactToUpdate,
        }
      }else {
        return contact;
      }
    })
    return [...contacts]

    default:
      return state;
  }
}


// create provider
export const ContactProvider = ({children}) => {

  const [contacts, dispatch] = useReducer(contactsReducer, initialContacts)

  const deleteContact = (id) => {
      dispatch({type: DELETE_CONTACT, payload: id})
    }

    const updateContact = (contactToUpdate, id) => {
      dispatch({type: UPDATE_CONTACT, payload: {contactToUpdate, id}})
    }
  
    const addContact = (contact) => {
      dispatch({type: ADD_CONTACT, payload: contact})
    }


/**
 * class: 17.2 Authentication
 * =================================================
 */
1.  Authentication meaning - 1. Registration 2.Login 3.Logout
2. Register.jsx  -->
            //register 
    <>
      import { yupResolver } from '@hookform/resolvers/yup'
      import React from 'react'
      import {Form, Button} from 'react-bootstrap'
      import * as yup from "yup";
      import {useForm} from 'react-hook-form'
      import FormTextInput from '../layouts/FormTextInput'
      import { clearConfigCache } from 'prettier';

      const schema = yup.object({
        username: yup
          .string()
          .required('username is Required')
          .min(5, 'username must be 5 or more character in length'),
        email: yup
          .string()
          .email('Must be a valid email')
          .lowercase()
          .required('Email is Required'),
        password: yup
          .string()
          .required('password is required')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
            'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
          ),
        confirmPassword: yup
          .string()
          .required('confirm Password is Required')
          .oneOf([yup.ref('password')], "confirm password doesn't match"),
      })


      function Register() {
        const {
          register,
          handleSubmit,
          formState: { errors },
          isSubmitting,
        } = useForm({
          resolver: yupResolver(schema),
        })

        const onSubmit = (data) => {
          console.log(data)
        }

        return (
          <>
          <h2 className='text-center mb-5'>Register</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <FormTextInput
                name='username'
                label='user name'
                placeholder='Enter Your user name'
                errors={errors}
                register={register}
                defaultValue='Obaydul'
              />
              <FormTextInput
                name='email'
                label='Email'
                placeholder='Enter Your Email'
                errors={errors}
                register={register}
                defaultValue='Obaydul@gmail.com'
              />
              <FormTextInput
                name='password'
                label='password'
                placeholder='Enter password'
                errors={errors}
                register={register}
                type='password'
                defaultValue='abcdeFf1@'
              />
              <FormTextInput
                name='confirmPassword'
                label='confirm Password'
                placeholder='Confirm password'
                errors={errors}
                register={register}
                type='password'
                defaultValue='abcdeFf1@'
              />

              <Button
                variant='primary'
                size='md'
                type='submit'
                disabled={isSubmitting ? 'disabled' : ''}
                className='text-center d-inline-block w-auto'
              >
                Register
              </Button>
            </Form>
          </>
        )
      }

      export default Register
    </>
3. যারা লগিন অবস্থায় থাকবে তাদের কেই Add, eddit , & delete করতে দিব। তাই আমরা registration ar all info context a nibo coze aigolo amader solok page lagbe .
      -> context -> Auth.context.jsx
  context create করব । এরপর প্রভাইডার App a warppe kore dibo.

  // Auth.context.jsx ->
  import { createContext } from "react"
  import React from "react"
  
  export const AuthContext = React.createContext()
  
  export const AuthProvider = ({children}) => {
      const value = {
          name : 'dda',
      }
      return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  } 

  // Main.jsx ->
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AuthProvider>
        <ContactProvider>
          <App />
       </ContactProvider>
      </AuthProvider>
    </React.StrictMode>
  )

  // Auth.context.jsx ->
  এই খানে আমরা দুইটা ডাটা ট্রাকডাউন করব  user & token।
  4. 
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
5. register, login, logout 3 ta function nibo. and value hisabe pathabo..

6. yarn add axios
// Register.jsx --> 
  const {register} = useContext(AuthContext)

axios এর জন্য আমরা আলাদা ফোল্ডার নিয়ে নিব। 

7. config -> axios.js
  import axios from 'axios'


  export const axiosPublicInstance = axios.create({
      baseURL: 'http://localhost:1337/api',
  })

// 8. Register.jsx --> 
const {registerUser} = useContext(AuthContext)

const onSubmit = (data) => {
  console.log(data)
  //register user
  registerUser({
    username: data.username,
    email: data.email,
    password: data.password,
  })
}

9. এখন Auth.context.jsx এর মধ্য registerUser function ar modde console.log(data) dile data golo paye jabo.

const registerUser = async (data) => {
  try {
      const response = await axiosPublicInstance.post(
          '/auth/local/register', 
          data
          )
      console.log(response.data)
  } catch (err){
      console.log(err.response)
  }
  
}

এখন আমরা দেখব যে console a ডাটা আসে নাই undefined dekasse seta debug korar jonno network tap a asbo.

// Auth.context.jsx --> 

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const registerUser = async (data) => {
      try {
          const response = await axiosPublicInstance.post(
              '/auth/local/register', 
              data
              )
          console.log(response.data)
      } catch (err){
          console.log(err.response)
      }
  }

amra jehetu user data receive korese akhon akhon ei golo show korbo... ei jonno amra state update korbo.. 
const {user, jwt} = response.data
    setUser(user)
    setToken(jwt)

  user login obostai thakle refresh korle sob data delete hoye jabe tai local storage save korte hobe.

  const {user, jwt} = response.data
        // setting data to the localStorage
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', JSON.stringify(jwt))

10. register a click korle contact page a niye jabo tai "BrowserRouter" eta App.jsx theke niye Main.jsx a wrapp kore dilam  and use useNavigate dite navigate kora hoise. and sowing toas message.
//  Auth.contex.jsx -> 
const navigate = useNavigate()
  
toast.success('Registration successfully redirecting...')

//Redirecting the user
navigate('/contacts')

// Auth.context.jsx --> 
const registerUser = async (data) => {
  try {
      const response = await axiosPublicInstance.post(
          '/auth/local/register', 
          data
          )

      const {user, jwt} = response.data
      // setting data to the localStorage
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(jwt))
      // update state
      setUser(user)
      setToken(jwt)

      toast.success('Registration successfully redirecting...')

      //Redirecting the user
      navigate('/contacts')
      console.log(response.data)
  } catch (err){
      toast.error(err.response?.data?.error?.message)
  }
  
}


// all Register.jsx -->
  import { yupResolver } from '@hookform/resolvers/yup'
  import React, { useContext } from 'react'
  import {Form, Button} from 'react-bootstrap'
  import * as yup from "yup";
  import {useForm} from 'react-hook-form'
  import FormTextInput from '../layouts/FormTextInput'
  import { clearConfigCache } from 'prettier';
  import { AuthContext } from '../context/Auth.context';

  const schema = yup.object({
    username: yup
      .string()
      .required('username is Required')
      .min(5, 'username must be 5 or more character in length'),
    email: yup
      .string()
      .email('Must be a valid email')
      .lowercase()
      .required('Email is Required'),
    password: yup
      .string()
      .required('password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
        'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    confirmPassword: yup
      .string()
      .required('confirm Password is Required')
      .oneOf([yup.ref('password')], "confirm password doesn't match"),
  })


  function Register() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      isSubmitting,
    } = useForm({
      resolver: yupResolver(schema),
    })

    const {registerUser} = useContext(AuthContext)

    const onSubmit = (data) => {
      console.log(data)
      //register user
      registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      })
    }

    return (
      <>
      <h2 className='text-center mb-5'>Register</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
          <FormTextInput
            name='username'
            label='user name'
            placeholder='Enter Your user name'
            errors={errors}
            register={register}
            defaultValue='Obaydul'
          />
          <FormTextInput
            name='email'
            label='Email'
            placeholder='Enter Your Email'
            errors={errors}
            register={register}
            defaultValue='Obaydul@gmail.com'
          />
          <FormTextInput
            name='password'
            label='password'
            placeholder='Enter password'
            errors={errors}
            register={register}
            type='password'
            defaultValue='abcdeFf1@'
          />
          <FormTextInput
            name='confirmPassword'
            label='confirm Password'
            placeholder='Confirm password'
            errors={errors}
            register={register}
            type='password'
            defaultValue='abcdeFf1@'
          />

          <Button
            variant='primary'
            size='md'
            type='submit'
            disabled={isSubmitting ? 'disabled' : ''}
            className='text-center d-inline-block w-auto'
          >
            Register
          </Button>
        </Form>
      </>
    )
  }

  export default Register


11. Loging same as registration... copy and some modified.

12. Logout korte hole localStorage ar all data banis kore dite hobe.
  // Auth.context.jsx -->
    const loadedUser = JSON.parse(localStorage.getItem('user'))
    const loadedToken = JSON.parse(localStorage.getItem('token'))

  export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(loadedUser ? loadedUser : null)
    const [token, setToken] = useState(loadedToken ? loadedToken : null)

  13  logout hole amader register page & login page bade baki sob page hide korbo

    // Header.jsx -->
    {user && 
      <>
          <Nav.Link as={NavLink} to='/contacts' >Contacts</Nav.Link>
          <Nav.Link as={NavLink} to='/add-contact' >Add Contact</Nav.Link>
          <Nav.Link onClick={logout}>Logout</Nav.Link>
      </>
  }
  {!user && 
      <>
          <Nav.Link as={NavLink} to='/register' >Register</Nav.Link>
          <Nav.Link as={NavLink} to='/login' >Login</Nav.Link>
      </>
  }