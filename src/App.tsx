import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './Translations/en.json';
import kaTranslation from './Translations/ka.json';
import React, { useContext } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Products from './MainPage/Products/Products';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Login from './Auth/Login';
import Registration from './Auth/Registration';
import Main from './Main';
import Contact from './Contact/Contact';
import Filtered from './MainPage/FilteredProducts/Filtered';
import { AuthContext } from './Auth/Context/AuthContext';
import { CurrentUserContext } from './Auth/Context/Provider/CurrentUserProvider';
import Profile from './Profile/Profile';
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // set the default language
  resources: {
    en: {
      translation: enTranslation
    },
    ka: {
      translation: kaTranslation
    }
  }
});

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer /> 
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
              <Route path='/filtered/:category' element={<Filtered />} />
              {
              localStorage.getItem('acces-token') && (
                <Route path="/profile" element={<Profile />} />
              )
            }


            </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
