import React from 'react'
import LandingForm from '../landing-form/LandingForm'
import { Wrapper } from './styledEditForm'

export default function EditForm({ user, setFormFields, formFields, isVisible, handleSubmit, buttonText, setEditSubmitText, appElement }) {
  return (
    <Wrapper>
      <LandingForm 
        user={user}
        setFormFields={setFormFields}
        formFields={formFields}
        isVisible={isVisible}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        setEditSubmitText={setEditSubmitText}
        appElement={appElement}
      />
    </Wrapper>
  )
}
