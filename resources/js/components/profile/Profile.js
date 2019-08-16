import React from 'react';
import ProgressiveImage from "../ProgressiveImage";
import LoginLogo from "../../icons/LoginLogo";

const Profile = (props) => {
    return (
        <div className={'profile'}>
            <div className="info">
                <div
                    className="avatar-wrapper"
                    // onClick={}
                >
                    {
                        Boolean(props.avatar) ?
                            <ProgressiveImage
                                image={props.avatar}
                                preview={props.avatarPreview}
                                alt={'image'}
                            />
                            :
                            <LoginLogo className={'avatar-default'}/>
                    }
                </div>
                <div className="info-text">
                    <p className={'username'}>{props.username}</p>
                    {props.children[0]}
                </div>
            </div>
            <div className="created-photos">
                <p className={'title'}>Created photos</p>
                {props.children[1]}
            </div>
            <div className="liked-photos">
                <p className={'title'}>Liked photos</p>
                {props.children[2]}
            </div>
        </div>
    );
};

export default Profile;
