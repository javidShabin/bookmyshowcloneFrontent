import React from 'react'
import LoginForm from './components/LoginForm'

export default function Login() {
  return (
    <main className='container mx-auto px-10'>
        <section>
            <h2 className='text-[25px] font-bold mt-5'>SignUp</h2>
            <div className='mx-auto flex justify-center items-center'>
                <LoginForm/>
            </div>
        </section>
    </main>
  )
}
