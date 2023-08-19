import { useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';
import { context } from './context/context';
import { useEffect, useLayoutEffect, useState } from 'react';
import FontFaceObserver from 'fontfaceobserver';

function App() {

  const routerContainer = useRoutes(routes)

  // State`s
  const [fontLoaded, setFontLoaded] = useState(false);
  const [navbarSearchValue, setNavbarSearchValue] = useState('')
  const [userInfoNotEmpty, setUserInfoNotEmpty] = useState(false) // user Login Handler
  const [userInfo, setUserInfo] = useState(() => {
    const userValue = localStorage.getItem('login');
    return userValue ? JSON.parse(userValue) : {};
  });
  const [locationName, setLocationName] = useState(() => {
    const localState = JSON.parse(localStorage.getItem('state'))
    return localState
  });

  // Set Location in LocalStorage
  useEffect(() => {
    if (!locationName) {
      localStorage.setItem('state', JSON.stringify('all'));
    } else {
      localStorage.setItem('state', JSON.stringify(locationName));
    }
  }, [locationName])

  // user Login Handler
  useEffect(() => {
    setUserInfoNotEmpty(Object.keys(userInfo).length !== 0)
  }, [userInfo])

  // Font Site Load Handler
  useLayoutEffect(() => {
    var font = new FontFaceObserver('estedad');

    font.load().then(function () {
      setFontLoaded(true)
    }, function () {
      setFontLoaded(false)
    });
  }, [])

  return (
    <context.Provider value={{
      userInfoNotEmpty,
      navbarSearchValue,
      setNavbarSearchValue,
      locationName,
      setLocationName,
      userInfo,
      setUserInfo
    }} >

      {fontLoaded && routerContainer}

    </context.Provider>
  );
}

export default App;


