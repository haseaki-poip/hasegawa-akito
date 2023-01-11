import "./Header.css";
const Header = ({ pageName }: { pageName: "about" | "portfolio" }) => {
  return (
    <header>
      <div className="links">
        <a
          style={
            pageName === "about" ? { color: "white" } : { color: "#d3d3d3" }
          }
          href="/"
        >
          about
        </a>
        <a
          style={
            pageName === "portfolio" ? { color: "white" } : { color: "#d3d3d3" }
          }
          href="/portfolio"
        >
          portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
