import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import React from "react";
import { Typography } from "@mui/material";

const PaymentSuccess=()=>{
    const navigate=useNavigate();
    const location=useLocation();
    const bill=location.state?.bill;
    const [cart,setCart] = useState(location.state?.cart || [])
    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.clear('accessToken');
        localStorage.clear('refreshToken');
        navigate('/SignIN')
    }


    return(
        <>
        <Typography component="h1" variant="h5">
            Payment Successfull and order is placed
        </Typography>
                {cart.length > 0 ? (
                        cart.map((item) => (
                            <Card key={item.id} style={{ padding: '16px' }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 17 }} color="text.secondary">
                                        Price: {item.price} Rs.
                                    </Typography>
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary">
                                        Quantity: {item.quantity}
                                    </Typography>
                                    <Button onClick={() => removeItems(item.id)} sx={{ mt: 2 }}>
                                        Remove from Cart
                                    </Button>
                                </CardContent>
                            </Card>
     ))
    ) : (
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Your cart is empty.
        </Typography>
    )}
        <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button  sx={{
                            width: '100%',
                            background: 'green',
                            color: 'white',
                            alignSelf: 'stretch',
                            mt: 'auto',
                            ":hover": { background: 'peach' }
                        }}
                        onClick={handleLogout}
                        >Logout</Button>
        <Button  sx={{   width: '100%',
                            background: 'green',
                            color: 'white',
                            alignSelf: 'stretch',
                            mt: 'auto',
                            ":hover": { background: 'wheat' }}}
                            onClick={()=>{
                                navigate('/Products');
                            }}
                            
                            >Home</Button>
  
      </ButtonGroup>
      </>

    )
}
export default PaymentSuccess;