import Header from "./Header";
import Footer from "./Footer";

function MasterLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="body-container">{children}</div>
      <Footer />
    </div>
  );
}
export default MasterLayout;
