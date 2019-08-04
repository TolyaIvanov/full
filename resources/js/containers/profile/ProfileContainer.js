import React, {Component} from 'react';
import {connect} from 'react-redux';
import Profile from "../../components/profile/Profile";

import {
    getUserData,
    getUserPhotos
} from "../../actions/profile/getProfileData";

import {
    userStatus
} from "../../actions/profile/actionCreator";

import {
    setUserStatus
} from "../../actions/profile/setProfileData";

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.getUserData();
        this.props.getUserPhotos();
    }

    render() {
        const status = this.props.auth.payload.username === this.props.match.params.username ?
            <div className={'status-wrapper'}>
                <input
                    className={'status'}
                    type="text"
                    placeholder={'status'}
                    value={this.props.profile.status}
                    onChange={
                        event => {
                            this.props.changeStatusInput(event.target.value, true)
                        }
                    }
                />
                <div
                    onClick={
                        () => this.props.changeStatusRequest(this.props.profile.status)
                    }
                    className={this.props.profile.isStatusChanged ? 'set-status active' : 'set-status'}
                >
                    &#10003;
                </div>
            </div>
            :
            <p className="status">
                {this.props.profile.status}
            </p>;

        return (
            <Profile
                username={this.props.match.params.username}
                avatar={this.props.profile.avatar}
                avatarPreview={this.props.profile.avatarPreview}
                photos={this.props.profile.photos}
                liked={this.props.profile.liked}
            >
                {status}
            </Profile>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profileData,
});

const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
    getUserPhotos: () => dispatch(getUserPhotos()),
    changeStatusRequest: (status) => dispatch(setUserStatus(status)),
    changeStatusInput: (status, isStatusChanged) => dispatch(userStatus(status, isStatusChanged)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
