import React from "react";
import list from "../data";
import Cards from "./card";
import Carousel from "react-material-ui-carousel";
// import {
//   Magnifier

// } from "@react-image-magnifiers";

import { TableCell, TextField, Box, MenuItem, Select } from "@mui/material";

const Amazon = ({
  data,
  handleClick,
  nextStep,
  prevStep,
  formData,
  handleInputData,
  handleWish,
  disc,
  handleChange,
  handlerating,
  wishFlag,
  setData,
  handleClose,
  snackflag,
  handleFliter,
  search,
  handleSearch,
  handleContentPage,
  item,
  Images,
  handleWishMove,
}) => {
  return (
    <div className="product-amazon">
      <TableCell >
        <TextField className="Search-bar"
          
          label="SearchProduct..."
          type="text"
          value={search}
          onChange={(event) => handleSearch(event)}
        />
        &nbsp;&nbsp;
       
        <span  className ="filter-Amazon">
          
          ProductCategory
          <Select>
            <MenuItem onClick={() => setData(list)}>All</MenuItem>
            <MenuItem onClick={() => handleFliter("jewellery")}>
              jewellery
            </MenuItem>
            <MenuItem onClick={() => handleFliter("Bags")}>Bags</MenuItem>
            <MenuItem onClick={() => handleFliter("Mobiles")}>Mobiles</MenuItem>
            <MenuItem onClick={() => handleFliter("Shoes")}>Shoes</MenuItem>
            <MenuItem onClick={() => handleFliter("Laptops")}>Laptops</MenuItem>
            <MenuItem onClick={() => handleFliter("watches")}>watches</MenuItem>
          </Select>
        </span>
      </TableCell>
      <div style={{ backgroundColor: "#f0f0f0" }}>
        {/* <Magnifier/>  */}
        <Carousel>
          <img
            style={{ width: "100%", height: " 500px" }}
            src="https://th.bing.com/th/id/OIP.hLA3giVmrwZYoeXi9xSCYgHaEK?pid=ImgDet&w=1280&h=720&rs=1"
            alt=""
          />
          <img
            style={{ width: "100%", height: " 500px" }}
            src="https://smedia2.intoday.in/btmt/images/stories/amazon-great-indian-sale_660_011518103119.jpg"
            alt=""
          />
          <img
            style={{ width: "100%", height: " 500px" }}
            src="https://www.goodtoseo.com/wp-content/uploads/2017/12/Amazon-Alexa.jpg"
            alt=""
          />
        </Carousel>
        ;
      </div>

      <Box style={{ display: "grid", gridTemplateColumns: "auto auto    " }}>
        {data.map((item) => (
          <Cards
            Images={Images}
            nextStep={nextStep}
            prevStep={prevStep}
            handlerating={handlerating}
            handleFormData={handleInputData}
            percent={disc}
            values={formData}
            key={item.id}
            item={item}
            handleClose={handleClose}
            snackflag={snackflag}
            handleFliter={handleFliter}
            data={data}
            setData={setData}
            handleChange={handleChange}
            handleClick={handleClick}
            handleWish={handleWish}
            wishFlag={wishFlag}
            handleContentPage={handleContentPage}
            handleWishMove={handleWishMove}
          />
        ))}
      </Box>
    </div>
  );
};

export default Amazon;
