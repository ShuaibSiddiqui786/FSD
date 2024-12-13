import React from "react";
import Map from "./components/Map";

// function App() {
//   // const [store ,setStore]=useState("");

//   return (
//     // <>
//     <div> App
//       {/* {JSON.stringify(store)}
//       <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<MainLayout/>}>
//           <Route path="/login" element={<Login regDataLogin={store}/>}/>
//           <Route path="/registration" element={<Registration regData={setStore}/>}/>
//           {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
//         </Route>
//       </Routes>

//       <Routes>
//         <Route path="/dashboard" element={<Dashboard/>}></Route>
//       </Routes>
//       </BrowserRouter> */}
//     </div>
  
//     {/* </> */}
//   )
// }

// export default App

function App() {
  return (
    <div><Map/></div>
  )
}

export default App