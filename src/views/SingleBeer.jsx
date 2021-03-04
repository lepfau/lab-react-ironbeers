import React, { useState, useEffect } from 'react';
import Navmain from "../components/NavMain"
import axios from "axios";
import { NavLink } from 'react-router-dom';



function SingleBeer(props) {

  const [beer, setBeer] = useState([])

useEffect(() => {
  const beerId = props.match.params.id
  axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId )
  .then((respFromApi) => {
    console.log(respFromApi.data)
    setBeer([respFromApi.data])
  })
  .catch(err => {
    console.log(err)
  })

}, [])

  return (
    <div>
      {beer.map((beer) => {
        return (
          <div>
            <p>{beer.name}</p>
            <img src={beer.image_url}/>
        <p>{beer.description}</p>
            </div>
        )
      })}
    </div>
  )
}

export default SingleBeer


// export default class SingleBeer extends Component {

//     state = {
//         beer: null,
//       };

//       componentDidMount() {
//         // console.log(this.props.match.params.id);
//         const beerId = this.props.match.params.id;
    
//         axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId).then((apiResponse) => {
//           console.log(apiResponse);
          
//             this.setState({
//               beer: apiResponse.data,
//             });
         
//         });
//       }

//       render() {
//         if (!this.state.beer) {
//           return <div>Loading.....</div>;
//         }
    
//         return (
//           <div>
//               <Navmain />
//               <NavLink exact to={`/listbeers`}>
//                Back to beers list
//               </NavLink>
//             <h2> Beer page</h2>
//             <div>
//               <h2>{this.state.beer.name}</h2>
//               <img src={this.state.beer.image_url} />
//             </div>
//             {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
//           </div>
//         );
//       }
// }
