import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/signup">Signup</a>
          <a href="login">Login</a>
          <a href="/images">Images</a>
          <a href="/favorites">Favorites</a>
        </div>
      </div>
    </>
  );
}
