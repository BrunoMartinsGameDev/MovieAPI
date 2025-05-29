import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Layout from './components/Layout';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<MovieDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
