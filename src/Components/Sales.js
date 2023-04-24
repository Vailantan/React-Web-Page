import React from 'react'

export default function Sales() {
    const myStyle = 
    {
position: "absolute",
width: "286px",
height: "564px",
left: "340px",
top: "468px",

/* white */

background: "#FFFFFF",
borderRadius: "8px"
    }
    const salesStyle = 
    {
        
position: "absolute",
width: "152px",
height: "39.17px",
left: "16px",
top: "15.67px",

/* green */

background: "#5EB182",
opacity: "0.15",
borderRadius: "8px"
    }
    const addStyle = 
    {
        position: "absolute",
        width: "78px",
height: "39.17px",
right: "16px",
top: "15.67px",
borderRadius: "8px",
background: "#2E63F6",
color:"white",
fontSize:"14px"
    }
    const agenStyle = 
    {
        position: "absolute",
width: "254px",
height: "94px",
left: "16px",
top: "454.33px",

/* background */

background: "#F5F6FA",
borderRadius: "8px",
    }
    const divStyle = 
    {
        boxSizing: "border-box",

position: "absolute",
width: "254px",
height: "54.83px",
left: "16px",
background:"#FFFFFF",
border:"1px solid rgba(85, 91, 103, 0.15)",
borderRadius: "8px"
    }
    const descStyle = 
    {
        position: "absolute",
        left: "52px",
        top: "13px",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#555B67",
        fontWeight:"600"

    }
    const imgStyle=
    {
        position:"absolute",
        height:"25px",
        top:"14px",
        left:"16px"
    }
  return (
    <div style={myStyle}>
    <div>
    <div style={salesStyle}></div><span style={{position:"absolute",left:"61px",top:"25px",color:"#5EB182",fontSize:"14px",fontWeight:"900"}}>For Sale</span>
    <div style={addStyle}><span style={{position:"absolute",left:"14px",top:"10px",fontSize:"14px",fontWeight:"400"}}>Add List</span></div>
    </div>
    
    <div style={{position:"absolute",top:"71px",left: "17px",color: "#0F1C35",fontSize:"18px",fontWeight:"1000"}}>MLS#:E5579076</div>
    <div style={{position:"absolute",top:"104px",left: "17px",color: "#555B67",fontSize:"16px",fontWeight:"600"}}>Listed for: <span style={{color:"blue"}}>$1,549,586</span></div>
    <p style={{position:"absolute",top:"122px",left: "17px",color: "#0F1C35",fontSize:"16px",fontWeight:"600"}}>2118 Thornridge Cir.Syracuse Connecticut 35624</p>
    
    <div style={agenStyle}>
    <div style={{position:"absolute",left:"16px",top:"15.67px",color:"#555B67",fontSize:"12px",width:"80px",fontWeight:"600"}}>Listing Agent</div>
  <div style={{position:"absolute",left:"16px",top:"39.17px",color:" #0F1C35",fontSize:"14px",width:"119px",fontWeight:"800"}}>Courtney Henry</div>
  <div style={{position:"absolute",right:"16px",height:"23.5px",width:"24px",top:"47px"}}><img src='messBox.svg' alt='messbox' style={{height:"16.65px",width:"20px"}} ></img> </div>
  <div style={{position:"absolute",left:"8px",height:"20px",width:"20px",top:"52.67px"}}><img src='contact.svg' alt='contact' style={{width:"34px"}}></img></div>
  <div style={{position:"absolute",left:"40px",top:"62.67px",color:"#555B67",fontSize:"12px",width:"110px",fontWeight:"600"}}>+90 552 489 8277</div>
    </div>
    <div style = {{...divStyle,top:"195.83px"}}>
    <span style={{...descStyle}}>View on Map</span>
    <div><img src='map.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"258.49px"}}>
    <span style={{...descStyle}}>Get Directions</span>
    <div><img src='direction.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"321.15px"}}>
    <span style={{...descStyle}}>Share</span>
    <div><img src='share.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"383.81px"}}>
    <span style={{...descStyle}}>My Notes</span>
    <div><img src='notes.svg' alt='key' style={imgStyle}></img></div>
    </div>
    </div>
  )
}
