import React, { Component } from 'react'


export default class Skate extends Component {
    render() {
        return (


           <div className=''>

            <div className='container' style={{ textAlign: "center", marginTop: 70, width: '100%' }}>
                <div className='row'>


                <div className='infoBlock' style={{ width: 500, marginLeft: 800 }}>
                <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum minima porro aliquid asperiores quasi recusandae ipsam, quam sapiente. Nesciunt itaque magnam exercitationem tenetur, consequuntur provident corporis sapiente velit fuga?</b></p>
            </div>


            <div className='col'>
            <img style={{ padding:'0rem', maxWidth: 600, minHeight: 450, marginRight: 520, transform: 'scale(1.3)' }} src={require('../assets/skater7.jpg')} alt='issa skater' />
            </div>


            <div className='col'>
            <img style={{ padding:'0rem', maxWidth: 600, minHeight: 450, marginLeft: 510, transform: 'scale(1.3)' }} src={require('../assets/skater9.jpg')} alt='another skater' />
            </div>


            <div className='infoBlock2' style={{ width: 500, marginRight: 800 }}>
                <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cupiditate quas beatae iusto nulla unde, possimus officiis soluta est, deleniti voluptatum fuga! Explicabo laboriosam nulla at deleniti iste tempore voluptate.</b></p>
            </div>


            </div>
            </div>


            <br>
            </br>

            <br>
            </br>


                <div style={{ padding:'6rem', margin: '0 auto', maxWidth: 1000, marginLeft: 380 }}>

            <h2 className='underline'>Looking for some thrills?</h2>

                </div>


        <div style={{ marginTop: 15, maxWidth: '100%', marginBottom: 80 }}>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam autem animi eos veritatis nam possimus, atque porro. Aperiam, iusto laborum possimus obcaecati, corporis quae dolore sit molestias nobis corrupti aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia quo at voluptates dolorum fugit suscipit libero earum. Distinctio nihil voluptas molestias ipsam aliquid. Repellat, iure voluptatibus hic odio sunt soluta.</p>

        </div>

        <div style={{ padding: '1rem', margin:'0 auto', maxWidth: 1000, marginBottom:100 }}>
                
        <iframe width="960" height="560" src="https://www.youtube.com/embed/yPVYo8iZfmA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>

        </div>
    
        )
    }
}