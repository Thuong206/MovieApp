import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Login from './components/Login.js'
import Header from './components/Header.js'
import Content from './components/Container.js'
import Data from './components/Data.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
