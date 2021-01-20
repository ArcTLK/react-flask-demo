import { Link } from 'react-router-dom';

export default function Navigation({ token }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Auth using React + Flask</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {
                    token === null ?
                    (
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                    ) :
                    (
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                    )
                }
            </div>
        </nav>
    );
}