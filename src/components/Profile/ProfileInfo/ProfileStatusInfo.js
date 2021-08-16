import React from 'react';

class ProfileStatusInfo extends React.Component {
    state = {
        editMode: true
    }
    changeEditMode(flag) {
        this.setState({
            editMode : flag
        });
    }
    render() {
        return (
        <>
            {this.state.editMode
                ?
                <div>
                    <span onDoubleClick={() => this.changeEditMode(false)}>{this.props.info}</span>
                </div>
                :
                <div>
                    <input autoFocus={true} onBlur={() => this.changeEditMode(true)} value={this.props.info}/>
                </div>
            }
        </>
        );
    }
}

export default ProfileStatusInfo;