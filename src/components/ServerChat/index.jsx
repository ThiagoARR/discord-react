import React from 'react';
import {ServerChat, Messages, InputWrap,Input, InputIcon} from './style';
import ChannelMessage, {Mention} from '../ChannelMessage'

export default () => {
    return(
        <ServerChat>
            <Messages>
                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>


                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                <ChannelMessage
                author="ThiagoARR"
                date="09/12/2020"
                content="Salve rapeize"/>

                
            </Messages> 

            <InputWrap>
                <Input placeholder="Conversa em #chat"/>
                <InputIcon/>
            </InputWrap>
        </ServerChat>
    );
}