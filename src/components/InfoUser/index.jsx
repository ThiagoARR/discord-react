import React from 'react';
import styled from 'styled-components';
import {InforUser, Profile, UserData, Icons, SettingsIcon, HeadphoneIcon, MicIcon} from './style';


const Avatar = styled.div`
    position:relative;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--tertiary);

&::after{
    background-color: var(--notification);
    position: absolute;
    width: 11px;
    height: 11px;
    bottom: -4px;
    right: -4px;
    border-radius: 50%;
    border: 4px solid #292b2f;
    text-align: center;
    content: '${(props) => props.status}';
    display: ${(props) => props.status}
}
`;

export default ({
    status
}) => {
    return(
        <InforUser>
            <Profile>
                <Avatar status={status}/>
                <UserData>
                <strong>ThiagoARR</strong>
                <span>#2689</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>
        </InforUser>
    )
}