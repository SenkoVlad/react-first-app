import { Field, reduxForm } from 'redux-form';
import { Input } from '../../Common/FormControls';
import css from './ProfileInfo.module.css'

const ProfileFormData = ({ handleSubmit, initialValues, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Full name:</b>
                <Field component={Input} placeholder="Full name" id="fullName" name="name" validate={[]} />
            </div>
            <div>
                <b>Country: </b>
                <Field component={Input} placeholder="Country" id="country" name="location.country" validate={[]} />
            </div>
            <div>
                <b>City: </b>
                <Field component={Input} placeholder="City" id="city" name="location.city" validate={[]} />
            </div>
            <div>
                <b>Looking job: </b>
                <Field component={Input} type={'checkbox'} id="isLookingForAJob" name="isLookingForAJob" validate={[]} />
            </div>
            <div>
                <b>Resume: </b>
                <Field component={Input} placeholder="Resume text" id="resumeText" name="resumeText" validate={[]} />
            </div>
            <div className={css.contactsBlock}>
                <b>Contacts: </b>
                <div>
                    {Object.keys(initialValues.userContacts).map(key => {
                        return <Field key={key} component={Input} placeholder={key} id={key} name={"userContacts." + key} validate={[]} />
                    })}
                </div>
            </div>

            <button>Save</button>
            {error &&
                <div className={css.errorBlock}>
                    {error}
                </div>
            }
        </form>
    );
}

export default reduxForm({
    form: "profile"
})(ProfileFormData);