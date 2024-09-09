# hito 6 de pizza mama mia

1. *Se crea un context para su utilizacion global para crear un carrito de compras*

*ejemplo de creacion:*

```js
import { createContext, useState } from "react";

// Crear context
export const CartContext = createContext();

// Crear el Provider aca se reutilizaran las funciones en diferentes componentes creamos un carpeta llamada context ubicada en src 
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].count++;
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...pizza, count: 1 }];
      setCart(newCart);
    }
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );

  const getQuantity = () => {
    return cart.reduce((total, pizza) => total + pizza.count, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQuantity, totalPrice, getQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

```
3. *se utiliza en los componentes un ejemplo en Cart.jsx se importo CartContext y useContext* 

```js
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

```

luego se destructura los que utilizaremos:

```js
  const { cart, addToCart, decreaseQuantity, totalPrice } = useContext(CartContext);
```

4. *luego se consume en el return ejemplo a continuacion*

```js
<Container>
      <h2 className="my-4">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map(pizza => (
            <Card key={pizza.id} className="mb-3">
              <Row className="no-gutters">
                <Col md={4}>
                  <Image src={pizza.img} alt={pizza.name} fluid />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                      Precio: ${pizza.price}
                      <br />
                      Cantidad: {pizza.count}
                    </Card.Text>
                    <Button variant="danger" onClick={() => decreaseQuantity(pizza.id)} className="me-2">-</Button>
                    <Button variant="success" onClick={() => addToCart(pizza)}>+</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
          <Button variant="primary">Pagar</Button>
        </>
      )}
    </Container>

```
*como se ve se reutiliza cart la funciones que agregan al carrito, disminuyen y el total de todo lo del carrito*