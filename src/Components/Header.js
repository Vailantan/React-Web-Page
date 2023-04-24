import React from 'react'

export default function Header() {
    const myStyle =
    {
        position:"absolute",
        width:"1555px",
        height:"48px",
        top:"32px",
        left:"328px"
    }
    const imgStyle = {
        position:"absolute",
        height:"16px",
        top:"15px",
        left:"16px"
      }
      const userStyle = 
      {
        position:"absolute",
        left:"1322px",
        width:"232.64px",
        height:"48px",
        top:"0px"

      }
  return (
    <div style={myStyle}>
    <div style={{backgroundColor:"#FFFFFF", position: "absolute", width: "48px", height: "48px",left:" 5px",top: "0px",borderRadius:"8px" ,zIndex:"1"}}><img  style ={imgStyle} src='leftarrow.svg' alt="arrow"></img></div>
    <span style={{fontSize:"24px" ,position:"relative",left:"73px",top:"7px",color:"#555B67"}}>2218 Thornridge Cir.. <b>E5579076</b></span>
    <span style={{position:"absolute" ,top:"15px",left:"1273px"}}><img src='log.svg' alt="pic" style={{height:"20px"}}></img></span>
    <span style={{position:"absolute" ,top:"15px",left:"1233.24px"}}><img src='setting.svg' alt="pic" style={{height:"20px"}}></img></span>
    <span style={{position:"absolute" ,top:"15px",left:"1190.48px"}}><img src='search.svg' alt="pic" style={{height:"20px"}}></img></span>
    <span style={{position:"absolute" ,top:"15px",left:"1147.72px"}}><img src='notify1.svg' alt="pic" style={{height:"20px"}}></img></span>
    <div  style={userStyle}>
    <div style={{position:"absolute",width:"48px",borderRadius:"100%",left:"0px",top:"0px",height:"48px",background:'url("user.png")',backgroundSize:"100% 100%"}}></div>
    <span style={{fontSize:"16px",position:"absolute",left:"53px",top:"4px"}}><b> Berkay Endric</b></span>
    <span style={{fontSize:"16px",position:"absolute",left:"53px",top:"24px"}}> hiberkayerdinc.com</span>
    
    <span style={{position:"absolute",left:"208px",top:"19px"}}><img src='rightarrow.svg' alt="arrow" style={{height:"17px",position:"absolute",transform:"rotate(90deg)"}}></img></span>
    </div>
    </div>
  )
}
