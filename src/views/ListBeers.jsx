import React, { useState, useEffect } from 'react';
import Navmain from '../components/NavMain';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ListBeers() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((respFromApi) => {
        setTimeout(() => {
          setLoading(false)
        }, 1000);
        setBeers(respFromApi.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div>
      <Navmain/>
      {loading ? (
        <img src="https://cdn.dribbble.com/users/408943/screenshots/2887008/loading-macro-animation-for-brewery-website.gif" />
      ) : (
        beers.map((beer) => {
          return (
            <div>
              <p>{beer.name}</p>
              <img src={beer.image_url} />
              <NavLink exact to={`/beers/${beer._id}`}>
        Details...
         </NavLink>
            </div>
          );
        })
      )}
    </div>
  );



}

export default ListBeers;

// export default class ListBeers extends Component {
//   state = {
//     beers: [],
//   };

//   componentDidMount() {
//     axios
//       .get('https://ih-beers-api2.herokuapp.com/beers')
//       .then((responseFromApi) => {
//         console.log(responseFromApi.data);
//         this.setState({
//           beers: responseFromApi.data,
//         });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <Navmain />
//         <h1>ALL BEERS</h1>
//         {this.state.beers.map((beer) => {
//           return (
//             <div key={beer._id} style={{ border: 'solid 1px black' }}>
//               <h3>{beer.name}</h3>
//               <p>{beer.description}</p>
//               <img
//                 src={beer.image_url}
//                 style={{ width: '100px', height: 'auto' }}
//               />
//               <NavLink exact to={`/beers/${beer._id}`}>
//                 Details...
//               </NavLink>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
