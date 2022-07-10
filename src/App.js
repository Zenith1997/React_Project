import ResponsiveAppBar from './components/Nav';

import {Routes,Route} from "react-router-dom";

import Home from './components/Home';
import Plant from './components/Plant';

import SignInSide from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';


const App =()=> {
  return (
    <div >
 
    <Routes>
    <Route path ="/" element ={<SignInSide/>}/>
      <Route path ="/Home" element ={<Home/>}/>
   
      <Route path ="/Plant" element ={<Plant/>}/>
      <Route path ="/About" element ={<About/>}/>
      <Route path ="/signin" element ={<SignInSide/>}/>
      <Route path ="/signup" element ={<SignUp/>}/>
    </Routes>
    </div>
  );
}

export default App;
