import React, { useEffect } from 'react'


function Characters() {

  useEffect(()=>{
    fetch('https://api.potterdb.com/v1/characters?filter[name_cont_any]=Harry')
    .then((res)=> res.json())
    .then((data)=>console.log(data))
  },[])

  return (
    <>
    <div>Characters</div>
    </>
  )
}

export default Characters