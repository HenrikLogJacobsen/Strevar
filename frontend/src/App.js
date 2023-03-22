import  {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and Components
import Home from './pages/Home/Home'
import Navbar from './components/navbar/Navbar';
import MyExercises from './pages/MyExercises/MyExercises';  
import MySessions from './pages/MySessions/MySessions';
import MyPrograms from './pages/MyPrograms/MyPrograms';
import Profile from './pages/Profile/Profile';
import Friends from './pages/Friends/Friends';


import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/friends' element={<Friends />} />
            <Route path="/my-programs" element={<MyPrograms />} />
            <Route path="/my-exercises" element={<MyExercises />} />
            <Route path="/my-sessions" element={<MySessions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
