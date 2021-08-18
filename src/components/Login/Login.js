import React from 'react';
import { Field, reduxForm } from 'redux-form';
import css from "./Login.module.css";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label className={css.inputLabelwhite} for="login">Login:</label>
                    <Field component="input" id="login" name="login" />
                </div>
                <div>
                    <label className={css.inputLabelwhite} for="password">Password:</label>
                    <Field component="input" id="password" name="password" />
                </div>
                <div>
                    <label className={css.inputLabelwhite} for="rememberMe">remember me</label>
                    <Field component="input" type="checkbox" name="rememberMe"/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

const ReduxLoginForm = reduxForm({
    form: "login"
})(LoginForm);

export const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.login, formData.password);
        console.log(formData);
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <ReduxLoginForm onSubmit={onSubmit} />
            </div>
        </>
    );
}

