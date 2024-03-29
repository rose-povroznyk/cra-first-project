import React, { useEffect, useState } from 'react';
import useData from '../DataProvider/DataProviderH';

// const PhonesLoaderH = () => {
//   const [phones, setPhones] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   const load = () => {
//     fetch('./phones.json')
//       .then((response) => response.json())
//       .then((phones) => setPhones(phones))
//       .catch((error) => setIsError(error))
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     load();
//   }, [phones]);

//   return (
//     <>
//       {isLoading && <div>Loading ...</div>}
//       {isError && <div>Error happening: {isError.message}</div>}
//       <ul>
//         {phones.map((phone) => (
//           <li>
//             {phone.brand}--{phone.price}--{phone.model}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default PhonesLoaderH;

const PhonesLoaderH = () => {
  const { data: phones, isLoading, error } = useData(getPhones);

  function getPhones() {
    return fetch('./phones.json').then((response) => response.json());
  }

  return (
    <>
      {isLoading && <div>Loading....</div>}
      {error && <div>Error happening: {error.message}!</div>}

      <ul>
        {phones.map((currentPhone, index) => (
          <li key={index}>
            Brand: {currentPhone.brand} --- Model: {currentPhone.model} ---
            Price: {currentPhone.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PhonesLoaderH;
