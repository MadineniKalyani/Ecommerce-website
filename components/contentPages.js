import React ,{useState}from "react";
import Cards from "./card";
import { TableCell, Button, TextField, Box } from "@mui/material";
import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import Carousel from "react-material-ui-carousel";
import FormLabel from "@mui/joy/FormLabel";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";
import Compare from "./compare";



// const Item = styled(Paper)(({ theme }) => ({
 

//   textAlign: 'right',
//   color: theme.palette.text.secondary,
// }));


const Details = ({
  Images,
  handleback,
  ContentPage,
  percent,
  handlerating,
  handleContentPage,
  handleFliter,
  item,
  search,
  data,
  setData,
  handleSearch,
  handleClick,
  handleWishMove,setShow
}) => {
  
  const [comment, setComment] = useState("")
  
    const [todoList, setTodoList] = useState([])
  
    const addItem = e => {
      e.preventDefault()
      const UserInput = comment.trim()
      if (UserInput) {
        setTodoList(existingItems => [
          ...existingItems,
          { name: UserInput, finished: false },
        ])
        setComment("")
      }}
 
           
  return (
    <>
      <h2>Item Details </h2>
      {ContentPage.map((item) => (
        
        <span key={item.id}>
          {/* <Grid item xs={2} sm={4} md={4}  key={item.id}> */}
          {/* style={{ width: "150px", height: "150px" }} */}
          
          <Link to="/">
            <Button
            className="info-backicon"
              startIcon={<ReplyOutlinedIcon />}
              onClick={handleback}
              // style={{ width: "10px", height: "50px" }}
            />
          </Link>
          {/* <Grid> */}
          {/* <Item> */}
          <TextField
          // className="info-search"
            // style={{ width: "250px", marginLeft: "70%" }}
            label="Compare the Product..."
            type="text"
            value={search}
            onChange={(event) => handleSearch(event)}
          />
          {/* </Item> */}
          
          {/* </Grid> */}
          <Carousel>
            <img
              style={{ width: "350px", height: "250px" }}
              src={item.img}
              alt=""
            />
            <img
              style={{ width: "350px", height: "250px" }}
              src={item.img1}
              alt=""
            />
            <img
              style={{ width: "350px", height: "250px" }}
              src={item.img2}
              alt=""
            />
          </Carousel>

          <TableCell style={{ fontSize: "24px" }}>
            <h2>{item.title}</h2>
            <TableCell style={{ fontSize: "19px" }}>
              {" "}
              Price: {item.price}
              <LocalOfferSharpIcon />
              <br></br>
              <span
                style={{
                  fontSize: "18px",
                  color: "red",
                  backgroundColor: "yellow",
                }}
              >
                Discount - {Math.round(percent)}%{" "}
              </span>
              <br></br>
              <h4>Rating</h4>
              <><Rating
                value={item.rating}
                onChange={(event,newvalue) => {
                  handlerating(item, newvalue);
                  console.log(newvalue)
                }}
              /></>
              
              <FormLabel
                sx={{
                  mb: 1.5,
                  fontWeight: "xl",
                  textTransform: "uppercase",
                  fontSize: "xs",
                  letterSpacing: "0.15rem",
                }}
              ></FormLabel>
              <h4>Color</h4>
              <RadioGroup
                defaultValue="warning"
                sx={{ gap: 2, flexWrap: "wrap", flexDirection: "row" }}
              >
                {[
                  "#DDA0DD",
                  "#9370DB",
                  "#708090",
                  "skyblue",
                  "#2F4F4F",
                  "black",
                ].map((color) => (
                  <Sheet
                    key={color}
                    sx={{
                      position: "relative",
                      width: 30,
                      height: 30,
                      flexShrink: 0,
                      bgcolor: color,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Radio
                   
                      variant="solid"
                      color={color}
                      checkedIcon={<Done fontSize="xl2" />}
                      value={color}
                      componentsProps={{
                        input: { "aria-label": color },
                        
                      }}
                    />
                  </Sheet>
                ))}
              </RadioGroup>
            </TableCell>
            {item.content}
          </TableCell>
          <TableCell>
            {" "}
            
            &nbsp; &nbsp;
            <Button
              variant="contained"
              color="secondary"
              onClick={() =>handleClick(item)}
            >
              move to cart
            </Button><br></br><br></br><br></br>
            
       <form onSubmit={addItem}>
            {/* <p fill={true} vertical={false}> */}
              <TextField
                placeholder="Add a Comment..."
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
              <Button type="submit" intent="primary">
                Add
              </Button>
            {/* </p> */}
          </form>
          <div className="items-list">
            {todoList.map((item, index) => (
              <p key={index + item.name} >
                <span>{item.name}</span>
              </p>
            ))}
          </div>

           
          </TableCell>
          {/* <Button  variant="contained"
              color="secondary"
              >Compare */}
          <Box style={{ display: "grid", gridTemplateColumns: "auto auto   " }}>
          <Compare
         
            handlerating={handlerating}
            key={item.id}
            item={item}
            handleFliter={handleFliter}
            data={data}
            setData={setData}
            // handleChange={handleChange}
            handleClick={handleClick}
        
          
            handleContentPage={handleContentPage}
          />
          </Box>
          {/* </Button> */}
        </span>
      ))}
    </>
  );
};

export default Details;
