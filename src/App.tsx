import React, { useContext } from 'react';
import Header from './Header/Header';


import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Login from './Auth/Login';
import Registration from './Auth/Registration';
import Main from './Main';
import Contact from './Contact/Contact';

import { AuthContext } from './Auth/Context/AuthContext';
import { CurrentUserContext } from './Auth/Context/Provider/CurrentUserProvider';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
       
    </div>
  );
};


function App() {
  const { status } = useContext(AuthContext);
  
  return (
    <div className="App flex flex-col justify-between h-[100vh]">
      

      <BrowserRouter>
       <Routes>
            <Route  path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/registration' element={<Registration />}/>
              <Route path='/contact' element={<Contact />}/>
              
              {
              
            }


            </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
