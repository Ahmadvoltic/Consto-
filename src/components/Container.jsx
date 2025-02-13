// import React from 'react'

// const Container = ({className, children}) => {
//   return (
//     <div className={`max-w-[1200px] mx-auto ${className}`}>
//       {children}  
//     </div>
//   )
// }

// export default Container

import React from 'react';

const Container = ({ className, children }) => {
  return (
    <div className={`w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
