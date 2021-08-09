import React from 'react';
import css from "./Login.module.css";

const Login = (props) => {
    let inputLogin = React.createRef();
    let inputPass = React.createRef();

    let onLoginChanged = () => {
        let loginText = inputLogin.current.value;
        props.setInputLoginActionCreate(loginText);
    }
    let onPasswordChanged = () => {
        let passwordText = inputPass.current.value;
        props.setInputPasswordActionCreate(passwordText);
    }
    let login = () => {
        props.login(props.inputLogin, props.inputPassword);
    }

    return (
        <div className={css.loginBlock}>
            <div>
                <label for="fname">Login:</label>
                <input ref={inputLogin} onChange={onLoginChanged} type="text" id="fname" name="fname" />
            </div>
            <div>
                <label for="lname">Password:</label>
                <input ref={inputPass} onChange={onPasswordChanged} type="text" id="lname" name="lname" />
            </div>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}

export default Login;