import React from 'react'
import {ServerInfo, AddCategoryIcon, Category, ExpandIcon, UserInput} from './style.js';
import ChannelButtonText from '../ChannelButtonText';
import ChannelButtonVoice from '../ChannelButtonVoice';

class ServerInfor extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            userInputText: '',
            UserInputVoice: '',
            channelText: ["chat","comandos","clips","menções-desonrosas-poius"],
            channelVoice: ["2020","APEX ZADA","FOR DA HORDE","Betway","AFK","Betway","Betway","Betway",
            "Solo | Duo 1",
            "Solo | Duo 2",
            "Flex das Estrelas",
            "CS:GO"],
            displayText: false,
            displayVoice: false
        }
        this.textHandleChange = this.textHandleChange.bind(this);
        this.textHandleKeyPress = this.textHandleKeyPress.bind(this);
        this.voiceHandleKeyPress = this.voiceHandleKeyPress.bind(this);
        this.voiceHandleChange = this.voiceHandleChange.bind(this);
        this.toggleDisplayText = this.toggleDisplayText.bind(this);
        this.toggleDisplayVoice = this.toggleDisplayVoice.bind(this);
  }
    toggleDisplayText() {
        this.setState(state => ({
        displayText: !state.displayText,
        }));
    }

    toggleDisplayVoice() {
        this.setState(state => ({
        displayVoice: !state.displayVoice,
        }));
    }

    textHandleChange(event){
        this.setState({
            userInputText: event.target.value
        });
    }

    textHandleKeyPress(event){
        if(event.key === 'Enter'){
            if(this.state.userInputText != ''){
        this.setState({
            channelText: this.state.channelText.concat(this.state.userInputText),
            displayText: !this.state.displayText,
            userInputText: ''
        });
        }
        else{
            this.setState({
            displayText: !this.state.displayText,
            userInputText: ''
        });
    }
    }
}

    voiceHandleChange(event){
        this.setState({
            userInputVoice: event.target.value
        });
    }

    voiceHandleKeyPress(event){
        if(event.key === 'Enter'){
            if(this.state.userInputVoice != ''){
        this.setState({
            channelVoice: this.state.channelVoice.concat(this.state.userInputVoice),
            displayVoice: !this.state.displayVoice,
            userInputVoice: ''
        });
        }
        else{
            this.setState({
            displayVoice: !this.state.displayVoice,
            userInputVoice: ''
        });
    }
    }
}

    render(){
        const textChannel = this.state.channelText.map(i => <ChannelButtonText channelName={i}/>)
        const voiceChannel = this.state.channelVoice.map(x => <ChannelButtonVoice  channelName={x}/>)
    return(
        <ServerInfo>
            <Category>
                <span><ExpandIcon/>Canais de texto</span>
                <AddCategoryIcon onClick={this.toggleDisplayText}/>
            </Category>
            <>
                {textChannel}
                {this.state.displayText && <UserInput
                    type="text"
                    value={this.state.userInputText}
                    onChange={this.textHandleChange} 
                    onKeyPress={this.textHandleKeyPress}/>}
            </>
            
            <Category>
                <span><ExpandIcon/>canais de voz</span>
                <AddCategoryIcon onClick={this.toggleDisplayVoice}/>
            </Category>
                <>
                    {voiceChannel}
                    {this.state.displayVoice && <UserInput
                    type="text"
                    value={this.state.userInputVoice}
                    onChange={this.voiceHandleChange} 
                    onKeyPress={this.voiceHandleKeyPress}/>}
                </>
        </ServerInfo>
        )
    }
}
export default ServerInfor;