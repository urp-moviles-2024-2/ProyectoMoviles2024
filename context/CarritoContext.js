import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((producto) => producto.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarProducto }}>
      {children}
    </CarritoContext.Provider>
  );
};