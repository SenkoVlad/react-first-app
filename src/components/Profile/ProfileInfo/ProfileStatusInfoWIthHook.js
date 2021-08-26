import { useEffect, useState } from "react";

const ProfileStatusInfoWithHook = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(true);

    useEffect(() => {
        if (props.status) {
            setStatus(props.status)
        }
    }, [props.status])

    const changeEditMode = (flag) => {
        setEditMode(flag);
        if (flag)
            props.updateUserStatus(status);
    }
    const updateStatus = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <>
            {editMode
                ?
                <div>
                    <span onDoubleClick={() => changeEditMode(false)}>{status ? status : '---------'}</span>
                </div>
                :
                <div>
                    <input onChange={updateStatus} onBlur={() => changeEditMode(true)} autoFocus={true} value={status} />
                </div>
            }
        </>
    );
}

export default ProfileStatusInfoWithHook