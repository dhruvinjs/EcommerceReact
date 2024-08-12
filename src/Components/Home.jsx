import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Typography, Card, CardContent, Stack, Toolbar, IconButton, AppBar, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const[addTitles,setTitles]=useState([])
  const location=useLocation();
  const handleCart = () => {
    navigate('/Cart', { state: { cart } });
  };

  const getProducts = async () => {
    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products');
      setProducts(res.data);
      console.log(res.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

    function addToCart(product) {

      return (event) => {
        event.preventDefault();
        setCart((prevCart) => {
          console.log(...prevCart)
          const existingItem = prevCart.find((item) => item.title === product.title);//return true if same id is there

          if (existingItem) {//if true
            return prevCart.map((item) =>
              item.title === product.title
                ? { ...item, quantity: existingItem.quantity + 1 }
                // console.log(...cart)
                
                : item
            );
          } else {
            // console.log('Adding new item to cart:', product);
            return [...prevCart, { ...product, quantity: product.quantity || 1 }];
          }
        });
      };
    };

useEffect(()=>{
  console.log(...cart)
},[])

  return (
   
        <>
          <AppBar position="static" sx={{ width: '1280px', marginRight: '10%' }}>
            <Toolbar>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                Food Products
              </Typography>
              <Button color="inherit" endIcon={<ShoppingCartIcon />} onClick={handleCart}>Cart</Button>
              <Button color="inherit" onClick={handleCart}>CheckOut</Button>
            </Toolbar>
          </AppBar>
    
          {products.length > 0 ? (
            <Stack direction="row" spacing={2} overflow='auto' justifyContent="center" flexWrap="wrap">
              {products
                // .filter(product => productTitles.includes(product.title))
                .map((product) => {
                //   setTitles(product.title); // Add title to the array after filtering
                  return (
                    <Card
                      key={product.id}
                      style={{
                        width: '300px',
                        height: '175%',
                        marginBottom: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flexGrow: 1,
                        mt: 1,
                        mb: 2,
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {product.title}
                        </Typography>
                        <Typography sx={{ fontSize: 17 }} color="text.secondary">
                          {product.description}
                        </Typography>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="text.secondary">
                          {product.price} Rs.
                        </Typography>
                        <Button
                         onClick={(event) => addToCart({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            quantity: 1
                          })(event)}
                          sx={{
                            width: '100%',
                            background: 'green',
                            color: 'white',
                            alignSelf: 'stretch',
                            mt: 'auto',
                            ":hover": { background: 'brown' }
                          }}
                        >
                          Add to cart
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </Stack>
          ) : (
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              Loading...
            </Typography>
          )}
        </>
      );
    };
    
    export { HomePage };