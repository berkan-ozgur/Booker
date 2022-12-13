const Login = () => {
    return (
        <div className="form">
            <div className="form__item">
                <input type="text" placeholder="Email" />
            </div>
            <div className="form__item">
                <input type="password" placeholder="Password" />
            </div>
            <button className="form__btn">Login</button>
        </div>
    );
};

export default Login;
