import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <ListGroup variant="flush" className="w-25">
      <NavLink to="/" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Contains These Letters
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Contains This String
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Palidrome
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Anagram
        </ListGroup.Item>
      </NavLink>
      <ListGroup.Item variant="success" className="h-100"></ListGroup.Item>
    </ListGroup>
  );
}
