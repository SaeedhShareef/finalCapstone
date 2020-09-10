import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
export default class Art extends Component {
    render() {
        return (
            <div>
            <div className="container">
                <h1 className="underline shopHeader">Explore the Cincinnati Art scene!</h1>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block artCarousel"
                  src={require("../assets/artPageLarge.jpg")}
                        width="100%"
                        alt="slide"
                />
                </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block artCarousel"
                  src={require("../assets/artPageLarge2.jpg")}
                        width="100%"
                        alt="slide"
                />
                </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block artCarousel"
                  src={require("../assets/artPageLarge3.jpg")}
                        width="100%"
                        alt="slide"
                />
                </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block artCarousel"
                  src={require("../assets/artPageLarge4.jpg")}
                        width="100%"
                        alt="slide"
                />
                </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block artCarousel"
                  src={require("../assets/artPageLarge5.jpg")}
                        width="100%"
                        alt="slide"
                />
                </Carousel.Item>
            </Carousel>
                    <p className="fillerText"> Cincinnati is a city bursting at the seams with artistic talent. Though there's already a wide variety of Musuems, Galleries and rotating exhibits, the streets themselves are packed with endless murals, sculptures, and graffiti! Artworks is a local organization that cultivates young artists and allows them to collaborate on enormous art instillations!<br></br> <br></br>Additionally, Cincinnati is no stranger to talent from accross the pond! Recently, we were fortunate enough to have Korean artist Chris Shim, aka Royyal Dog grace us with a beautiful mural, right in the heart of Downtown!</p> <div className="container">
                    <img src={require('../assets/artPage11.jpg')} alt="Royyal" className="royyal"/>
                        </div>
                    <h1 className="fillerText shopHeader "> Enjoy our finest works of art at the following locations... </h1> <br></br>
                    </div>
                    <div className="container">
                    <h2 className="fillerText artHeaders">The Contemporary Arts Center</h2> 
                                <br></br>
                                <br></br>
                       <a href="https://www.contemporaryartscenter.org/">  <img src={require('../assets/CAC4.jpg')} alt="CAC" className="artPageExamples"/></a>
                          <br></br>
                    <h2 className="fillerText artHeaders">The cincinnati Art musuem</h2>
                            <br></br> <a href="https://www.cincinnatiartmuseum.org/">  <img src={require('../assets/CAM.jpg')} alt="CAM" className="artPageExamples"/></a> 
                            <br></br>
                    <h2 className="fillerText artHeaders">Union Terminal</h2>
                         <br></br> <br></br><br></br><br></br><br></br> 
                      <a href="https://www.cincymuseum.org/">   <img src={require('../assets/Union4.jpg')} alt="CAC" className="artPageExamples"/></a><br></br>
                                  <br></br>
                    <h2 className="fillerText artHeaders">Khron Conservatory</h2>
                    <br></br><br></br>
                <a href="https://www.cincinnatiparks.com/krohn/">  <img src={require('../assets/Krohn.jpg')} alt="Kc" className="artPageExamples"/></a> 
                                <br></br>
                   <p className="fillerText ender"><a href="/allLocations">CLICK HERE</a> to see all of our featured tourist destinations! </p>
                   </div>
                     </div>
        )
    }               
}