import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
   
  return (
    <div className='flex flex-col justify-center items-center min-h-screen space-y-4'>
        <h1 className='text-xl font-semibold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Status : {error.status }</p>
      <p>Page : {error.statusText || error.message}</p>
      <Link to={'/'} className='btn btn-warning'>Back to Home</Link>
    </div>
  )
}

export default ErrorPage
