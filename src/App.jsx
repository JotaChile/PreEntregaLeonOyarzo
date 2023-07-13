import React from 'react'
import './App.css'
import AppRoutes from './components/Routes/Routes'

const App = () => {

  const divStyle = {
    margin: '0 auto'
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={divStyle}>
              <AppRoutes />
          </div>
      </div>
    </div>
  )
}

export default App
