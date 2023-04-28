import { useState } from 'react';
import imgen from './images.jpeg'
import './form.css'
import { valEmail, valPass } from './validation';

function Form() {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(valEmail({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div className='container-form'>
            <form className="form">
                <img src={imgen} alt="imagen-form" className='image-form' />
                <label>Email</label>
                <input type="email" placeholder='Email' name='email' onChange={handleChange} value={userData.email} />
                {errors.empty ? <p className='errors'>{errors.empty}</p>
                    : errors.email ? <p className='errors'>{errors.email}</p> :
                        <p className='errors'>{errors.long}</p>}
                <label>Password</label>
                <input type="password" placeholder='Password' name='password' onChange={handleChange} value={userData.password}></input>
                {   errors.badLong ? <p className='errors'>{ errors.badLong}</p>:
                    <p className='errors'>{ errors.pass}</p>
                    }
                    <button className={Object.keys(errors).length===0 ? 'btn-blue': 'btn-blue hide'}>Submit</button>
                
            </form>
        </div>
    );
}

export default Form;