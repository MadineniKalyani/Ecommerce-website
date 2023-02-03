import React from "react";
import { TableCell, Button, Table, TableRow } from "@mui/material";
import { Link } from "react-router-dom";

const Final = ({ values, setShow, cart }) => {
  const { Name, Payment, PhoneNumber, Email, Address, pinCode } = values;

  return (
    <>
      <h1>Ordered placed</h1>
      <>
        {cart.map((item) => (
          <>
            <TableCell style={{ fontSize: "23px" }}>
              <img
                style={{ width: "100px", height: " 100px" }}
                src={item.img}
                alt=""
              />
              {item.title}
              <TableCell style={{ fontSize: "19px" }}>
           
                Price: {item.price}
                <br></br>
              </TableCell>
            </TableCell>
          </>
        ))}
      </>
      <Table>
        <TableRow>
          <TableCell>
            <strong>Name :</strong>
          </TableCell>
          <TableCell>{Name} </TableCell>
        </TableRow>

        <TableRow>
          
          <TableCell>
            <strong>PhoneNumber :</strong>
          </TableCell>
          <TableCell>{PhoneNumber} </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <strong>Email :</strong>
          </TableCell>
          <TableCell>{Email} </TableCell>
        </TableRow>
        <TableRow>
         
          <TableCell>
           
            <strong>Address :</strong>
          </TableCell>
          <TableCell>{Address} </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
          
            <strong>pinCode :</strong>
          </TableCell>
          <TableCell>{pinCode} </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <strong>Payment :</strong>
          </TableCell>
          <TableCell>{Payment} </TableCell>
        </TableRow>
      </Table>

      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "0%" }}
          onClick={() => setShow(true)}
        >
          Back to cart
        </Button>
      </Link>
    </>
  );
};

export default Final;
