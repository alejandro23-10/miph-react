import type { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList() {
  const productList: Product[] = [
    {
      id: 1,
      name: "Веник",
      price: 999,
      description: "Крутой веник",
      img: null,
    },
    {
      id: 2,
      name: "Молоко",
      price: 22.43,
      description: "Нежное и вкусное",
      img: null,
    },
    {
      id: 3,
      name: "Калач",
      price: 49.9,
      description: "Матерый",
      img: null,
    },
    {
      id: 4,
      name: "Велосипед",
      price: 128449,
      description: "Двухколесный",
      img: null,
    },
    {
      id: 5,
      name: "Горнолыжная экипировка",
      price: 49990,
      description: "Самая лучшая",
      img: null,
    },
  ];
  console.log(productList)

  return (
    <section className="product-list">
      {productList.map((product) => {
        console.log(product)
        return <ProductCard product={product} />;
      })}
    </section>
  );
}