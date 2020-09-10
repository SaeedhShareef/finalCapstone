import React, { Component } from 'react'


export default class Learn extends Component {
    render() {
        return (
           <div className="container">
               <center>
                 <h1 className="underline shopHeader">Why Not Learn While You're Here?</h1>
                 <img src={require('../assets/learn.jpg')} alt="learn" className="learn"/>



<p className="fillerText ender">  
The National Underground Railroad Freedom Center is a museum in downtown Cincinnati, Ohio, based on the history of the Underground Railroad. Opened in 2004, the Center also pays tribute to all efforts to "abolish human enslavement and secure freedom for all people."

It is one of a new group of "museums of conscience" in the United States, along with the Museum of Tolerance, the United States Holocaust Memorial Museum and the National Civil Rights Museum. The Center offers insight into the struggle for freedom in the past, in the present, and for the future, as it attempts to challenge visitors to contemplate the meaning of freedom in their own lives. Its location recognizes the significant role of Cincinnati in the history of the Underground Railroad, as thousands of slaves escaped to freedom by crossing the Ohio River from the southern slave states. Many found refuge in the city, some staying there temporarily before heading north to gain freedom in Canada.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kE0DU5utKmI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video"></iframe>
<p><a href="/allLocations">CLICK HERE</a> to see all of our featured tourist destinations! </p>
</center>
            </div>
        )
    }
}