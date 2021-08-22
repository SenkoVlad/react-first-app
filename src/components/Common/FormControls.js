import React from 'react'
import css from './FormControls.module.css'



export const FormInput = ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error;
    const errorMessage = isError ? meta.error : "";

    return (
        <div className={css.formControl + " " + (isError ? css.error : "")}>
            <div>
                {props.children}
            </div>
            {
                isError
                    ? <span>{errorMessage}</span>
                    : <></>
            }
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormInput {...props}>
            <textarea {...input} {...restProps} />
        </FormInput>
    );
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormInput {...props}>
            <input {...input} {...restProps} />
        </FormInput>
    );
}