import imgen from './images.jpeg'
import './form.css'

function Form() {
    return (
        <div className='container-form'>
            <form className="form">
                <img src={imgen} alt="imagen-form" className='image-form'/>
                <label>Email</label>
                <input type="email" placeholder='Email'/>
                <label>Password</label>
                <input type="password" placeholder='Password'></input>
                <button className='btn-blue'>Submit</button>
            </form>
        </div>
    ); 
}

export default Form;