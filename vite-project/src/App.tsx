import Header from "./components/Header";
import Body from "./components/Body";
import "./index.css";
import Affiliate from "./components/Affiliate";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Body />
        <Affiliate />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
