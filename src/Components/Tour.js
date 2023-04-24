import React from 'react'

export default function Tour() {
    const  tourStyle = 
    {
        position: "absolute",
        width: "260px",
        height: "56px",
        left: "24px",
        top: "104px",
        background: "#2E63F6",
        borderRadius: "8px"
    }
    const divStyle = 
    {
        position: "absolute",
width: "284px",
height: "56px",
left: "3px",


background: "#FFFFFF",
borderRadius: "8px",
    }
    const imgStyle=
    {
        position:"absolute",
        height:"25px",
        top:"14px",
        left:"16px"
    }
    const descStyle = 
    {
        position: "absolute",
        left: "52px",
        top: "13px",
        fontSize: "16px",
        fontWeight:"900",
        lineHeight: "24px",
        color: "#555B67"

    }
  return (
    <div style={tourStyle}>
    <span style={{position:'absolute',color:"white",left:"61px",fontSize:"16px",top:"15px",fontWeight:"600"}}>Create New Tour</span> <span style={{position:"absolute",left:"200px",top:"17px"}}> <img src='plus.svg' alt ="plus" style={{height:"15px"}}></img></span>
    <div style = {{...divStyle,top:"77px"}}>
    <span style={{...descStyle}}>Dashboard</span>
    <div><img src='dash.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"140px"}}>
    <span style={{...descStyle}}>Search Property</span>
    <div><img src='search.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"203px"}}>
    <span style={{...descStyle}}>Calendar</span>
    <div><img src='calendar.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"266px"}}>
    <span style={{...descStyle}}>My Clients</span>
    <div><img src='client.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"329px"}}>
    <span style={{...descStyle}}>MLS Lists</span>
    
    </div>
    <div style = {{...divStyle,top:"392px"}}>
    <span style={{...descStyle}}>Notifications</span>
    <div><img src='notify.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <div style = {{...divStyle,top:"455px"}}>
    <span style={{...descStyle}}>Invite & Earn</span>
    <div><img src='invite.svg' alt='key' style={imgStyle}></img></div>
    </div>
    <span style={{position:"absolute",top:"896px",left:"5px",color:"#0F1C35",fontWeight:"600"}}>Need Help?</span>
    <span style={{position:"absolute",top:"933.25px",left:"5px"}}><img src='help.svg' alt='pic' style={{height:"19.13px"}}></img></span>
    <span style={{position:"absolute",top:"932.25px",left:"36px",color:"#0F1C35",fontWeight:"650"}}>Help Desk</span>
    </div>
  )
}
