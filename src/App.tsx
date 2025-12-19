import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import ProductList from "./components/ProductList/ProductList"
import "./App.css"
export default function App(){

  console.log('allo')

  return(
    <div>
      <Header />
      <Hero />
      <ProductList />
    </div>
  )
}
