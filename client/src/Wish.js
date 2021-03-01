import { ListGroup, Col } from "react-bootstrap";

function Wish(props) {
  return (
    <>
      <Col xl={3} lg={4} md={6} sm={12} className="my-3">
        <ListGroup.Item>
          <h4>{props.title}</h4>
          <h5>{props.year}</h5>
          <p>{props.content}</p>
          <p>{props.location}</p>
          <a href={props.reference}>{props.reference}</a>
        </ListGroup.Item>
      </Col>
    </>
  );
}

export default Wish;
