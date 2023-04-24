import React from 'react'

export default function  Group7367c(props) {
  const myStyle={
    position: "relative",
    width: "874px",
    height: "33px",
    left: "-1px",
    display:"flex",
    justifyContent:"space-between",
    marginBottom:"10px",
    borderBottom:"1px solid  #555B6726",
 
  

   
    
  }
  const myStyledesc =
  {
  
    color:" #555B67"
    ,fontWeight:"600"
  
  }
  const myStyleamount =
  {
    
    color:" #0F1C35"
    ,fontWeight:"650"
  }
  return (
<>
    <div style={myStyle}>
  <span style={myStyledesc}>{props.content.desc}</span>
  <span style={myStyleamount}><b>{props.content.amount}</b></span>
    </div>
   
    </>

  )
}
