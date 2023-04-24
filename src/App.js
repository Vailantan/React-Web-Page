import './App.css';
import Group7367 from './Components/Group7367';
import Pictures from './Components/Pictures';
import PropertyDetails from './Components/PropertyDetails';
import Shortcuts from './Components/Shortcuts';
import Sales from './Components/Sales';
import Tour from './Components/Tour';
import Header from './Components/Header';
function App() {
  const imgStyle = 
  {
    position:"absolute",
    height:"16px",
    top:"16px",
    left:"16px"
  }
 
  return (
   <>
   <div style={{position:"absolute",width:"48px",borderRadius:"100%",left:"25px",top:"32px",height:"48px",backgroundColor:"#2E63F6"}}><img src='star.svg' alt='pic' style={{height:"48px"}}></img></div>
   <Header/>
   <Tour/>

   <div style={{backgroundColor:"#FFFFFF", position: "absolute", width: "48px", height: "48px",left:" 356px",top: "240px",borderRadius:"8px" ,zIndex:"1"}}><img  style ={imgStyle} src='leftarrow.svg' alt="arrow"></img></div>
   <div style={{backgroundColor:"#FFFFFF", position: "absolute", width: "48px", height: "48px",left:" 1823px",top: "240px",borderRadius:"8px" ,zIndex:"1"}}><img style={imgStyle} src='rightarrow.svg' alt="arrow"></img></div>
  <Pictures />

   <Group7367 />
   <PropertyDetails/>
  <Shortcuts/>
  <Sales/>
   </>
  );
}

export default App;
