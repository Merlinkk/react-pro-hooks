import React from 'react'
import { useEffect } from 'react'

function ComponentA() {

    function delay(){
        for(let i=0; i<5; i++){
            console.log(i)
        }
    }
    
    useEffect(()=>{
        console.log("Hello")
    })

    function handleCare(){
        console.log("Hi")
    }

  return (
    <div>
    <button onClick={()=>handleCare()}>Button
    </button>
        {delay()}

    </div>
  )
}

export default ComponentA