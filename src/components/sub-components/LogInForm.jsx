
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    // allows rendering and refreshing of the component
    useEffect(() =>{
        console.log('useEffect Ran')
        if(isSubmitted) {
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
          
        }
       
    } ) 


    const handleClick = (e) => {
        window.location.reload();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setIsSubmitted(true)
    };

    return <>
        <div>
            <h2>Login</h2>

            <form id='form' className='form-group container' onSubmit={handleSubmit} >
                <div className='d-flex flex-column'>
                    <div>
                        <input
                            className='form-control' 
                            type="email"
                            name='email'
                            id='email'
                            value={email}
                            onChange={ function (e) { setEmail(e.target.value) }}
                            placeholder='Enter your email address'
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='form-control' 
                            type="text"
                            name='password'
                            id='password'
                            value={password}
                            onChange={ function (e) { setPassword(e.target.value) }}
                            placeholder='Enter your password'
                            required
                        />   
                    </div>
                    <button onClick={handleClick} type='submit' className='btn btn-primary' 
                    id='btn-submit' >LOGIN</button>
             
                 
                </div>

               

            </form>
            
        </div>
  </>
}