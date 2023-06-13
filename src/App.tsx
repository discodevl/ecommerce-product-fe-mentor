import Header from "./components/header/Header";
import MainContent from "./components/product-detail/ProductDetail";
import SliderImg from "./components/slider-img/SliderImg";
import { IMAGES } from "./constants/images";
function App() {
  return (
    <>
      <Header />
      <SliderImg imgs={IMAGES} />
      <MainContent />
    </>
  );
}

export default App;
