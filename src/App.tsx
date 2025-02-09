import { Route, Routes } from "react-router-dom";
import "./App.css"
import Layout from "./components/Layout/Layout";
import Product from "./components/ProductPage/Product";
import Counter from "./components/Counter/Counter";
import UserPage from "./components/UserPage/UserPage";
import Carshop from "./components/Carshop/Carshop";
import ChuckJoke from "./components/ChuckJokes/ChuckJoke";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/productpage" element={<Product/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/carshop" element={<Carshop/>} />
          <Route path="/chuckjokes" element={<ChuckJoke/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
