import React from 'react'

export default function Pictures () {
    const Style =
    {
        position:"absolute",
        width:"1548px",
        top:"104px",
        
        height:"320px", 
        left:"348px"
    }
   


  return (
    <div style={Style}>
   
    <div style={{position:"absolute",width:"478px", background:"url('pic1.jpeg')",backgroundSize:"100% 100%",  height:"320px",left:"0px",borderRadius:"8px    "}}></div>
    <div style={{position:"absolute", width:"568px", background:"url('pic2.jpeg')",backgroundSize:"100% 100%" ,  height:"320px",left:"481px",borderRadius:"8px   "}}></div>
    <div style= {{position:"absolute",width:"478px", background:"url('pic3.jpeg')",backgroundSize:"100% 100%" ,  height:"320px",left:"1056px  ",borderRadius:"8px "}}></div>
    </div>
  )
}
