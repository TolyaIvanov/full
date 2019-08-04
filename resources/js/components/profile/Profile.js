import React from 'react';
import ProgressiveImage from "../ProgressiveImage";
import LoginLogo from "../../icons/LoginLogo";

const Profile = (props) => {
    return (
        <div className={'profile'}>
            <div className="info">
                <div className="avatar-wrapper">
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
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Profile;
