export default function Register() {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="card bg-light">
                <div className="card-body">
                    <h5 className="card-title">Register</h5>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="form-control" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" className="form-control" placeholder="name@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="email" id="password" className="form-control" placeholder="******" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="email" id="confirmPassword" className="form-control" placeholder="******" />
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