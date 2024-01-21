import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home'
import Shop from './components/shop'
import ShopRelate from './components/shop-relate'
import Artist from './components/artist'
import Blog from './components/blog'
import About from './components/about'
import Contact from './components/contact'

const Routesval = () =>{
    return(
        <BrowserRouter>
        <Routes>
                <Route path="/" element ={<Home />}> </Route>
                <Route path="/shop" element ={<Shop />}> </Route>
                <Route path="/shop-relate" element ={<ShopRelate />}></Route>
                <Route path="/artist" element ={<Artist />}></Route>
                <Route path="/blog" element ={<Blog />}></Route>
                <Route path="/about" element ={<About />}></Route>
                <Route path="/contact" element ={<Contact />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default  Routesval;
