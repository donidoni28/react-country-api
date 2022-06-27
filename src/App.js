import CountryComponent from './Components/CountryComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoonOutline, Moon } from 'react-ionicons';

import useAxios2 from './hooks/useAxios2';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailComponent from './Components/DetailComponent';
import { ThemeContext, themes } from './context/theme-context';

function App() {
  let [post, loading] = useAxios2()
  let handleClick = () => {
    setState({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
      style: state.style === 'dark' ? 'light' : 'dark'
    })
  }
  let [state, setState] = useState({
    theme: themes.dark,
    style: 'dark',
    themeToggle: handleClick
  })
  let moon = state.style === 'dark' ? (
    <React.Fragment>
      <Moon width='1.5rem' height='1.5rem' color={'blue'}  />
      <p className='ms-2'>Wite Mode</p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <MoonOutline width='1.5rem' height='1.5rem' color={'blue'}  />
      <p className='ms-2'>Dark Mode</p>
    </React.Fragment>
  )
  return (
    <ThemeContext.Provider value={state}>
      {console.log(state)}
      <div style={state.theme.background}>
        <Router>
          <nav className='pt-2 border-bottom px-2' style={state.theme.element}>
            <div style={state.theme.text} className='d-flex flex-row justify-content-between' >
              <p>Where in the world?</p>
              <div className='d-flex flex-row mx-2' onClick={handleClick}>
                {
                  moon
                }
                
              </div>
            </div>
          </nav>
          {
            !loading ? (
              <Routes>
                <Route path='/' element={<CountryComponent data={post} />} />
                <Route path='/detail/' element={<DetailComponent />} />
              </Routes>

            ) : (
              console.log(loading)
            )
          }
        </Router>
      </div>
    </ThemeContext.Provider>

  )

}

export default App;
