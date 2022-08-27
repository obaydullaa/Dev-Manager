import { createContext, useContext, useEffect, useReducer, useState } from "react";
import contactsReducer from "../components/contacts/reduce";
import { DELETE_CONTACT, UPDATE_CONTACT, ADD_CONTACT, lOAD_CONTACTS } from "../components/contacts/types";
import { axiosPrivateInstance } from "../config/axios";
import { formateContact } from "../utils/formateContact";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "./Auth.context";

// create context
export const ContactContext = createContext()

const initialContacts = [
    {
      id: '1',
      firstName: 'Barbette',
      lastName: 'Pfertner',
      email: 'bpfertner0@drupal.org',
      profession: 'Web Developer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/75.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '2',
      firstName: 'Ignatius',
      lastName: 'McPhilip',
      email: 'imcphilip1@toplist.cz',
      profession: 'Software Developer',
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '3',
      firstName: 'Fletch',
      lastName: 'Veel',
      email: 'fveel2@yellowbook.com',
      profession: 'Graphic Designer',
  
      gender: 'male',
      image: 'https://randomuser.me/api/portraits/men/78.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '4',
      firstName: 'Shawn',
      lastName: 'Lawrenz',
      email: 'slawrenz3@independent.co.uk',
      profession: 'Data entry specialist',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/80.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id:' 5',
      firstName: 'Bucky',
      lastName: 'Casaccio',
      email: 'bcasaccio4@netlog.com',
      gender: 'male',
      profession: 'Data scientist',
      image: 'https://randomuser.me/api/portraits/men/56.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '6',
      firstName: 'Regan',
      lastName: 'Lodford',
      email: 'rlodford5@nbcnews.com',
      profession: 'python Developer',
      gender: 'female',
      image: 'https://randomuser.me/api/portraits/women/81.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
    {
      id: '7',
      firstName: 'Hubert',
      lastName: 'Langhorne',
      email: 'hlanghorne6@thetimes.co.uk',
      gender: 'male',
      profession: 'CPA Marketer',
      image: 'https://randomuser.me/api/portraits/men/80.jpg',
      dateOfBirth: new Date(),
      bio: 'All About me',
    },
  ]
  // create provider
  export const ContactProvider = ({children}) => {
    
    const [contacts, dispatch] = useReducer(contactsReducer, initialContacts)
    const [loaded, setLoaded] =useState(false)
    const {user} = useContext(AuthContext)
    
    const navigate = useNavigate();
    useEffect(() => {
      (async () => {
        await loadedContacts()
      })()
    },[])

    const loadedContacts = async () => {
     try{
      const response = await axiosPrivateInstance.get('/contacts');
      const loadedContacts = response.data.data.map(contact => 
        formateContact(contact)
        )
        dispatch({type: lOAD_CONTACTS, payload: loadedContacts})
        setLoaded(true)
      // console.log(loadedContacts)
    
     }catch(err) {
      console.log(err.response)
     }
    }

    const deleteContact = (id) => {
        dispatch({type: DELETE_CONTACT, payload: id})
      }

      const updateContact = (contactToUpdate, id) => {
        dispatch({type: UPDATE_CONTACT, payload: {contactToUpdate, id}})
      }
    
      const addContact = async(contactData) => {
        contactData = {
          author: user.id,
          ...contactData, 
        }
        try {
          const response = await axiosPrivateInstance.post('/contacts', {
            data: contactData,
          })

          console.log(response.data)
          //dispatch here
          const contact = formateContact(response.data.data)
          dispatch({type: ADD_CONTACT, payload: contact})
          //show flash message
          toast.success("Contact is Added Successfully");
          //redirect to contacts
          navigate("/contacts");
        }catch(err) {
          console.log(err.response)
        }

      }

   const value = {
        loaded,
        contacts,
        deleteContact,
        updateContact,
        addContact,
    }

    return  <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
}