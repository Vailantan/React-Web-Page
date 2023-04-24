import React from 'react'
import Group7367c from './Group7367c'

export default function Group7367() {
  const contents = [
    {
      id:1,
      desc:"Tax",
      amount:"$1,340 / 2022"
    },
    {
      id:2,
      desc:"Type",
      amount:"Single-Family"
    },
    {
      id:3,
      desc:"Building Age",
      amount:"5 Year"
    },
    {
      id:4,
      desc:"Size",
      amount:"1500-2000 feet2"
    },
    {
      id:5,
      desc:"Parking",
      amount:"Garage,6 Parking"
    },
    {
      id:6,
      desc:"Basement",
      amount:"Unfinished"
    },
    {
      id:7,
      desc:"MLS#",
      amount:"E5579076"
    },
    {
      id:8,
      desc:"Possesion",
      amount:"5 Day"
    },
  ]
    const myStyle = {
        position: "absolute",
width: "874px",
height: "480px",
left: "682px",
top:"750px"

    }
    const pStyle = 
    {
  position: "absolute",
  width: "874px",
  top:"645px",
  left: "682px",


fontSize: "16px",
lineHeight: "32px",
/* or 200% */



/* sub */

color: "#555B67"
    }
    const divStyle =
    {
      position: "relative",
      width: "874px",
      top:"581px",
      left: "682px",
      display:"flex",
      justifyContent:"space-around"
      ,fontWeight:"600",
      color:"#555B67"
   
   
    }
    const LineStyle =
    {
      
position: "absolute",
width: "922px",
height: "1px",
left: "666px",
top: "632px",

/* sub-stroke-%15 */

background:" rgba(85, 91, 103, 0.15)",
borderRadius: "8px",
    }
    const innerLineStyle=
    {
            
position: "absolute",
width: "305px",
height: "4px",




/* primary */

background: "#2E63F6",
borderRadius: "8px",
    }
  return (
    <div >
    <div style={divStyle}>
    <span  style={{color:"#0F1C35"}}>Key Facts</span>
    <span >Details</span>
    <span>Rooms</span>
    </div>
    <div style={LineStyle}>
    <div style={innerLineStyle}></div></div>
    <div style={pStyle}>
    <p  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eaque architecto ipsam consequuntur ratione commodi doloribus quibusdam vel reiciendis quam ab soluta ea animi, velit officiis, rerum vero omnis aperiam.</p>
    </div>
    <div style={myStyle}>

    {
      contents.map((content)=>
      {
        return( <Group7367c content = {content} key={content.id}/>)
      })
    }
   
    <div style={{marginTop:"25px",color:"#0F1C35",
    fontSize: "18px",fontWeight:"600"}}>Description</div>
    <p style={{position:"absolute",top:"385px",color:"#555B67",
    fontSize: "18px" ,fontWeight:"500"}} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eaque architecto ipsam consequuntur ratione commodi doloribus quibusdam vel <span style={{color:"blue"}}>read more..</span></p>
    </div>
   
    </div>
  )
}
