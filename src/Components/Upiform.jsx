import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material/";

const Upiform=()=>{
    const navigate=useNavigate();   
    const location=useLocation();
    const [bill,setBill]=useState(location.state?.bill|| 0);
    const handleInput=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const [data,setData]=useState({
            amount:bill,
            upiId:"",
    
    })

    const handleSubmit=(e)=>{
        e.preventDefault();

    }
    return (

        <>
        <div className="form-container">
        <form  onSubmit={handleSubmit}>
        <p className="title">Enter the Amount</p>
                      <input
                    type="email"
                    placeholder="Enter Valid UPI ID"
                    name="upiId"
                    value={data.upiId}
                    onChange={handleInput}
                    required
                     className='upiId input'
                />
                <br></br>
                <br></br>
             <Button
             sx={{background:'green',color:'white',  ":hover": { background: 'brown' }}}
             onClick={()=>navigate('/Dummy')}
            >
           Make Payment
            </Button>
            </form>
        </div>
        
        
        
        </>
    )
}
export {Upiform}