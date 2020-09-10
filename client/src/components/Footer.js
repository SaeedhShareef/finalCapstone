// Footer is COMPLETE -DJ
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="layoutFooter footer whiteText">
               <center class="footText"> 
               
                <h4 className="yellowText"> Places to enjoy your stay: </h4> 
                        <p><a href="https://www.hilton.com/en/book/reservation/rooms/?WT.mc_id=zLADA0WW1XX2OLX3DA4MS5MS6_CVGNPHF7_129231037_&hmGUID=8cf4d81a-4af1-479a-1a2d-419d0083da1a&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true" target="_blank" rel="noopener noreferrer">Hilton Cincinnati Netherland Plaza</a></p>


                        <p> <a href="https://www.hyatt.com/en-US/hotel/ohio/hyatt-regency-cincinnati/cinci?src=corp_lclb_gmb_seo_nam_cinci" target="_blank" rel="noopener noreferrer"> Hyatt Regency Cincinnati</a></p> 
                        
                        <p><a href="https://www.marriott.com/hotels/travel/cvgwi-the-westin-cincinnati/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_NzIxODc4NS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU=" target="_blank" rel="noopener noreferrer">The Westin Cincinnati</a> </p>

                     <br />

                        <p className="yellowText"><a href="https://www.cvgairport.com/"  target="_blank" rel="noopener noreferrer"> Book Your Flight Now!</a></p>
               
                </center>
               
            </div>
        )
    }
}