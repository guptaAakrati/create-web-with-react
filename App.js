// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForms';
// import About from './component/About'
import Alert from './component/Alert';


function App() {

  const [mode , setMode] =  useState('light') // weather dark mode enable or not .
   const [alert , setAlert] = useState(null)


    const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })

        setTimeout(()=>{
           setAlert(null)
        },2000)
    } 
 
   const toggleMode = ()=>{
       if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = "#013208";
        showAlert('Dark  mode has been enabled',"success");
       } 
       else{
         setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert('Light  mode has been enabled','success');
       }
   }
  return (
      <> 
     <Navbar title = "ReactJs App " about = "About Us" home = "Home" mode= {mode} toggleMode = {toggleMode}/>
       {/* <Navbar title='Play with React' about='build web with react .'/> */}

        <Alert alert = {alert}/>
       
       <div className="container my-3">
           <TextForm showAlert={showAlert} heading = "The Text to analyse below" mode={mode}/>
           {/* <About/> */}
       </div>
      
      </>

  
);
}

export default App;
