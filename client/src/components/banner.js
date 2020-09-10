// BANNER IS COMPLETE -DJ

import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div id="bannerWrapper">
            <p className="bannerText">Welcome to Cincinnati</p>
            <img src={require('../assets/sky.jpg')} alt="banner"/>
    
            </div>
        )
    }
}