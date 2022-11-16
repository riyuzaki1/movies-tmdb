import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";

import Favourites from "./components/Favourites";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';

function App() {
  return (
<>
<BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    
    <Route path="/" element={<>
      
      <Banner/>
      <Movies/>
      
    </>}></Route>

    <Route path="/favourites" element={<><Favourites/>
    
    </>
    }/>

  </Routes>
</BrowserRouter>
{/* <Navbar></Navbar>
<Banner/>
<Movies/>
<Pagination/> */}
</>
  );
}

export default App;