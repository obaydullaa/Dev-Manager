import React from 'react'
import Contact from './Contact'



export default function Contacts({contacts}) {
  return (
    <>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </>
  )
}
