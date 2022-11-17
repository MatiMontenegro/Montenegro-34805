import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';



  export default function Item(props) {
    const {product} = props ;
    const {id, category, isOffer, photo, title, desc, price, stock} = product;
  return (
<Card sx={{ minWidth: 275, maxWidth: 400, display:'inline-flex', marginLeft:5}}>
<CardContent sx={{alignContent:'center', justifyContent:'center'}}>
  <img className='img-tmb' src={photo}></img>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  {category}
  </Typography>
  <Typography variant="h5" component="div">
  {title}
  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  ARS$ {price}
  </Typography>
  <Typography variant="body2">
  {desc}
    <br />
  En stock: {stock}
  </Typography>
  <Link to={`/ItemDetail/${id}`} element={<ItemDetailContainer/>}>Ver detalle</Link>
  </CardContent>
</Card>
  );
}