import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AnimatedNavbar from './components/AnimatedNavbar/AnimatedNavbar';
import Alert from './components/Alert/Alert';
import ModelsPage from './pages/ModelsPage/ModelsPage';

import { connect } from 'react-redux';
import { setImageDimensions } from './redux/uploadImage/uploadImage.actions';

const particleOptions = {
  particles: { 
    number: { 
      value: 200, 
      density: { 
        enable: true, 
        value_area: 1000, 
      } 
    }, 
  }, 
}


function App({ setImageDimensions }) {
  const updateImageSize = () => {
    const img = document.getElementById('inputImage');
    if (img) {
      setImageDimensions(img.clientWidth, img.clientHeight);
    }
  };
  window.addEventListener('resize', updateImageSize);
  return (
    <div className="App">
      {<Particles className='particles' params={particleOptions} />}
      <AnimatedNavbar />
      <div className='app-content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/models' component={ModelsPage} />
        </Switch>
        <Alert />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setImageDimensions: (width, height) =>
    dispatch(setImageDimensions(width, height)),
});

export default connect(null, mapDispatchToProps)(App);
