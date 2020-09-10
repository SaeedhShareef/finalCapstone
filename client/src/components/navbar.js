import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {UncontrolledDropdown,DropdownToggle,DropdownMenu, DropdownItem,} from 'reactstrap'
import { Nav } from 'react-bootstrap'
import axios from 'axios';
export default class Navbar extends Component {
    state = { 
        name: ' ',
        locations: [] 
      }
    componentDidMount(){
      this.getLocationPost();
    }
    getLocationPost() {
        axios.get('http://localhost:5000/all-locations')
       .then((res) => {
         const data = res.data;
          console.log(res.data)    
         this.setState({locations: data})
         console.log('data dun did got' + data);
      })
        .catch((err) => {
          alert('error ABANDON SHIP!!!')
        });
      }
    searchbar(locations) {
      if (!locations.length) return null;
       return locations.map((destination, index) => {
        console.log(destination.name)
       return <option value = {destination.name}/>
      })
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-warning justify-content-between navbar-expand-lg">
                <Link to="/" className="navbar-brand " > <img src={require('../assets/planeicon.png')} width="40px" alt="icon" class="icon"/>  EXPLORE CINCINNATI  </Link>
                <div className="">
                <ul className="navbar-nav mx-auto"> 
                        <li className="navbar-item">
                            <Link to="/" className="nav-link navUnderline navText navText1">Home </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/allLocations" className="nav-link navUnderline navText navText2">All Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/addLocations" className="nav-link navUnderline navText navText3">Add Locations </Link>
                            </li>
                            <li className="navbar-item">
                            <Link to="/contacts" className="nav-link navUnderline navText navText4">Contact </Link>
                            </li>
                              <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="navUnderline navText navText5">
                                    Explore!
                                </DropdownToggle>
                                <DropdownMenu right >
                                    <DropdownItem>
                                    <Nav.Link href="/categoryArt">Art</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                    <Nav.Link href="/categoryLearn">Learn</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                    <Nav.Link href="/categoryPlay">Play</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                    <Nav.Link href='/categoryShop'>Shop</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                    <Nav.Link href="/categoryView">View</Nav.Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                    <Nav.Link href="/categorySkate">Skate</Nav.Link>
                                    </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                                            </ul>
            </div>
                <form className="form-inline" method="get" action="https://google.com/search" method="get" autocomplete="on">
                <input list="places" className="form-control mr-sm-2" type="text" placeholder="Search Google" aria-label="Search Google" id="searchName" name="q"/> 
<datalist id="places">
<option value="Hotels in Cincinnati"/>
<option value="Public Transportation in Cincinnati"/>
<option value="Cincinnati History"/>
<option value="Cincinnati Facts"/>
<option value="Airports in Cincinnati"/>
{this.searchbar(this.state.locations)}
</datalist>
                <button className="btn btn-info buttons" type="submit" value="Google Search">Search</button>
                </form>
                </nav>
        )
    }
}