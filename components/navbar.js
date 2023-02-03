import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../styles/card.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = ({ setShow, cartsize, wishSize }) => {
  return (
    <nav className="productnavbar-list"
      style={{ width: "100%", fontSize: "23PX", backgroundColor: "#e699ff" }}
    >
      <TableRow>
       
        <Link to="/">
          <TableCell
            style={{
              width: "100%",
              backgroundColor: "#e699ff",
              fontSize: "30px",
              
              marginRight: "75%",
            }}
            onClick={() => setShow(true)}
          >
            MyShoping
          </TableCell>
        </Link>
        <span>
        <Link to="cart" className="cart-icon">
          
            <StyledBadge badgeContent={cartsize} color="secondary">
              
              <ShoppingCartIcon
               
                onClick={() => setShow(false)}
              />
            </StyledBadge>
          
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="Wishlist">
          <StyledBadge badgeContent={wishSize} color="secondary">
            
            <FavoriteBorderIcon
              color="#660066"
              onClick={() => setShow(false)}
            />
          </StyledBadge>
        </Link>
        </span>
      </TableRow>
    </nav>
  );
};

export default Navbar;
