import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TableCell, TableRow, Button } from "@mui/material";
import "../styles/card.css";
const Cart = ({
  cart,
  percent,
  setCart,
  handleChange,
  handleFormData,
  item,
}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price - item.discount));
    setPrice(Math.round(ans));
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="cart-product">
      <h2>Cart Products</h2>
      {cart.map((item) => (
        <TableRow key={item.id} className="cart-row">
          <TableCell>
            <img
            className="cart-img"
              src={item.img}
              alt=""
              // style={{ width: "100px", height: " 100px" }}
            />
          </TableCell>
          <TableCell className="cart-title" ><h3>{item.title}</h3></TableCell>
          {/* <TableCell className="cart-avaliable">Avalible: {item.Avalible}</TableCell> */}
          <TableCell>
            <Button  className="cart-d-button"
              variant="contained"
              color="primary"
              onClick={() => handleChange(item, -1)}
            >
              -
            </Button>
            <Button className="cart-ammount">{item.amount}</Button>
            <Button  className="cart-i-button"
              variant="contained"
              color="primary"
              onClick={() => handleChange(item, 1)}
            >
              +
            </Button>
          </TableCell>
          <TableCell className="cart-discount"> Discount - {Math.round(percent)}% </TableCell>
          <TableCell>
            <p className="cart-price">
              Price:{item.price} &nbsp;&nbsp;&nbsp;
              <Button
              className="cart-delete"
                variant="contained"
                color="error"
                onClick={() => handleRemove(item.id)}
              >
                delete
              </Button>
              </p>
          </TableCell>
        </TableRow >
      ))}
      <br></br>
      <TableCell >
        <h2>Total Price </h2>
        <TableCell style={{ fontSize: "30px" }}>Rs - {price}</TableCell>
        <Link to="/BuyNow">
          <Button variant="contained" color="primary" onClick={handleFormData}>
            Buy now
          </Button>
        </Link>
      </TableCell>
    </div>
  );
};

export default Cart;
