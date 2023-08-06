import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import icon from "../assets/icon.jpeg";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { lightBlue } from "@mui/material/colors";
import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import {Link} from "react-router-dom"

const Header = () => {
  const {add}=useContext(TextContext)
  return (
    <Stack
      direction={"col"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"1rem"}
      sx={{ backgroundColor: lightBlue[200], borderRadius: "1rem" }}
      boxShadow={"4"}
    >
      <Box>
        <Link to="/">
        <img
          src={icon}
          alt=""
          style={{ width: "80px", borderRadius: "1rem" }}
        />
        </Link>
      </Box>
      <Box>
        <Badge badgeContent={add} color="primary">
         <Link to={"/basket"}> <ShoppingBagIcon /></Link>
        </Badge>
      </Box>


      
    </Stack>
  );
};

export default Header;
