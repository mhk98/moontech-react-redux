import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  // const {
  //   state: { products, loading, error },
  // } = useProducts();

  // let content;

  // if (loading) {
  //   content = <p>Loading</p>;
  // }

  // if (error) {
  //   content = <p>Something went wrong</p>;
  // }

  // if (!loading && !error && products.length === 0) {
  //   content = <p>Nothing to show, product list is empty</p>;
  // }

  // if (!loading && !error && products.length) {
  //   content = products.map((product) => (
  //     <ProductCard key={product._id} product={product} />
  //   ));
  // }

  const [products, setProducts] = useState()

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json)
      .then((data) => setProducts(data))
  }, [])

  const state = useSelector((state) => state)
  console.log('state', state);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {/* {content} */}
    </div>
  );
};

export default Home;
