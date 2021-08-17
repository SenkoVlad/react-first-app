import React from 'react';

class ProfileStatusInfo extends React.Component {
    state = {
        editMode: true,
        status: this.props.status
    }
    changeEditMode(flag) {
        this.setState({
            editMode: flag,
        });
        if (flag) {
            this.props.updateUserStatus(this.state.status);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.status && (this.props.status !== prevProps.status)) {
            this.setState({
                status: this.props.status
            });
        }
    }

    updateLocalStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={() => this.changeEditMode(false)}>{this.state.status ? this.state.status : '---------'}</span>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onChange={this.updateLocalStatus} onBlur={() => this.changeEditMode(true)} value={this.state.status} />
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatusInfo;