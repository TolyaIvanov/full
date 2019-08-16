import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Profile from "../../components/profile/Profile"
import Error from "../../Error";

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
        this.props.getUserData(this.props.match.params.username);
        this.props.getUserPhotos(this.props.match.params.username);
    }

    render() {
        const status = this.props.auth.payload.username === this.props.match.params.username ?
            <div className={'status-wrapper'}>
                <input
                    className={'status'}
                    type="text"
                    placeholder={'status'}
                    value={this.props.profile.user.status}
                    onChange={
                        event => {
                            this.props.changeStatusInput(event.target.value, true)
                        }
                    }
                />
                <div
                    onClick={
                        () => this.props.changeStatusRequest(this.props.profile.user.status)
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
        const createdPhotos = this.props.profile.user_created_photos.length > 0 ?
            this.generatePhotoList(this.props.profile.user_created_photos, 'Created photos')
            : <div>

            </div>;
        const likedPhotos = this.props.profile.user_liked_photos.length > 0 ?
            this.generatePhotoList(this.props.profile.user_liked_photos, 'Liked photos')
            : <div>

            </div>;

        return !this.props.profile.isLoading ?
            this.props.profile.isExist ? (
                <Profile
                    username={this.props.match.params.username}
                    avatar={this.props.profile.user.avatar}
                    photos={this.props.profile.user_created_photos}
                    liked={this.props.profile.user_liked_photos}
                >
                    {status}
                    {createdPhotos}
                    {likedPhotos}
                </Profile>
            ) : (
                <Error/>
            ) : (
                <div className="profile-loading">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
            )
    }

    generatePhotoList = (photos, title) => {
        let part = photos.map(photo => (
            <li className={'photo'}>

            </li>
        ));

        return (
            <Fragment>
                <p className={'part-title'}>{title}</p>
                <ul className={'list'}>
                    {part}
                </ul>
            </Fragment>
        );
    };
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profileData,
});

const mapDispatchToProps = (dispatch) => ({
    getUserData: (username) => dispatch(getUserData(username)),
    getUserPhotos: (username) => dispatch(getUserPhotos(username)),
    changeStatusRequest: (status) => dispatch(setUserStatus(status)),
    changeStatusInput: (status, isStatusChanged) => dispatch(userStatus(status, isStatusChanged)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
