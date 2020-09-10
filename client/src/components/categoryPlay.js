import React, { Component } from 'react'


export default class Play extends Component {
    render() {
        return (
           <div className=''>

            <div style={{ textAlign: "center", marginTop: 70 }}>
                
                <div style={{ marginLeft: 490 }}>
                <h2 className='underline'>Need Some Entertainment?</h2>
                </div>
                

            <div style={{ marginRight: 90, marginLeft: 100 }}>
            <img src={require('../assets/arcade2.jpg')} alt='arcade 2' style={{ marginTop: 200 }} />
            </div>


            </div>


            </div>
        )
    }
}