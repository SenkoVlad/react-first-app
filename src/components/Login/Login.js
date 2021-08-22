import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormControls';
import { required } from '../Common/Utils/Validators';
import css from "./Login.module.css";

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label className={css.inputLabelwhite} for="login">Login:</label>
                    <Field component={Input} id="login" name="login" validate={[required]} />
                </div>
                <div>
                    <label className={css.inputLabelwhite} for="password">Password:</label>
                    <Field component={Input} id="password" name="password" validate={[required]} />
                </div>
                <div>
                    <label className={css.inputLabelwhite} for="rememberMe">remember me</label>
                    <Field component={Input} type="checkbox" name="rememberMe" validate={[required]}/>
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

