import React, { useEffect, useState } from 'react'
import style from "./headr.module.css"
import axios from 'axios'

const Header = () => {
  let [data,setData]=useState({})
  let[des,setDes]=useState({})


  useEffect(()=>{
    axios.get(` http://localhost:3000/instructor`)
    .then((res)=>{
      setData(res.data)
      console.log(res.data);
    })
    .catch(()=>{
      console.log("not gtet the data");
    })
  },[])

  useEffect(()=>{
    axios.get(` http://localhost:3000/course`)
    .then((res)=>{
      setDes(res.data)
      console.log(res.data);
    })
    .catch(()=>{
      console.log("not gtet the data");
    })
  },[])
  return (
    <div>
        <div  className='w-full h-[60vh]'>
          <div className={style.header}>
            <div className='w-full h-full bg-gradient-to-r from-black   text-white'>
              {Object.keys(data).map((key) => (
              <div className=' absolute bottom-52 left-16' key={key}>
                <h1>{data[key].name}</h1>
              </div>
            ))}
            {Object.keys(des).map((key) => (
              <div className=' absolute bottom-20 leading- font-semibold text-4xl w-2/6 left-16' key={key}>
                <h1>{des[key].title}</h1>
              </div>
            ))}
              
            </div>
          </div>
          


        </div>

      
    </div>
  )
}

export default Header
