import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const Pizza = () => {
  const [infor, setInfor] = useState(null); // Iniciar con null
  
  // Función para consumir API
  const consultarApi = async () => {
    try {
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setInfor(data); // Guardar los datos de la API en el estado
    } catch (error) {
      console.error("Error fetching pizza data:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  // Renderizar solo si los datos están cargados
  if (!infor) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={infor.img} />
          <Card.Body>
            <Card.Title>{infor.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Card.Text>INGREDIENTES:</Card.Text>
              <Card.Text>{infor.desc}</Card.Text>
              <ul>
                {infor.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card.Title>PRECIO: {infor.price}</Card.Title>
              <div className="d-flex justify-content-center">
                <Card.Link href="#" className="mx-2 m-3">
                  <Button variant="primary">Ver más 👀 </Button>
                </Card.Link>
                <Card.Link href="#" className="mx-2 m-3">
                  <Button variant="dark">Añadir 🛒 </Button>
                </Card.Link>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
};

export default Pizza;
