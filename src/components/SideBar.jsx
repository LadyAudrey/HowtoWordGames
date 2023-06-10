import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <ListGroup variant="flush" className="w-25">
      <NavLink to="/scrabble-solver" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Scrabble Solver
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/palindrome" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Palindrome
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/anagram" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Anagram
        </ListGroup.Item>
      </NavLink>
      <NavLink to="/word-cloud" className="text-decoration-none">
        <ListGroup.Item variant="success" action>
          Word Cloud
        </ListGroup.Item>
      </NavLink>
    </ListGroup>
  );
}
