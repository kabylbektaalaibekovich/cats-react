import React from 'react';
import { useEffect ,  useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css'


const Main = () => {
  
 const  [date , setDate] = useState([])
 const [btn , setBtn] = useState(false)


function getOrder(el){
    let data =  JSON.parse(localStorage.getItem('order')) || []
    data.push(el)
    localStorage.setItem('order' , JSON.stringify(data))
}




 function readData(){
     let storage = JSON.parse(localStorage.getItem('card'))||[]
            setDate(storage)
        }
        function delData(id){
            let storage = JSON.parse(localStorage.getItem('card')) || []
           storage.splice(id ,1)
          localStorage.setItem('card' , JSON.stringify(storage))
          readData()
          }
        useEffect(() => {
    readData()
          },[])




    return (
         <div id="main">
            <div className="container">
                <div className="main">
                    <div className="blocks">

                        <div className="block1">
                           
                        {
                             date.map((el ,id)=> (
                            <div className="box">
                                <div className="box-img">
                                <img src={el.cat} alt="" />
                                </div>
                             <div className="box-text">
                               <div className="text-btn">
                               <h2>{el.color}</h2> 
                             <button onClick={() => delData(id)}>Удалить</button>
                                </div> 
                             <span>Возраст: {el.age} </span>
                             <h2>{el.price}</h2>
                             </div>
                             <button onClick={() => {
                                getOrder(el)
                                setBtn(!btn)
                             } } className='btn1'>{ (btn ? <h3>Продан</h3> : <h3>Купить</h3>  )}  </button>

                                </div>   

                             ))
                            }
                            
                        </div>
                        <div className="buttons">
                         
                <Link to={'/button'}> <button>Показать еще</button></Link>

                        </div>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Main;