// import React, { Component } from 'react';

// class TVLoader extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tv: [],
//       isLoading: true,
//       isError: false,
//     };
//   }

//   componentDidMount() {
//     this.load();
//   }

//   load = () => {
//     fetch('./tv.json')
//       .then((response) => response.json())
//       .then((tv) =>
//         this.setState({
//           tv,
//         })
//       )
//       .catch((error) => this.setState({ isError: error }))
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   };

//   render() {
//     const { tv, isLoading, isError } = this.state;
//     return (
//       <>
//         {isLoading && <div>Loading ...</div>}
//         {isError && <div>Error happening: {isError.message}</div>}
//         <ul>
//           {tv.map((tv) => (
//             <li>
//               {tv.brand}--{tv.price}--{tv.model}
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default TVLoader;

import useData from '../DataProvider/DataProviderH';

const TVLoader = () => {
  const { data: tv, isLoading, error } = useData(getPhones);

  function getPhones() {
    return fetch('./tv.json').then((response) => response.json());
  }

  return (
    <>
      {isLoading && <div>Loading....</div>}
      {error && <div>Error happening: {error.message}!</div>}

      <ul>
        {tv.map((tv, index) => (
          <li key={index}>
            {tv.brand}--{tv.price}--{tv.model}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TVLoader;
