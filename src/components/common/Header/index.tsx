import "./Header.css";
const Header = ({ pageName }: { pageName: "about" | "portfolio" }) => {
  return (
    <header>
      <div className="links">
        <a
          style={
            pageName === "about" ? { color: "white" } : { color: "#d3d3d3" }
          }
          href={`${process.env.PUBLIC_URL}/`}
        >
          about
        </a>
        <a
          style={
            pageName === "portfolio" ? { color: "white" } : { color: "#d3d3d3" }
          }
          href="/hasegawa-akito/portfolio"
        >
          portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
