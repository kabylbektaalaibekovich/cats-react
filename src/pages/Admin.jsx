import React, { useState } from 'react';
import './Admin.css'

const Admin = () => {
    const [cat , setCat] = useState('')
    const [color , setColor] = useState('')
    const [age , setAge] = useState('')
    const [price , setPrice] = useState('')
     const [date , setDate] = useState([])

    function createData() {
        let obj = {
            cat,
            color,
            age,
            price,
            id:Date.now(),
 
        }
        let storage = JSON.parse(localStorage.getItem('card'))||[]
        storage.push(obj)
        localStorage.setItem('card' ,JSON.stringify(storage))
        setCat('')
        setColor('')
        setAge('')
        setPrice('')
        setDate('')
    }

    
    return (
        <div id="admin">
            <div className="container">
                <div className="admin">
                    <div className="inputs">
                        <input onChange={(e) => setCat(e.target.value)} type="text"  placeholder='Кошка' value={cat}/>
                        <input  onChange={(e) => setColor(e.target.value)}type="text" placeholder='Цвет'  value={color}/>
                        <input onChange={(e) => setAge(e.target.value)} type="text" placeholder='Возраст ' value={age} />
                         <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder='Цена' value={price} />
                         <button onClick={() =>  createData()}>Добавить</button>
                    </div>
    


                          
                </div>
                
            </div>
        </div>
        
    );
};

export default Admin;