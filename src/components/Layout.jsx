import Header from "./Header";
import "./styles/Layout.css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
export default Layout;
