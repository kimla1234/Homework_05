import React from "react";
import Product from "./Product.jsx";
import Feedback from "./Feedback.jsx";
function Main() {
  return (
    <main >
      <div className="text-3xl flex justify-center p-5 ">Products</div>
      <section className="w-full flex justify-center">
        <Product />
      </section>
      <section>
        <div className="text-3xl flex justify-center p-5 ">Feedback</div>
        <Feedback/>
      </section>
    </main>
  );
}
export default Main;
