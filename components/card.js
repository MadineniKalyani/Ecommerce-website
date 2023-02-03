import React from "react";
 import "../styles/card.css";
import { Button, TableCell, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import Card from "@mui/joy/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import Rating from "@mui/material/Rating";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import Carousel from "react-material-ui-carousel";

const Cards = ({
  setShow,
  item,
  data,
  handleClick,
  handleContentPage,
  handlerating,
  snackflag,
  handleChange,
  handleWish,
  handleClose,
  handleRemove,
  handleWishMove,
}) => {
  const { Avalible, title, price, img, img1, img2, fav } = item;

  return (
    <>
      <TableCell className="product-list">
        <Snackbar
          open={snackflag && item.Avalible < 1}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            {item.title} Out of Stock
          </Alert>
        </Snackbar>

        <TableCell style={{ display: "grid", fontSize: "30px" }}>
          {/* <TableCell></TableCell> */}

          <Card
           className ="card-products"
            variant="outlined"
            sx={(theme) => ({
              width: 390,
              height: "250px",
              flexDirection: "row",
              flexWrap: "wrap",
              resize: "horizontal",
              overflow: "hidden",
              transition: "transform 0.3s, border 0.3s",
              "&:hover": {
                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                transform: "translateY(-2px)",
              },
              "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
            })}
          >
            <Box>
              <Box>
                <IconButton
                  size="sm"
                  variant="plain"
                  color="neutral"
                  sx={{ ml: "auto", alignSelf: "flex-start" }}
                >
                  <p style={{ fontSize: "18px" }}> Avaliable:{Avalible}</p>
                  {
                    <Button onClick={() => handleWish(item)}>
                      {fav === false ? (
                        <FavoriteBorderIcon
                          style={{ color: "danger", maxRight: "100%" }}
                        />
                      ) : (
                        <FavoriteIcon
                          style={{ color: "red", maxRight: "100%" }}
                        />
                      )}
                    </Button>
                  }
                </IconButton>
              </Box>
              <p style={{ fontSize: "30px" }}> {title} </p>
              <h4>Rating</h4>
              <Box style={{ display: "flex" }}>
                <Rating
                  value={item.rating}
                  onChange={(event, newvalue) => {
                    handlerating(item, newvalue);
                    console.log(newvalue);
                  }}
                />
              </Box>
            </Box>

            <AspectRatio
              variant="soft"
              sx={{
                flexGrow: 1,
                display: "contents",
                "--AspectRatio-paddingBottom":
                  "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
              }}
            >
              
              <Carousel style={{ width: "200px", height: "200px" }}> 
              <img src={img} alt=""  style={{ width: "230px", height: "200px" }} />
              <img src={img1} alt="" style={{  width: "230px", height: "200px" }}/>
              <img src={img2} alt="" style={{  width: "230px", height: "200px" }} /></Carousel>
            </AspectRatio>
          </Card>
        </TableCell>

        <Link to="contentPages">
          <ChevronRightTwoToneIcon onClick={() => handleContentPage(item)} />{" "}
          <div onClick={() => setShow(false)} />
        </Link>

        <div style={{ fontSize: "15px" }}>
          Qty:
          <Button
            style={{ padding: "0px" }}
            onClick={() => handleChange(item, -1)}
          >
            -
          </Button>
          <span>{item.amount}</span>
          <Button
            style={{ padding: "0px" }}
            onClick={() => handleChange(item, 1)}
          >
            +
          </Button>
        </div>

        <div style={{ padding: "2px", fontSize: "15px" }}>
          Price - {price}Rs
          <LocalOfferSharpIcon />
        </div>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick(item)}
        >
          Add to Cart
        </Button>
      </TableCell>
    </>
  );
};

export default Cards;
