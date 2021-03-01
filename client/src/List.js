import { Container, ListGroup, Row, Col } from "react-bootstrap";
import Wish from "./Wish";
import wishlist from "./wishlist_data";

function List() {
  return (
    <>
      <Container>
        <ListGroup>
          <Row>
            {wishlist.map(function (row) {
              return (
                <Wish
                  key={row.id}
                  title={row.title}
                  year={row.year}
                  content={row.description}
                  location={row.location}
                  reference={row.reference}
                />
              );
            })}
          </Row>
        </ListGroup>
      </Container>
    </>
  );
}

export default List;
