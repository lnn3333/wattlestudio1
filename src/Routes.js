import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home'
import Shop from './components/shop'
import ShopRelate from './components/shop-relate'
//import Artist from './components/artist'
import Blog from './components/blog'
import About from './components/about'
import Contact from './components/contact'
import Product1Detail from './components/product-detail-pages/product1'
import Product2Detail from './components/product-detail-pages/product2'
import Product3Detail from './components/product-detail-pages/product2'

const Routesval = () =>{
    return(
        <BrowserRouter>
        <Routes>
                <Route path="/" element ={<Home />}> </Route>
                <Route path="/shop" element ={<Shop />}> </Route>
                <Route path="/shop-relate" element ={<ShopRelate />}></Route>
                <Route path="/artist" element ={<ShopRelate />}></Route>
                <Route path="/blog" element ={<Blog />}></Route>
                <Route path="/about" element ={<About />}></Route>
                <Route path="/contact" element ={<Contact />}></Route>

                {/* Product detail pages */}
                <Route path="/product-detail-pages/product1" element ={<Product1Detail />}></Route>
                <Route path="/product-detail-pages/product2" element ={<Product2Detail />}></Route>
                <Route path="/product-detail-pages/product3" element ={<Product3Detail />}></Route> 
             

        </Routes>
        </BrowserRouter>
    )
}

export default  Routesval;
