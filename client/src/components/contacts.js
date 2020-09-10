import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
      date: new Date(),
      contactInfo: []
     }
    }


    componentDidMount(){
      this.getContactsPost();
    }
    
    getContactsPost() {
        axios.get(BACKEND_URL + 'users/')
       .then((res) => {
         const data = res.data;
          console.log(res.data)
    
         this.setState({contactInfo: data})
         console.log('data dun did got');
      })
        .catch((err) => {
          alert('error ABANDON SHIP!!!')
        });
      }





    

    //probably dont need
onChangeName(e){
  this.setState({
    name: e.target.value
  });
}
onChangeEmail(e){
  this.setState({
    email: e.target.value
  });
}
onChangePhoneNumber(e){
  this.setState({
    phoneNumber: e.target.value
  })
}
onChangeMessage(e){
  this.setState({
    message: e.target.value
  })
}
onChangeDate(date){
  this.setState({
    date: date
  });
}

onSubmit(e){
  e.preventDefault();

  const contact = {
    name: this.state.name,
    email: this.state.email,
    phoneNumber: this.state.phoneNumber,
    message: this.state.message,
    date: this.state.date
  }
  console.log(contact);
//122 video
  axios.post(BACKEND_URL + 'users/', contact)
  .then(res => console.log(res.data))

  // window.location = '/';

}


render() {
  return (
    <div className="pageContain">
                   <div id="bannerWrapper">
               <img src={require('../assets/skyline.jpg')} alt="banner"/>
                    </div>
                    <div className="container ">
                        <h1 className="underline pageHeading"> Please fill out this brief form, if you'd like to learn more about the Queen City! </h1>
                        <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                 <label> Name</label>
                <input 
               type="text"
               required
               className='form-control line'
               value={this.state.name}
               onChange={this.onChangeName}
              />
    </div>
    <div className="form-group">
         <label>Email</label>
           <input 
            type="email"
            // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            required
            className='form-control'
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
    </div>
    <div className="form-group">
    <label>Leave us a short message! </label>
                <input 
               type="text"
               required
               className='form-control line'
               value={this.state.message}
               onChange={this.onChangeMessage}
              />
    </div>

    <div className="form-group">

    <label>Phone Number</label>
                <input 
               type="text"
               required
               className='form-control line'
               value={this.state.phoneNumber}
               onChange={this.onChangePhoneNumber}
              />
    </div>
    
             <div className="form-group">
           <label>Date:</label>
             <div>
                 <DatePicker 
                  selected = {this.state.date}
                  onChange={this.onChangeDate}
                 />
              </div>
            </div>
         <div className="form-group">
          <Button variant="info" className="buttons" size="lg" block type="submit">Submit!</Button>
    </div>
    </form>
            </div>
        </div> 
  )
}
}
