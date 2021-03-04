import React, { Component } from 'react'
import Navmain from "../components/NavMain"
import axios from "axios";
import { NavLink } from 'react-router-dom';

export default class RandomBeer extends Component {

    state = {
        beer: null,
      };


      componentDidMount() {
        // console.log(this.props.match.params.id);
        const beerId = this.props.match.params.id;
    
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then((apiResponse) => {
          console.log(apiResponse);
          
            this.setState({
              beer: apiResponse.data,
            });
          })};

      render() {
        if (!this.state.beer) {
          return <img src="https://cdn.dribbble.com/users/408943/screenshots/2887008/loading-macro-animation-for-brewery-website.gif"/>;
        }
    
        return (
          <div>
              <Navmain />
              <NavLink exact to={`/listbeers`}>
               Back to beers list
              </NavLink>
            <h2> Beer page</h2>
            <div>
              <h2>{this.state.beer.name}</h2>
              <img src={this.state.beer.image_url} />
            </div>
            {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
          </div>
        );
      }
}
