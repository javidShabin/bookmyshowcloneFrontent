import React from 'react'
import SignupForm from './components/SignupForm'

export default function SignUp() {
  return (
    <main className='container mx-auto px-10'>
        <section>
            <h2 className='text-[25px] font-bold mt-5'>SignUp</h2>
            <div className='mx-auto flex justify-center items-center'>
                <SignupForm/>
            </div>
        </section>
    </main>
  )
}
