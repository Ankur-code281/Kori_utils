//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState} from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

function App() {
      const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() =>{
            setAlert(null);

        },1500);
  }
     const toggleMode = ()=>{
      if(mode === 'light'){
         setMode('dark');
         document.body.style.backgroundColor = 'grey';
         showAlert("Dark mode has been enabled", "success");

      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled", "success");
     }
      }
        
      {/*<Navbar tittle="Koriutils" hometext="Home" abouttext="About" toggleMode={toggleMode}/>*/}
  
      return (
    <>
      <BrowserRouter>
       {/*<Navbar tittle="Koriutils" hometext="Home" abouttext="About" toggleMode={toggleMode}/>*/}
        <Navbar
          title="Koriutils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
 