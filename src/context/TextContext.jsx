import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState();
  const [add, setAdd] = useState(0);
  const [list, setList] = useState([]);
  const basket=[]


product.filter((item) => {
    list.forEach((element) => {
      if (item.id == element) {
        basket.push(item);
      }
    });
  });


  const getData = async () => {
    let data = await axios.get(`https://fakestoreapi.com/products/`);
    setProduct(data.data);
    setFilteredProduct(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TextContext.Provider
      value={{
        product,
        add,
        setAdd,
        list,
        setList,
        filteredProduct,
        setFilteredProduct,
        basket,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
