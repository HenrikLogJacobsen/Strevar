import  {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and Components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import MyExercises from './pages/MyExercises';  
import MySessions from './pages/MySessions';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/my-exercises" element={<MyExercises />} />
            <Route path="/my-sessions" element={<MySessions />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
