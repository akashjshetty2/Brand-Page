const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="Images/logo.png" alt="nike-logo" className="logo-img"></img>
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button type="submit">Login</button>
    </nav>
  );
};

export default Navigation;
