import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Stack, Typography, Card, CardContent, Button } from '@mui/material';

const Cart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cart,setCart] = useState(location.state?.cart || [])
    console.log(cart)
    const [total, setTotal] = useState(0);
    const[bill,setBill]=useState(0)
    var newCart=[];

    const goCheckout=()=>{
        navigate('/Checkout' ,{ state : {bill} })
    }

    useEffect(() => {
        // Calculate total price when cart changes
        const calcTotal = cart.reduce((sum, product) => sum + (product.price * product.quantity || 0), 0);
        setTotal(calcTotal);
        setBill(calcTotal)
    }, [cart]);

    const removeItems = (itemId) => {
      setCart((prevCart)=>{
        let itemIndex=prevCart.findIndex(item=>item.id===itemId)
        if(itemIndex===-1) return prevCart;
             newCart=[...prevCart];

            if(newCart[itemIndex].quantity>1){
                newCart[itemIndex].quantity-=1;
            }
        else{
            newCart.splice(itemIndex,1);//removing the item if quantity is 0
        }
        
        return newCart;
    })
    };

    return (
        <div>
            <Typography variant="h4" component="div" sx={{ mb: 2 }}>
                Your Cart
            </Typography>
            <Stack spacing={2}>
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
            </Stack>
            <Typography variant="h6" sx={{ mt: 3 }}>
                Total Price: {total} Rs.
            </Typography>
            <Button color="inherit" onClick={goCheckout}>CheckOut</Button>
        </div>
    );
};

export default Cart;
