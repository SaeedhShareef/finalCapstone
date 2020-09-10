import React, { Component } from 'react'

export default class View extends Component {
    render() {
        return (
            <div className="container">
                <center>
 <h1 className="underline shopHeader">Sights To See</h1>
 <img src={require('../assets/view.jpg')} alt="view" className="view"/>

   <p className="fillerText ender">   Over 200 signs and other objects are on display at the museum, and over 3,800 items are cataloged.The collection ranges from the late nineteenth century to the 1970s. Highlights of the collection include samples of gold leaf lettering on glass, a Sputnik-like plastic orb from an Anaheim shopping center, a rotating neon windmill from a Denver donut shop, Las Vegas showcards, and a fiberglass Frisch's Big Boy statue with a slingshot in his pocket. The slingshot was omitted from later models of the Big Boy statue. One can also find signs from businesses such as Big Bear Stores, Howard Johnson's, and Earl Scheib. Over the museum's entrance, visitors are greeted by a 20-foot-tall fiberglass genie from a Los Angeles carpet cleaning company.

In 2008, the museum acquired a single-arch 1963 McDonald's sign from Huntsville, Alabama. The sign features McDonald's Speedee character, who was phased out in favor of Ronald McDonald in the 1960s. In 2009, the museum added a neon sign from Johnny’s Big Red Grill, once a popular restaurant among Cornell University students.</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/FYHIwThvqDs" title="sign" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
          </center>

            </div>
        )
    }
}