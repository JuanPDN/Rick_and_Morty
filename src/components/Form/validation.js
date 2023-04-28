const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const validatePass = /^(?=.*\d).{6,10}$/

const errorsMail = {
    invalidate: 'Ingresa un email valido',
    tooLong: 'el email no puede tener más de 35 caracteres',
    empty: 'el email no puede estar vacío.'
}

const errorsPass = {
    invalidate: 'la contraseña tiene que tener al menos un número.',
    badLong: 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres'
}

export function valEmail({email , password}) {
    console.log(email);
    console.log(password);
    const error = {}
    if (email.length > 35) {
        error.long = errorsMail.tooLong
    }
    if (email.length === 0) {
        error.empty = errorsMail.empty
    }
    if (validateEmail.test(email) === false) {
        error.email = errorsMail.invalidate
    }
    if (password.length < 6 || password.length > 10){
        error.badLong = errorsPass.badLong
    }
    if(!validatePass.test(password)){
        error.pass = errorsPass.invalidate
    }
    return error
}

export function valPass ({password}) {
}


