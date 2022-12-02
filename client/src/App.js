

import React,{createContext,useState} from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Login from './Login'
import Myprofile from './Myprofile'
import Nav from './Nav'
import Register from './Register'

export const store = createContext();


const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div className='container'>
  <>
  
    <store.Provider value={[token,setToken]}>
    <BrowserRouter>
      <Nav/>
    <Routes>
      <Route path = '/register' element = {<Register/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/myprofile' element = {<Myprofile/>}/>
    </Routes>
    </BrowserRouter>
    </store.Provider>
  </>
  </div>
  )
}

export default App















// import React,{useState,createContext} from 'react'
// import {BrowserRouter,Router,Route} from 'react-router-dom';
// import Nav from './Nav';
// import Register from './Register';
// import Login from './Login';
// import Myprofile from './Myprofile';

// export const store = createContext();

// const App = () => {
//   const [token,setToken] = useState(null);
//   return (
//     <div>
//       <store.Provider value={[token,setToken]}>
//       <BrowserRouter>
//         <Nav />
//         <Router>
//           <Route path='/register' component={Register} />
//           <Route path='/login' component={Login} />
//           <Route path='/myprofile' component={Myprofile} />
//         </Router>
//       </BrowserRouter>
//       </store.Provider>
//     </div>
//   )
// }

// export default App