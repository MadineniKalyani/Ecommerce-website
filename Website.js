import React, { useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Wishlist from "./components/Wishlist";
import Details from "./components/contentPages";
import list from "./data";
import Buy from "./components/BuyNow";
import Favorite from "@mui/icons-material/Favorite";
import Compare from "./components/compare";
import { NavItem } from "react-bootstrap";

const Product = ({
  nextStep,
  prevStep,
  formData,
  item,
  Images ,
  handleInputData,
  price,
}) => {
   const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(list);
  const [wish, setWish] = useState([]);
  const[wishlength,setWishLength] = useState();
  const [disc, setdisc] = useState();
  const [ContentPage, setContentPage] = useState([]);
  const [search, setSearch] = useState("");
  const [snackflag, setSnackflag] = useState(false);
  const[items,setItem] =useState("");
    
    const[newitem,setNewItem] =useState([]);

  const handleContentPage = (item) => {
    if (ContentPage.indexOf(item) !== -1) return;

    setContentPage([...ContentPage, item]);
  };

  const handleFliter = (categoryData) => {
    const result = list.filter((categoryDatalist) => {
      return categoryDatalist.category === categoryData;
    });
    setData(result);
  };
  
 

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setData(list);
    } else {
      const Searching = list.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      if (Searching.length > 0) {
        setData(Searching);
      } else {
        setData("no data");
      }
    }
  };


  const handlerating = (item, newval) => {
    let temp = [...data];
    // const arr  =  ["a ","b","c","d","e","f"]
    // console.log(arr.indexOf("cc"))
    let disp = temp.indexOf(item);
    temp[disp].rating = newval;
    setData(temp);
    console.log(temp)
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackflag(false);
  };

  const handleClick = (item) => {
    let temp = [...cart];
    if (cart.indexOf(item) !== -1) return;
    temp.push(item);
    // let move = [...wish];
    // let ind = wish.indexOf(item);
    // move.splice(ind, 1);
    // setWish(move);
    setContentPage([]);
    // setWish([]);
    setCart([...cart, item]);
   
    
  };

  const handleWish   = (item) => {
    let temp  = [...data];
    let index  = temp.indexOf(item);
    temp[index].fav = !temp[index].fav;
    let filtered  = temp.filter((item)  => item.fav === true);
    console.log(filtered)
    setWish(filtered);
    setWishLength(filtered.length)
    // setWish(temp)
  }

  const handleWishMove = (item) =>{
    handleClick(item);
    let W = [...wish]
    let ind = W.findIndex((it)=> item.id === it.id);
    W[ind].fav=false;
    setWish(W);
    let temp = [...wish];
    let index =temp.indexOf(item);
    temp.splice(index,1)
    setWishLength(temp.length);
    setWish(temp)
  }


  
  // const handleWish = (item) => {
  //   let temp = [...wish];
  //   let index = temp.indexOf(item);
  //   if (wish.indexOf(item) !== -1) {
  //     temp[index].fav = !temp[index].fav;
  //     temp.splice(index, 1);
  //     setWish([temp]);
  //     return;
  //   }
  //   temp[index] = item;
  //   temp[index].fav = !temp[index].fav;
  //   setWish(temp);
  //   setWish([...wish, item]);
  // };
 
  // useEffect(() => {
  //   handleWish(wish);
  // }, []);

  const handleback = () => {
    setContentPage([]);
    setShow(true);
  };
 
  const DataList =()=>{
    
    const itemEvent = (event) => {
        
        setItem(event.target.value);
  
  };
  const listOfItems = () => {
    setNewItem((prevValue) => {
    return [...prevValue, items];
    
  });
  setItem("");
  };
  }

  const handleChange = (item, d) => {
    if (item.Avalible - d >= 0) {
      const ind = cart.indexOf(item);
      console.log(ind);
      let arr = cart;
      let data  = arr[ind].discount;
      let percent = Math.random() * 100;

      let dis = (arr[ind].price * percent ) / 100;

      arr[ind].amount += d;

      arr[ind].Avalible = parseInt(arr[ind].Avalible) - d;

      if (arr[ind].amount === 0) arr[ind].amount = 1;
      
      arr[ind].percent = dis;
      setdisc(percent);

      setCart([...arr]);
    } else {
      // alert("Out of Stock")
      setSnackflag(true);
    }
  };

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar
          show={show}
          setShow={setShow}
          cartsize={cart.length}
          wishSize={wish.length}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Amazon
             
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={handleInputData}
                percent={disc}
                values={formData}
                handleClose={handleClose}
                snackflag={snackflag}
                setSnackflag={setSnackflag}
                handleWish={handleWish}
                handlerating={handlerating}
                handleFliter={handleFliter}
                data={data}
                setData={setData}
                handleSearch={handleSearch}
                handleContentPage={handleContentPage}
                handleClick={handleClick}
                handleChange={handleChange}
                handleWishMove ={ handleWishMove} 
              />
            }
          />
         
          <Route
            path="/BuyNow"
            element={
              <Buy
                price={price}
                setCart={setCart}
                cart={cart}
                handleChange={handleChange}
                item={item}
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={handleInputData}
                values={formData}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                nextStep={nextStep}
                price={price}
                prevStep={prevStep}
                handleFormData={handleInputData}
                values={formData}
                percent={disc}
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
                // handleWishMove ={ handleWishMove} 
              />
            }
          />
          <Route
            path="/Wishlist"
            element={
              <Wishlist
                wish={wish}
                setWish={setWish}
                handleWish={handleWish}
                handleClick={handleClick}
                handleWishMove ={ handleWishMove} 
              />
            }
          />
          <Route
            path="/contentPages"
            element={
              <Details
              Images={Images}
              data={data}
              setData={setData}
              handleSearch={handleSearch}
                handlerating={handlerating}
                handleback={handleback}
                ContentPage={ContentPage}
                setContentPage={setContentPage}
                percent={disc}
                handleChange={handleChange}
                handleContentPage={handleContentPage}
                handleClick={handleClick}
                DataList={DataList}
                // itemEvent={itemEvent}
                // listOfItems={listOfItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Product;
