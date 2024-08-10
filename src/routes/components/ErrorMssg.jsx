import React from 'react'

export default function ErrorMssg(props) {
    const {type, field} = props
    let errorMessage;

    if (type === "maxLength") {
        errorMessage = `${field} is to long`
    }else if(type === "required"){
        errorMessage = `${field} is required`
    }else if(type === "pettern" && field === "password"){
        errorMessage = `${field} must be 6-12 characters long, include at least one number, one uppercase letter, one lowercase letter, and one special character`;
    }
  return (
    <span>{errorMessage}</span>
  )
}
