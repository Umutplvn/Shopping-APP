import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TextContext } from "../context/TextContext";
import { Stack } from "@mui/material";

export default function Basket() {
  const { basket, setAdd } = useContext(TextContext);
  const [basketSta, setBasketSta] = useState(
    basket.map((item) => ({ ...item, quantity: 1 }))
  );

  const handleRemove = (id) => {
    const updatedBasket = basketSta.filter((item) => item.id !== id);
    setBasketSta(updatedBasket);
    setAdd((prevAdd) => prevAdd - 1);
  };

  const handleIncreaseQuantity = (id) => {
    const updatedBasket = basketSta.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setBasketSta(updatedBasket);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedBasket = basketSta.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setBasketSta(updatedBasket);
    if (basketSta.find((item) => item.id === id)?.quantity === 1) {
      handleRemove(id);
    }
  };

  const calculateSubtotal = () => {
    const total = basketSta.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <>
      {basketSta?.length >= 1 ? (
        <>
          <Box
            margin={"1rem"}
            display={"flex"}
            flexWrap={"wrap"}
            gap={"2rem"}
            justifyContent={"center"}
          >
            {basketSta?.map(({ category, id, image, price, title, quantity }) => {
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
                    <Box display={"flex"} gap={"0.5rem"} height={"3rem"} alignItems={"center"}>
                   <Box display="flex" width={"12rem"} alignItems={"center"}  justifyContent={"start"}>
                   <button
                        fontSize={35}
                        onClick={() => handleDecreaseQuantity(id)}
                        style={{
                          cursor: "pointer",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "1rem",
                          backgroundColor: "white",
                          color: "black",
                        }}
                      >
                        -
                      </button>
                      <Typography variant="body2" width={"2rem"} textAlign={"center"} fontSize={"20px"}>{quantity}</Typography>
                      <button
                        fontSize={35}
                        onClick={() => handleIncreaseQuantity(id)}
                        style={{
                          cursor: "pointer",
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "1rem",
                          backgroundColor: "white",
                          color: "black",
                        }}
                      >
                        +
                      </button>

                   </Box>
                      

                      <button
                        fontSize={35}
                        onClick={() => handleRemove(id)}
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
          <Box
            textAlign={"center"}
            padding={"1rem"}
            borderTop={"1px solid #ccc"}
            marginTop={"1rem"}
          >
            <Typography variant="h6">Subtotal: ${calculateSubtotal()}</Typography>
          </Box>
        </>
      ) : (
        <h3 style={{ textAlign: "center", padding: "1rem" }}>
          You have no items in your shopping cart,{" "}
          <Link to="/">start adding some!</Link>
        </h3>
      )}
    </>
  );
}
