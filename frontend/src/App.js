// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import NoteScreeen from './Components/NoteScreeen';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home></Home>}></Route>
        <Route path='/signup' element ={<SignUp></SignUp>}></Route>
        <Route path='/login' element ={<SignIn></SignIn>}></Route>
        <Route path='/notescreen' element ={<NoteScreeen></NoteScreeen>}></Route>
        <Route path='*' element ={<div>Eror page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
