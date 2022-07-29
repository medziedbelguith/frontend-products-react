import {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
    const navigate=useNavigate();
    const saveProduct=async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title:title,
            price:price
        });
        navigate("/");
    }
  return (
    <div>
        <form onSubmit={saveProduct}> 
         <div className="field">
             <label className='label'>Title</label>
            <input class="input" value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title"/>
         </div>
         <div className="field">
             <label className='label'>Price</label>
            <input class="input" value={price} onChange={(e)=>setPrice(e.target.value)} type="text"  placeholder="Price"/>
         </div>
         <div className="field">
             <label className='label'>Title</label>
            <button className='button is-primary'>Save</button>
         </div>

        </form>
        {title}-{price}
    </div>
  )
}
