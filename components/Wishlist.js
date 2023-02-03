import React from "react";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";

import { TableCell, TableRow, Button } from "@mui/material";

const Wishlist = ({ wish, setWish, handleClick ,data,handleWishMove}) => {

  const handleRemove = (id,fav,item) => {
    const arr = wish.filter((item) => item.id !== id);
    
    setWish(arr);
    
  };
  

  return (
    <>
      <h2>Wishlist</h2>

      {wish.map((item) => (
        <TableRow key={item.id}>
          <TableCell>
            <img
              src={item.img}
              alt=""
              style={{ width: "100px", height: " 100px" }}
            />
          </TableCell>
          <TableCell style={{ fontSize: "23px" }}>
            {item.title}
            <TableCell style={{ fontSize: "19px" }}>
              
              Price: {item.price}
              <LocalOfferSharpIcon />
            </TableCell>
          </TableCell>

          <TableCell>
            
            <Button
            className="wish-delete"
              variant="contained"
              color="error"
              onClick={() => handleRemove(item.id)}
            >
              delete
            </Button>
            <br></br><br></br>
            
            <Button
            className="wish-move"
              variant="contained"
              color="secondary"
              onClick={() =>handleWishMove(item)}
            >
              move to cart
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default Wishlist;
