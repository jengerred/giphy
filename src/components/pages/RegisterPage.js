import {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'

function RegisterPage(){
const navigate = useNavigate();
const location = useLocation();

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

let { from } = location.state || { from : {pathname : '/'}};

const createAccount = (e) => {
e.preventDefault();
console.log(username, email, password)
const user = {
    name: username,
    email: email,
    password: password
}
console.log(user)
window.localStorage.setItem('user', JSON.stringify(user))
navigate(from)
}
    return (
        <div>
            <h1>Welcome to the Register Page</h1>
            <form onSubmit={createAccount}>
            <input placeholder='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <input placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className="btn btn-primary">Create Account</button>
            </form>
        </div>
    )
}

export default RegisterPage;