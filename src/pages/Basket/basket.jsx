import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';

const Basket = () => {
    const [basket, setBasket] = useState([])


function BaketData(){
    let data =  JSON.parse(localStorage.getItem('order')) || []
    setBasket(data)
}

useEffect(()=> {
    BaketData()
},[])


function delDate(id){
    let data =  JSON.parse(localStorage.getItem('order')) || []
   data.splice(id , 1)
   localStorage.setItem('order' , JSON.stringify(data))
   BaketData()

}

    return (
   <div className="blocks">
     <div className='block1'>
                  {
             basket.map((el ,id)=> (
            <div className="box">
                <div className="box-img">
                <img src={el.cat} alt="" />
                </div>
             <div className="box-text">
               <div className="text-btn">
               <h2>{el.color}</h2> 
               <button onClick={() => delDate(id)}>Удалить</button>
               
                </div> 
             <span>Возраст: {el.age} </span>
             <h2>{el.price}</h2>
             </div>

                </div>   

             ))
            }
    </div>
   </div>
    )
};


export default Basket;
