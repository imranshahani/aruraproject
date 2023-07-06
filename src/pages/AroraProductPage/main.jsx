import React from "react"
import Slider from "./components/Slider"
import ProductList from "./components/ProductList"
import TextTouch from "./components/TextTouch";
import KeyFeatures from "./components/keyFeature";
import RelatedProductList from "./components/RelatedProductList";
// import './App.css';

function App() {
  return (
    <>
    <Slider/>
    <ProductList />
     <KeyFeatures />
    <TextTouch />
    <RelatedProductList /> 
    </>
  );
}

export default App;
