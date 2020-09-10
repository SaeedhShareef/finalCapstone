import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "./banner"
import BootstrapCarousel from "../BootstrapCarousel"
// import Art from "./categoryArt"
// import Skate from "./categorySkate"
// import Play from "./categoryPlay"
// import Shop from "./categoryShop"
// import View from "./categoryView"
// import Learn from "./categoryLearn"
// import viewSquares from './viewSquares';
export default class Home extends Component {
    render() {
        return (
<div>
<Banner />
<div className="layoutPageBody">
<center>
  <h1 className="styleOfHeaderHome underline"> LOTS TO DO AND SEE IN CINCINNATI </h1>
<p className="container-sm fillerText"> 
Cincinnati is a small, accesible city filled to the brim with culture. Cincinnati has a strong connection with the arts, and it's on display at every turn. Cincinnati has their own Baseball team, Football team and Soccer team, so if you love sports it's a great place to be! We've got citywide cultural events like Oktoberfest, an interactive neon light filled art festival named Blink, and even our own Music festival! <br></br> <br></br>Foodies and food trucks, brewmasters and bourbon, football and fussball, tradition and transformation - it's all happening right here. 
Choose from one of the following categories to see more info about any given location, or check out our "All Locations" tab to browse user created favorite tourist destinations to see around Cincinnati. </p>
</center>
<div className="layoutHomeLeft">
<BootstrapCarousel />
{/* <BrowserRouter> */}
{/* <Switch>
    <Route exact path='/' component={BootstrapCarousel} />
    <Route path='/categoryArt' component={Art} />
    <Route path='/categorySkate' component={Skate} />
    <Route path='/categoryPlay' component={Play} />
    <Route path='/catergoryShop' component={Shop} />
    <Route path='/categoryPlay' component={View} />
    <Route path='/categoryLearn' component={Learn} />
</Switch>
</BrowserRouter> */}
{/* <Art /> */}
{/* <Skate /> */}
{/* <Play /> */}
{/* <Shop /> */}
{/* <View /> */}
{/* <Learn /> */}
</div>
<div className="layoutHomeRight">
    {/* <viewSquares /> */}
    <div className="imgWithText">
            <div className="gridElements">
            <a href='/categoryView'>
            <img src={require('../assets/Union2.jpg')} alt="union"/> 
            <p className="bottom-left">VIEW</p>
            </a> 
            </div>
            </div>
           <div className="imgWithText">
            <div className="gridElements">
            <a href="/categoryPlay">
            <img src={require('../assets/arcade.jpg')} alt="arcade"/>
                <p className="bottom-left">PLAY</p>
            </a> 
            </div>
            </div>
            <div className="imgWithText">
            <div className="gridElements">
                <a href="/categoryArt">
                <img src={require('../assets/CAC3.jpg')} alt="CAC"/>
                <p className="bottom-left">ART</p>
                </a> 
            </div>
            </div>
            <div className="imgWithText">
            <div className="gridElements">
            <a href='/categorySkate'>
            <img src={require('../assets/skatepark3.jpg')} alt="arcade"/>
                <p className="bottom-left">SKATE</p> 
            </a>
            </div>
            </div>
            <div className="imgWithText">
            <div className="gridElements">
            <a href='/categoryLearn'>
            <img src={require('../assets/otherMuseum.jpg')} alt="arcade"/>
                <p className="bottom-left">LEARN</p> 
            </a>
            </div>
            </div>
            <div className="imgWithText">
            <div className="gridElements">
            <a href='/categoryShop'>
            <img src={require('../assets/newport1.jpg')} alt="arcade"/>
                <p className="bottom-left">SHOP</p> 
            </a>
            </div>
            </div>  
</div> 
<h2 className="underline"> THE CITY OF CINCINNATI</h2> 
<p className="blurb fillerText">    Cincinnati (/ˌsɪnsɪˈnæti/ SIN-sih-NAT-ee) is a major city in the U.S. state of Ohio and the government seat of Hamilton County. Settled in 1788, the city is located at the northern side of the confluence of the Licking and Ohio rivers, the latter of which marks the state line with Kentucky. The city is the economic and cultural hub of the Cincinnati metropolitan area, the fastest growing economic power in the Midwestern United States based on increase of economic output,which had a population of 2,190,209 as of the 2018 census estimates. This makes it Ohio's largest metropolitan area and the nation's 29th-largest. With a city population estimated at 303,940, Cincinnati is the third-largest city in Ohio and 64th in the United States. Cincinnati is within a day's drive of 49.70% of the United States populace, ranking it as fourth in the list of metro areas with the largest population base within one day's drive time.
In the 19th century, Cincinnati was an American boomtown in the middle of the country. Throughout much of the 19th century, it was listed among the top 10 U.S. cities by population, surpassed only by New Orleans and the older, established settlements of the United States eastern seaboard, as well as being the sixth-biggest city for a period spanning 1840 until 1860. Cincinnati was the first city founded after the American Revolution, as well as the first major inland city in the country.
{/* Cincinnati developed with fewer immigrants and less influence from Europe than East Coast cities in the same period. However, it received a significant number of German-speaking immigrants, who founded many of the city's cultural institutions. By the end of the 19th century, with the shift from steamboats to railroads drawing off freight shipping, trade patterns had altered and Cincinnati's growth slowed considerably. The city was surpassed in population by other inland cities, particularly Chicago, which developed based on strong commodity exploitation, economics, and the railroads, and St. Louis, which for decades after the Civil War served as the gateway to westward migration. */}
Cincinnati is home to three major sports teams: the Cincinnati Reds of Major League Baseball; the Cincinnati Bengals of the National Football League; and FC Cincinnati of Major League Soccer. The city's largest institution of higher education, the University of Cincinnati, was founded in 1819 as a municipal college and is now ranked as one of the 50 largest in the United States. Cincinnati is home to historic architecture with many structures in the urban core having remained intact for 200 years. In the late 1800s, Cincinnati was commonly referred to as the "Paris of America", due mainly to such ambitious architectural projects as the Music Hall, Cincinnatian Hotel, and Shillito Department Store. Cincinnati is the birthplace of William Howard Taft, the 27th President of the United States.
</p>
</div>
</div>
        )}}