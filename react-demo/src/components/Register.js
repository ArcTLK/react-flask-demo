import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Register({ setToken }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    const onRegister = event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            return toast.error('Entered passwords do not match!');
        }

        axios.post('/register', {
            email,
            name,
            password
        })
        .then(response => {
            setToken(response.data);
            history.push('/');
        })
        .catch(error => toast.error(error.response ? error.response.data : 'It seems that the Flask server is down!'));
    }

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="card bg-light">
                <div className="card-body">
                    <h5 className="card-title">Register</h5>
                    <form onSubmit={onRegister}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" placeholder="John Doe" value={name} onChange={event => setName(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" className="form-control" placeholder="name@email.com" value={email} onChange={event => setEmail(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="******" value={password} onChange={event => setPassword(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="form-control" placeholder="******" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} required />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}