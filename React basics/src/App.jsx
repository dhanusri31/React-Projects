// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App






// import React,{useEffect, useState} from'react';
// import './App.css';
// import img from './assets/cartoon.jpg';
// import Button from './assets/components/UI/button';

// const App = () => {
//   const [counter, setCounter]=useState(0);
//   const [data, setData]=useState([]);
//   useEffect(()=>{
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   }, []);
//   console.log(data,"data");




//   return (
//     <div>
//      {  /* <h1> Hello, Elephant!</h1>
//      <p style={{color:'red'}}> Welcome to the Elephant's Home.</p>
//      <button className="btn">Click Me</button>
//        <br></br>

//      <img src={img}/>
//        <br></br>
//      <Button name = {"Elephant!"} onclick={() => alert("Elephant")}/> */}
//       <label>Counter: {counter}</label>
//        <Button welcome="Increase" onclick={() => setCounter(counter + 1)} />
//        <Button welcome="Decrease" onclick={() => setCounter(counter - 1)} />

//             <br></br>

//             <div>
//               {
//                 data.map((item, key)=>{
//                   return(
//                     <div key={key}>
//                       <h1>{item.name}</h1>
//                       <p>{item.email}</p>
//                       <p> <strong>Address:</strong>
//                        {item.address.street},
//                         {item.address.suite}, 
//                         {item.address.city}, 
//                         {item.address.zipcode} 
//                         (Lat: {item.address.geo.lat}, Lng: {item.address.geo.lng})
//                       </p>
//                       <p>
//                         {item.phone}
//                       </p>
//                       <p>
//                         {item.website}
//                       </p>
//                       <p>
//                         <strong>Company:</strong> {item.company.name} - {item.company.catchPhrase} - {item.company.bs}
//                       </p>
                     

                      
//                     </div>
//                   )
//                 }
                  
//                 )
//               }
//             </div>
//     </div>
    
//   );
// } 
// export default App;






import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Nykaa</h1>
      <p>Your favourite beauty products in one place!</p>

      <Link to="/products">
        <button>Shop Now</button>
      </Link>

      <div className="categories">
        <div>
          <h2>💄 Makeup</h2>
          <p>Find your favourite makeup products.</p>
        </div>

        <div>
          <h2>🧴 Skincare</h2>
          <p>Take care of your beautiful skin.</p>
        </div>

        <div>
          <h2>✨ Beauty</h2>
          <p>Explore beauty products for you.</p>
        </div>
      </div>
    </div>
  );
}

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(
        "https://dummyjson.com/products/category/beauty"
      );

      console.log("Response:", response);
      console.log("Status:", response.status);
      console.log("Success:", response.ok);

      if (!response.ok) {
        throw new Error("Unable to fetch products");
      }

      const data = await response.json();

      console.log("Product Data:", data);

      setProducts(data.products);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.log("Error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-page">
      {success && (
        <div className="success-message">
          ✅ Loaded Successfully!
        </div>
      )}

      <h1>Our Beauty Products </h1>
      <p>Explore our collection of beauty products.</p>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : error ? (
        <div className="error">
          <p>Oops! Something went wrong.</p>
          <button onClick={getProducts}>Try Again</button>
        </div>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h3>₹{product.price}</h3>

              <p> {product.rating}</p>

              <button>Buy Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <h2>NYKAA</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <footer>
        <p>© 2026 Nykaa Beauty Store</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;





// import { useState } from "react";
// import Title from "./Title.jsx"
// function App()
// {
//   const [count, setCount] = useState(0);

//   return(
//     <>
//     <Title count = {count}/>
//     <button onClick={()=>setCount(count+1)}>
//       ClickMe
//     </button>
//     </>
//   )
// }
// export default App;