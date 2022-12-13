const Register = () => {
    return (
        <div className="form">
            <div className="form__item">
                <input type="text" placeholder="Email" />
            </div>
            <div className="form__item">
                <input type="password" placeholder="Password" />
            </div>
            <button className="form__btn">Register</button>
        </div>
    );
};

export default Register;
