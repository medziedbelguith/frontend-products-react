import {useState,useEffect} from 'react';
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';

export default function EditProduct() {
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        getProductById();
    },[])
    const updateProduct=async(e)=>{
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            title:title,
            price:price
        });
        navigate("/");
    }
    const getProductById=async()=>{
        const response=await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);

    }
  return (
    <div>
        <form onSubmit={updateProduct}> 
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
            <button className='button is-primary'>Update</button>
         </div>

        </form>
        {title}-{price}
    </div>
  )
}