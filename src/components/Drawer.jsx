import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import {GiPapers} from "react-icons/gi"
import {MdElectricBolt, MdOutlineWoman2} from "react-icons/md"
import {GiDiamondRing} from "react-icons/gi"
import {IoMdMan} from "react-icons/io"
import { TextContext } from '../context/TextContext';
import { useContext } from 'react';

export default function Drawer() {

  const {product, setFilteredProduct}=useContext(TextContext)



  const handleFilter=(e)=>{
    e.preventDefault()
    const filteredData = product.filter(item=>item.category.toLowerCase()==e.target.id.toLowerCase())
    {filteredData.length >1 ?  setFilteredProduct(filteredData) : setFilteredProduct(product) }   
  }


  
  const [state, setState] = React.useState({
    categories: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor = 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
          <ListItem id={""} onClick={handleFilter} sx={{display:"flex", gap:"3rem", cursor:"pointer", marginBottom:"10px"}}>
            <GiPapers/>All
          </ListItem>
          <hr />
          <ListItem id={"Electronics"} onClick={(handleFilter)} sx={{display:"flex", gap:"3rem", cursor:"pointer", marginBottom:"10px"}}>
            <MdElectricBolt/>Electronics
          </ListItem>
          <hr />

          <ListItem id={"Jewelery"} onClick={handleFilter} sx={{display:"flex", gap:"3rem", cursor:"pointer", marginBottom:"10px"}}>
            <GiDiamondRing/>Jewelery
          </ListItem>
          <hr />

          <ListItem id={"Men's Clothing"} onClick={handleFilter} sx={{display:"flex", gap:"3rem", cursor:"pointer", marginBottom:"10px"}}>
            <IoMdMan/>Men's Clothing
          </ListItem>
          <hr />

          <ListItem id={"Women's Clothing"} onClick={handleFilter} sx={{display:"flex", gap:"3rem", cursor:"pointer", marginBottom:"10px"}}>
            <MdOutlineWoman2/>Women's Clothing
          </ListItem>

       
      </List>
      <Divider />
     
    </Box>
  );

  return (
    <Box textAlign={"end"}>
      {["categories"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
