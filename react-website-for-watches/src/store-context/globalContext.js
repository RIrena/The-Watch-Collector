import React, { useEffect, useState } from "react";
import { createdContext } from "./context-store";

export const GlobalContextState = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        //console.log(response)
        return response.json();
      })
      .then(function (products) {
        console.log(products);
        setProducts(products);
      });
  };

  const selectProductsByCategory = (category) => {
    const filteredProductsByCategory = products.filter(
      (product) => product.category === category
    );
    return filteredProductsByCategory;
  };

  const selectProductById = (productId) => {
    const productFound = products.find(
      (product) => product.id === Number(productId)
    );
    return productFound;
  };

  const handleAddToCart = (product) => {
    const producstsToBeAdded = [...cart, product];
    setCart(producstsToBeAdded);
  };

  const handleRemoveFromCart = (productId) => {
    const productsToKeep = cart.filter((product) => product.id !== productId);
    setCart(productsToKeep);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <createdContext.Provider
      value={{
        products: products,
        cart: cart,
        selectProductsByCategory: selectProductsByCategory,
        selectProductById,
        handleAddToCart,
        handleRemoveFromCart,
        clearCart,
      }}
    >
      {props.children}
    </createdContext.Provider>
  );
};
