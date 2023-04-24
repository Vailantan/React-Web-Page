import React from 'react'

export default function Shortcuts() {
    const myStyle = 
    {
position: "absolute",
width: "284px",
height: "400px",
left: "1601px",
top: "456px",
background: "#FFFFFF",
borderRadius: "8px",
fontFamily: 'Gilroy-Medium',

    }
    const descStyle =
    {
      position: "absolute",
      left: "52px",
      top: "18px",
      fontSize: "16px",fontWeight:"600"
    }
    const divStyle = {
        position:"absolute",
    width: "252px",
    height: "56px",
    left: "16px",
   

    background: "#F5F6FA",
    borderRadius: "8px"
    }
    
    const notifyIcon = 
    {
        position: "absolute",
        width: "40px",
        height: "24px",
        right:"16px",   
        top:'16px',     
        background: "#555B67",
        opacity: "0.2",
        borderRadius: "100px",
        transform: "matrix(-1, 0, 0, 1, 0, 0)"
    }
    const circleIcon =
    {
        position: "absolute",
width:"14px",
height: "14px",
right: "20px",
left:"202px",
top:"21px",

/* white */

background: "#FFFFFF",
/* shadow-%48-4 */

boxShadow: "0px   10px 48px rgba(0, 0, 0, 0.04)",
borderRadius: "100px",
transform: "matrix(-1, 0, 0, 1, 0, 0)"
    }
    /* button-background */
   
    const boxStyle1  =
    {
        position: "absolute",
        borderRadius: "3.5px",
        top: "10px",
        height: "8px",
        width: "13px",
        left: "7px",

/* main */

border: "2.5px solid #0F1C35",
    }
    const imgStyle = 
    {
        position:"absolute",
        height:"25px",
        top:"16px",
        left:"16px"
    }
  return (
    <div style={myStyle}>
    <div>
    <div style = {{position: "absolute",top: "24px",fontSize: "18px",lineHeight: "24px",color:"#0F1C35",left:"16px"}} ><b>Shortcuts</b></div>
    <div style={{position: "absolute",width: "40px",height: "40px",right: "16px",top: "16px",background:"#F3F5F9",borderRadius:"8px" }} ><div style={{...boxStyle1,top:"21px",width:"21px"}}></div><div style={{...boxStyle1,top:"8px",width:"13px"}}></div></div>
    </div>
    <div style={{...divStyle,top:"72px"}} >
    <span style={{ position: "absolute",top: "19px",left: "16px",fontWeight:"600"}}> Notify similar properties</span>
    <div style={notifyIcon}>
  </div>
  <div style={circleIcon}> </div>
    </div>
    <div style={{...divStyle,top:"136px",backgroundColor:"#2E63F6"}} >
    <span style={{...descStyle,color:"white"}}> Key Facts</span>
    <div><img src='key.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style={{...divStyle,top:"200px"}} >
    <span style={{...descStyle,color:" #555B67"}}> Property History</span>
    <div><img src='history.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style={{...divStyle,top:"264px"}} >
    <span style={{...descStyle,color:" #555B67"}}>Demographics</span>
    <div><img src='demo.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style={{...divStyle,top:"328px"}} >
    <span style={{...descStyle,color:" #555B67"}}>Point of Interest</span>
    <div><img src='interest.svg' alt='key' style={imgStyle}></img></div>
    </div>
    
    </div>
  )
}
