import React from "react";
import { useParams } from "react-router-dom";

function Profilepage() {
  const params = useParams();         //----------// 
  const profileId = params.profileId;             //
  // or                                           //--- Here its a link to a router in main that is
  // const { profileId } = useParams();           //    configured as Dynamic route
  // console.log(params);                         //  
                                     //-----------//  
  return (
    <div className="text-4xl font-bold text-gray-900">
      Profilepage {params.profileId}
      {/* Profilepage {profileId} */}
    </div>
  );
}

export default Profilepage;
//Here this Component is not aware of the id  of which it is rendering so you need to use useParasm() to Access the ID

//TYPESCRIPT
// import React from 'react'
// import { useParams } from 'react-router-dom'

// function Profilepage() {
//   //So for typescript  we can specify that the profileId should be String that we are expecting a string to be passed
// const params = useParams,< { profileId: String } >();
//   // console.log(params);

//   return (
//     <div>Profilepage {params.profileId}</div>
//   )
// }

// export default Profilepage
