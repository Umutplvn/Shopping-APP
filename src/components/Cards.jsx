import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { TextContext } from "../context/TextContext";
import { toastErrorNotify} from "../helper/Toast"


const Cards = () => {
  const {add, setAdd, list, setList, filteredProduct, basket} = useContext(TextContext);

  const handleAdd = (e) => {
    setAdd(add+1)
    let purchased = [];
    if(list.includes(e.target.id)){
      toastErrorNotify("You have already added this item to your basket!")
      setAdd(add)
    }else{
    purchased.push(e.target.id);
    setList([].concat(purchased, list))}
  };


  return (
    <Box
      sx={{ margin: "1rem" }}
      display={"flex"}
      flexWrap={"wrap"}
      gap={"2rem"}
      justifyContent={"center"}
    >
      {filteredProduct?.map(({ category, id, image, price, title, index }) => {
        return (
          <Card key={id} sx={{ width: "20rem", height: "26rem" }}>
            <Box
              overflow={"hidden"}
              height={"18rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={image} alt="product" width={"200px"} />
            </Box>

            <Box justifyContent={"space-between"} padding={"0.5rem"}>
              <Box
                height={"3rem"}
                display={"flex"}
                alignItems={"start"}
                gap={"0.5rem"}
                overflow={"scroll"}
              >
                <Typography
                  gutterBottom
                  variant="p"
                  component="p"
                  width={"17rem"}
                  overflow={"scroll"}
                >
                  {title}
                </Typography>
                <Typography gutterBottom variant="h5" component="p">
                  ${price}
                </Typography>
              </Box>
              <hr />
              <Box display={"flex"} gap={"0.5rem"} height={"3rem"}>
                <Typography
                  variant="body2"
                  width={"13rem"}
                  color="text.secondary"
                >
                  {category.toUpperCase()}
                </Typography>

                <button
                  onClick={handleAdd}
                  fontSize={35}
                  id={id}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "white",
                    margin: "auto",
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default Cards;
