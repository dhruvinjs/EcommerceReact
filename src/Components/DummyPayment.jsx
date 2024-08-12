import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import '../Components/Dummy.css';

const DummyPayment=()=>{
 const location=useLocation();
 const navigate=useNavigate();
    useEffect(()=>{
   const time=    setTimeout(()=>{
            navigate('/PaymentSuccess');
        },6000)
    },[])

 return(
    <>

<span>Payment is underway </span>
<h3>Do not reload or go back to the page</h3>
<div><div class="newtons-cradle">
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
<div class="newtons-cradle__dot"></div>
</div>
</div>
    </>
   );
}

export default DummyPayment