import React, { Component } from 'react'
export default class Shop extends Component {
    render() {
        return (
           <div className="container ">
                <h1 className="underline shopHeader">Shop around the Queen City!</h1>
                <img src={require('../assets/shopping.jpg')} alt="shopping" className="shopping"/>
                <p className="fillerText shopBlurb">Cincinnati is a diverse, interesting city and the shopping scene reflects that. Cincinnati is constantly growing and expanding with not only new stores, but entirely new shopping centers as well! In just the past few years we've added a new shopping center up north in Liberty Township, we've added new restaurants and housing downtown on The Banks, and even redesigned Newport on The Levee to fit better with Covid-19 regulations! <br></br> <br></br>
                 There are indoor and outdoor malls all over the city, both in urban areas and the suburbs alike. You can find lot's of locally sourced food in historic Findlay market, right on the outskirts of Downtown. there's always something new popping up in the town, as well as a slew of foodtrucks rotating around from the Tri-state Area. There's always been an incentive throughout the city to shop locally, but it's especially important now that we're facing a Pandemic. In fact, here's a video explaining how to boost Cincinnati's local economy!</p>
                 <iframe width="922" height="519" src="https://www.youtube.com/embed/13fLZyvERuw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="shopVid"></iframe>
                <p className="fillerText ender"><a href="/allLocations">CLICK HERE</a> to see all of our featured tourist destinations! </p>
            </div>
        )
    }
}