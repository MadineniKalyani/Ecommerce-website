import React from "react";

import Cards from "./card";


import {  Box} from "@mui/material";

const Compare = ({
  data,
  setData,
  handleContentPage,
  handlerating,handleFliter,handleChange,handleClick
}) => {
  return (
    <div>
      
      <Box style={{ display: "grid", gridTemplateColumns: "auto auto  " }}>
        {data.map((item)   => (
          <Cards
          handlerating={handlerating}
          key={item.id}
          item={item}
          handleFliter={handleFliter}
          data={data}
          setData={setData}
          handleChange={handleChange}
          handleClick={handleClick}
      //  handleContentPage={handleContentPage}
          />
        ))}
      </Box>
    </div>
  );
};

export default Compare;
