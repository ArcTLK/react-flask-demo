export default function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div className="card bg-light">
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" id="email" className="form-control" placeholder="name@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="email" id="password" className="form-control" placeholder="******" />
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