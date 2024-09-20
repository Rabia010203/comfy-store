import React from 'react'
import { useRouteError } from 'react-router-dom';

 const ErrorElement = () => {
  const {error, message} = useRouteError();
  console.log(message)
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}
export default ErrorElement;