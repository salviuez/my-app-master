import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Bots from './components/Bots';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';


const ProductList = [
  {
    id : 1,
    name : 'Maths Book',
    description : 'some description',
    Price : 5000,
    imgURL : "https://rukminim1.flixcart.com/image/416/416/l0mr7gw0/diary-notebook/x/h/q/-original-imagcdj2azcsgex4.jpeg?q=70",
  },
  {
    id : 2,
    name : 'Science Book',
    description : 'some description',
    Price : 6000,
    imgURL : "https://rukminim1.flixcart.com/image/416/416/jqy3dzk0/book/5/7/5/it-s-all-about-science-5-original-imafcuzyjkfscke3.jpeg?q=70",
  },
  {
    id : 3,
    name : 'English Book',
    description : 'some description',
    Price : 7000,
    imgURL : "https://m.media-amazon.com/images/I/51y3VnCab5L._SX382_BO1,204,203,200_.jpg",
  },
  {
    id : 4,
    name : 'Tamil Book',
    description : 'some description',
    Price : 8000,
    imgURL : "https://m.media-amazon.com/images/I/61w+0EDDDPL.jpg",
  }
]

function App() {
  const [products, setProducts] = useState(ProductList);
  return (
    <div className="App">
      
      <Header />
      <Bots products = {products} />
      {/* <Header />
      <cards />
      <Home />
      <Footer /> */}



    </div>
  );
}

export default App;
