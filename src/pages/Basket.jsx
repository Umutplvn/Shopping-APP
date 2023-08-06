import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TextContext } from "../context/TextContext";

export default function Basket() {
  const { basket, setAdd } = useContext(TextContext);
  const [basketSta, setBasketSta]=useState(basket)



  const handleRemove=(e)=>{
  let veri=  basketSta.filter(item=>item.id !== Number(e.target.id))  
    setBasketSta(veri);
}

  return (
    <>
      {basketSta?.length >= 1 ? (
        <Box
          margin={"1rem"}
          display={"flex"}
          flexWrap={"wrap"}
          gap={"2rem"}
          justifyContent={"center"}
        >
          {basketSta?.map(({ category, id, image, price, title }) => {
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
                      fontSize={35}
                      onClick={handleRemove}
                      id={id}
                      style={{
                        cursor: "pointer",
                        width: "5rem",
                        height: "40px",
                        borderRadius: "1rem",
                        backgroundColor: "#C62828",
                        margin: "auto",
                        color: "white",
                        
                      }}
                    >
                      REMOVE
                    </button>
                  </Box>
                </Box>
              </Card>
            );
          })}
        </Box>
      ) : (
        <h3 style={{ textAlign: "center", padding: "1rem" }}>
          You have no items in your shopping cart,{" "}
          <Link to="/">start adding some!</Link>
        </h3>
      )}
    </>
  );
}
