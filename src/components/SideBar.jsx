import { Nav } from "react-bootstrap";

export default function SideBar() {
  return (
    <Nav className="w-25 h-100 d-flex flex-column bg-success" variant="tabs">
      <Nav.Item>
        <Nav.Link style={{ "border-radius": "none" }}>
          Contains These Letters
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Contains This String</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Palindrome</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Anagram</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
