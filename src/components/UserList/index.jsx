import React from 'react';
import {UserList, Role} from './style'
import User from '../UserRow';

export default () => {
    return(
        <UserList>
            <Role>Mega - 4</Role>
            <User nickname="Rosemon"></User>
            <User nickname="Urso"></User>
            <User nickname="VishZ"></User>
            <User nickname="Estevam"></User>

            <Role>Bots - 2</Role>
            <User nickname="Amongcord" isBot></User>
            <User nickname="MEE6" isBot></User>

            <Role>Disponível - 8</Role>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>

            <Role>Offline - 12</Role>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
            <User nickname="ThiagoARR"></User>
            <User nickname="Esteves"></User>
        </UserList>
    )
}