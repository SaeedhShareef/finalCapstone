import React from 'react';
import { Link } from 'react-router-dom';
class PageNotFound extends React.Component{


    render(){
        return <div className="layout404">

            <p style={{textAlign:"center"}}>
          <h1>  Error 404: Page Not Found. </h1>
          
            Sorry, the URL you are looking for may have been changed or removed. 
           <br />   <Link to="/"><b>Go Back Home</b > </Link> </p>
            <br /><center>
                         <img src={require("../assets/ohiomap.png")} alt="map" /> 
</center>
              
           
          </div>;
    }
}
export default PageNotFound;