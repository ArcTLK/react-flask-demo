export default function Dashboard({ token }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Your JSON Web Token</h1>
                    <p className="lead" style={{wordBreak: 'break-all'}}>{token}</p>
                    <hr className="my-4" />
                    <p className="text-justify">This was an example as to how one can use React and Flask together to create a basic application. You can now use this token instead of your username and password to authenticate with the API. Thanks for viewing! 😄</p>
                </div>
            </div>
        </div>
    );
}