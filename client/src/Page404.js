import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <Jumbotron className="text-center bg-white">
        <h2>Oops!</h2>
        <h1>404 not Found</h1>
        <p>Sorry, an error has occured, Requested page not found!</p>
        <p>
          <Button variant="warning">
            <Link to="/">Back to Home</Link>
          </Button>
        </p>
      </Jumbotron>
    </>
  );
}
export default Page404;
