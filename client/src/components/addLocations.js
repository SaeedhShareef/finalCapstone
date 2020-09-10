import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
// import e from 'express';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Button from 'react-bootstrap/Button'
import {BACKEND_URL} from '../config'


export default class addLocations extends Component {
            constructor(props) {
                super(props);
                  this.onChangeName = this.onChangeName.bind(this);
                  this.onChangeDescription = this.onChangeDescription.bind(this);
                  this.onChangeWebsite = this.onChangeWebsite.bind(this);
                  this.onChangeImageUrl = this.onChangeImageUrl.bind(this)
                  this.onChangeAddress = this.onChangeAddress.bind(this);
                  this.onChangeCity = this.onChangeCity.bind(this)
                  this.onChangeState = this.onChangeState.bind(this)
                  this.onChangeZipCode= this.onChangeZipCode.bind(this)
                  this.onChangeIndoorsYes = this.onChangeIndoorsYes.bind(this)
                  this.onChangeIndoorsNo = this.onChangeIndoorsNo.bind(this)
                  this.onChangeFamilyFriendlyYes = this.onChangeFamilyFriendlyYes.bind(this)
                  this.onChangeFamilyFriendlyNo = this.onChangeFamilyFriendlyNo.bind(this)
                  this.onSubmit = this.onSubmit.bind(this);
                  this.state = {
                    name: "",
                    description: "",
                    website: "",
                    imageUrl: "",
                    location: {
                    address: "",
                    city: "",
                    state: " ",
                    zipCode: Number,
                  },
                    indoors: true, 
                    familyFriendly: true,
                    places: []
                  }
                }
                componentDidMount(){
                  this.getLocationsPost();
                };
                getLocationsPost() {
                    axios.get(BACKEND_URL + 'users/')
                   .then((res) => {
                     const data = res.data;
                      console.log(res.data)
                      console.log(this.state.name)
                     this.setState({places: data})
                     console.log('data dun did got');
                  })
                    .catch((err) => {
                      alert('error ABANDON SHIP!!!')
                    });
                  }
        //         ToggleButtonGroup() {
        //           // const [value, setValue] = useState([1, 0]);
        //         }
        onChangeName(e){
        this.setState({
        name: e.target.value
        })}
        onChangeDescription(e){
        this.setState({
        description: e.target.value
        })}
        onChangeWebsite(e) {
        this.setState({
        website: e.target.value
        })}
        onChangeImageUrl(e) {
        this.setState({
        imageUrl: e.target.value
        })}
        onChangeAddress(e) {
        this.setState ({
          location: {
            ...this.state.location,
                address: e.target.value
        }
        })}
      

        onChangeCity(e){
        this.setState({
          location: {
            ...this.state.location,
        city: e.target.value
      }
        })}

            onChangeState(e){
                this.setState({
                  location: {
                    ...this.state.location,
                    state: e.target.value
                }
                })
            }
            onChangeZipCode(e){
                this.setState({
                  location: {
                  ...this.state.location,
                    zipCode: e.target.value
                  }
                })
            }
            onChangeIndoorsYes(e){
              console.log('Indoors')
              this.setState({
                  indoors: e.target.value
              })
          }
          onChangeIndoorsNo(e){
            console.log('Outdoors')
            this.setState({
                indoors: e.target.value
            })
        }
                onChangeFamilyFriendlyYes(e){
              this.setState({
                  familyFriendly: e.target.value
              })
          }
          onChangeFamilyFriendlyNo(e){
            this.setState({
                familyFriendly: e.target.value
            })
        }
            onSubmit(e) {
                e.preventDefault();
                const newLocation  = {
                  name: this.state.name  ,
                  description: this.state.description,
                  website: this.state.website ,
                  imageUrl: this.state.imageUrl,
                  location: this.state.location,
                  address: this.state.location.address,
                  city: this.state.location.city,
                  state: this.state.location.state,
                  zipCode:this.state.location.zipCode, 
                  indoors: this.state.indoors, 
                  familyFriendly: this.state.familyFriendly
                }
                console.log(newLocation)
                axios.post(BACKEND_URL + 'users/', newLocation)
                .then((res) => {console.log(res.data)})
                  window.location = '/allLocations'
              }
  render(){
    return ( 
      <div >
<div id="bannerWrapper">
               <img src={require('../assets/image.jpeg')} alt="banner"/>
                    </div>
        <div className="container">
            <h3 className="underline pageHeading">Add Your Own Destination!</h3>
<form onSubmit={this.onSubmit}>
<div className="form-group">
      <label>Destination Name</label>
        <input 
          type="text"
          maxLength="30"
          required
          className='form-control'
          value={this.state.name}
          onChange={this.onChangeName}
        />
  </div>
  <div className="form-group">
      <label>Description</label>
        <input 
          type="text"
          maxLength="365"
          required
          className='form-control'
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
  </div>
  <div className="form-group">
      <label> Website </label>
        <input
        type="text"
        required
        className="form-control"
            value={this.state.website}
            onChange={this.onChangeWebsite}
            />
  </div>
  <div className="form-group ">
    <label>Image Url</label>
    <input
        type="text"
        required
        className="form-control"
            value={this.state.imageUrl}
            onChange={this.onChangeImageUrl}
            />
        </div>
        <div className="form-group ">
                <label  >Street Address</label>
                <div className="line">
                <input
                     type="text"
                     required
                     className="form-control "
                     value={this.state.location.address}
                     onChange={this.onChangeAddress}
                        />
                             </div>
                <label> City </label>
                <input
                     type="text"
                     required
                     className="form-control"
                      value={this.state.location.city}
                           onChange={this.onChangeCity}
                             />
                <label>State</label>
                <input
                     type="text"
                     minLength="2"
                     maxLength="4"
                     required
                     className="form-control"
                      value={this.state.location.state}
                           onChange={this.onChangeState}
                             />
                <label>ZIP Code</label>
              <input
              type="text"
              minLength="5"
              maxLength="5"
              className="form-control"
              value={this.state.zipCode}
              onChange={this.onChangeZipCode}
              />
<div className="form-group">
<label>Is this an indoor destination?</label>
<br/>
<br/> 
<ToggleButtonGroup type="radio" name="options" className="mb-2 buttons " >
<ToggleButton 
variant="info"
className="buttons form-control" 
value={1}
onClick={this.onChangeIndoorsYes}>
Yes</ToggleButton>
<ToggleButton 
variant="info"
 className="buttons"
value={0}
onClick={this.onChangeIndoorsNo}>
No</ToggleButton>
</ToggleButtonGroup>
     </div>                          
         </div>
         <div className="form-group">  
 <label>Is this location family friendly?</label>
 <br></br>
  <ToggleButtonGroup type="radio" name="options" className="mb-2" >
 <ToggleButton variant="info" className="buttons" value={1} onClick={this.onChangeFamilyFriendlyYes}>Yes</ToggleButton>
    <ToggleButton variant="info" className="buttons" value={0} onClick={this.onChangeFamilyFriendlyNo}>No</ToggleButton>
    </ToggleButtonGroup>
    <br></br>
    </div>   
 <Button variant="info" className="buttons" size="lg" block type="submit">Submit!</Button>
        </form>
        </div></div>
    )
    }
  }

