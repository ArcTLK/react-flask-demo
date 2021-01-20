import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

export default function Login({ setToken, logout }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    if (logout) {
        setToken(null);
        history.push('/login');
    }

    const onLogin = event => {
        event.preventDefault();

        axios.post('/login', {}, {
            headers: {
                Authorization: `Basic ${btoa(`${email}:${password}`)}`
            }
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
                    <h5 className="card-title">Login</h5>
                    <form onSubmit={onLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" className="form-control" placeholder="name@email.com" value={email} onChange={event => setEmail(event.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder="******" value={password} onChange={event => setPassword(event.target.value)} required />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}