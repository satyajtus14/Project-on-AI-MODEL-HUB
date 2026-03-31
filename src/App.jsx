
import './App.css'
import NavBar from './component/NavBar'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Model from './component/Model'
import { Suspense, useState } from 'react'
import Cart from './component/Cart'



const getModels = async () =>{
  const res =  await fetch("/models.json");
  return res.json();
}




function App() {

  const modelPromise = getModels();

   const [activeTab,setActiveTab]=useState('model')
  
   const [carts,setCarts]=useState([])

  return (
    <>
    <NavBar/>
    <Banner/>
    {/* name of each tab group should be unique */}
    <div className="tabs tabs-box justify-center bg-transparent ">
    <input type="radio" name="Model" className="tab rounded-full w-40 " aria-label="Models" defaultChecked onClick={()=> setActiveTab("model")} />
    <input type="radio" name="Cart" className="tab rounded-full w-40 " aria-label={`Cart (${carts.length})`} onClick={()=> setActiveTab("cart")}/>
    </div>
    <Suspense>
    {activeTab === "model" && <Model modelPromise={modelPromise} carts={carts}setCarts={setCarts}/>}
    {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}/>}
    </Suspense>
    
    <Footer/>
    </>
  )
}

export default App
