import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from './components/Login.js'
import Header from './components/Header.js'
import Content from './components/Container.js'
import Data from './components/Data.js'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/home' element={<Content />} />
        </Routes>

        <Routes>
          <Route path='/data' element={<Data />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
