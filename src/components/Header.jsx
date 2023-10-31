import Weather from "./Weather.jsx";

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <h1 className={"white-bg title"}>
        Skye <span className={"title-style"}>News</span>
      </h1>
      <Weather />
    </header>
  );
}
export default Header;
