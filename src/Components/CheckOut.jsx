import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";


const Checkout=()=>{
    const [data, setData] = useState("");
    const [formData,setFormData]=useState(
        {
            name:"",
            email:"",
            address:"",
            city:"",
            state:"",
            paymentType:""
        }
    )
    const location = useLocation();
    const navigate=useNavigate();
    const bill=location.state?.bill||0;
    const handleInput=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefualt();
        console.log(formData);  
        handleCheckOut(formData.name,formData.email,formData.address,formData.city,formData.state,formData.paymentType)
    }
    const goToUpi=()=>{
        navigate('/Upi' ,{state:{ bill }})
    }

    return(
        <div>
        <div className="container">
          <form className='form-container' onSubmit={handleSubmit}>
            <p className="title">Registration Form</p>
            <p className="bill">Total Amt:{bill}</p>
            <br />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleInput}
              required
              className='name input'
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleInput}
              required
              className='email input'
            />
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={data.country}
              onChange={handleInput}
              required
              className='country input'
            />
            <input
              type="text"
              placeholder="Country"
              name="country"
              value={data.country}
              onChange={handleInput}
              required
              className='country input'
            />
            <input
              type="text"
              placeholder="State"
              name="state"
              value={data.username}
              onChange={handleInput}
              required
              className='state input'
            />
             <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="CASH" control={<Radio />} label="CASH" required/>
    <FormControlLabel value="UPI" control={<Radio />} label="UPI" required/>
  </RadioGroup>
  <Button onClick={goToUpi} sx={{
                            width: '100%',
                            background: 'green',
                            color: 'white',
                            alignSelf: 'stretch',
                            mt: 'auto',
                            ":hover": { background: 'brown' }
                          }}>Go for Payment </Button>
          </form>
        </div>
      </div>
    );
  
 

}
export default Checkout;