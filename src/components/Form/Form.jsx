import { useState } from 'react';
import imgen from './images.jpeg'
import './form.css'
import { valEmail, valPass } from './validation';

function Form() {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors({
            ...errors,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='container-form'>
            <form className="form">
                <img src={imgen} alt="imagen-form" className='image-form' />
                <label>Email</label>
                <input type="email" placeholder='Email' name='email' onChange={handleChange} value={userData.email} />
                {errors.email && <p className='errors'>{valEmail(errors.email)}</p>}
                <label>Password</label>
                <input type="password" placeholder='Password' name='password' onChange={handleChange} value={userData.password}></input>
                {errors.password && <p className='errors'>{valPass(errors.password)}</p>}
                <button className='btn-blue'>Submit</button>
            </form>
        </div>
    );
}

export default Form;