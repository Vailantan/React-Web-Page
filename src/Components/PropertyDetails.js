import React from 'react'

export default function PropertyDetails  () {
    const myStyle = 
    {
        position: "absolute",
width:" 922px",
height: "88px",
left: "658px",
top: "456px",
display:"flex",
justifyContent:"space-around",
fontWeight:"500",

/* white */


background: "#FFFFFF",
borderRadius: "8px",
    }
  
    const spanStyle =
    {
        position: "absolute",
left: "46px",

top: "13px",
fontSize: "18px",
lineHeight: "24px",

/* identical to box height, or 133% */




/* main */

color: "#0F1C35",

    }
    const pStyle =
    {
        position:"absolute",left:"26px",top:"31px",color:"#555B67",

        fontSize: "14px",
    }
    const imgStyle = 
    {
        height:"20px",position:"absolute",left:"47px",top:"17px"
    }
   
  return (

    <div style={myStyle}>
    <div  style={{position:"absolute",width:"214px", height:"88px",left:"0px",fontSize:"16px",fontWeight:"600"}} > <p style={spanStyle}>Property Details</p></div>
    
    
    <div  style={{position:"absolute",width:"110px",height:"88px",left:"573px"}}><span><img  src='garage.svg' alt='apartments' style={imgStyle} ></img></span><p style={pStyle}> 2 Garage</p></div>
    <div  style={{position:"absolute",width:"110px", height:"88px",left:"689px"}}><span><img  src='home.svg' alt='apartments' style={imgStyle} ></img></span><p style={pStyle}>1,963 sq.ft.</p></div>
    <div  style={{position:"absolute",width:"110px",height:"88px",left:"805px"}}><span><img  src='sqfeet.svg' alt='apartments' style={imgStyle} ></img></span><p style={pStyle}>1,176 sq.ft.</p></div>
    <div  style={{position:"absolute",width:"110px",  height:"88px",left:"458px"}}><span><img  src='bathroom.svg' alt='apartments' style={imgStyle} ></img></span>< p style={pStyle}>2 Bathrooms</p></div>
    <div  style={{position:"absolute",width:"110px", height:"88px",left:"340px"}}><span><img  src='Bedroom.svg' alt='apartments' style={imgStyle} ></img></span><p style={pStyle}>3 Bedrooms</p></div>
    <div  style={{position:"absolute",width:"110px",  height:"88px",left:"222px"}}><span><img  src='apartment.svg' alt='apartments' style={imgStyle} ></img></span><p style={pStyle}>Apartments</p></div>
    </div>
  )
}
