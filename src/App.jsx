import "./App.css"

const App = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="Images/logo.png" alt="nike-logo" className="logo-img"></img>
        </div>
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Menu</li>
        </ul>
        <button type="submit">Login</button>
      </nav>
    </div>
  );
};

export default App;
