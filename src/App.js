import Products from "./components/products/products";
import Header from "./components/products/Layout/header";
import Subheader from "./components/products/Layout/Subheader";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Subheader></Subheader>
     <Products></Products>
      
    </div>
  );
}

export default App;
