import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { retrieveProducts } from "../api/products";
import { useState , useEffect } from "react";
// import MyCustomDialog from "../components/MyDialog";

function App() {
  const [rows,setRows] = useState([])

  useEffect(() =>{
    retrieveProducts()
    .then(res=>{
      setRows(res.data)
    })
  })

  return (
    <section className="relative flex flex-col min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2342&auto=format&fit=crop"
          alt="Galaxy background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-slate-900/70 backdrop-blur-lg border-b border-purple-500/50 px-8 shadow-lg shadow-purple-500/10">
        <div className="flex gap-6 items-center py-4">
          <img
            className="w-16 h-16 rounded-full border-2 border-purple-500/50 hover:border-purple-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
            src="https://prod-eurasian-res.popmart.com/default/1_91J1BWpBKQ_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp"
            alt="Space Molly Logo"
          />
          <div className="flex flex-col">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300">
              Space Molly
            </span>
            <span className="text-sm text-purple-300/80">Collectible Universe</span>
          </div>
        </div>
        <ul className="flex gap-6 px-5 py-2">
          <li>
            <a href="/app" className="text-purple-300 hover:text-purple-100 transition-all duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/cart" className="text-purple-300 hover:text-purple-100 transition-all duration-300">
              Cart
            </a>
          </li>
          <li>
            <a href="/orderdetails" className="text-purple-300 hover:text-purple-100 transition-all duration-300">
              Order Details
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col h-[125px]">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 transition-all duration-300">
              Space Molly
            </span>
            <span className="text-sm text-purple-300/80">Collectible Universe</span>
          </div>
  
        <div className="relative z-10 mt-10 flex flex-col p-5 gap-5">
          <b className="text-4xl text-center text-purple-300 font-space-grotesk">Order Details</b>
          <section className="flex gap-5 flex-1 min-h-0 flex-wrap justify-center">
          {rows.map(item => (
            <Card className="w-[350px] h-[520px] bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 duration-300">
            <CardHeader>
              <CardTitle>
                <img
                  src={`${ROOT_URL}${item.image}`}
                  className="w-full h-[300px]"
                  alt="TRY"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <p>{item.name}</p>  
              <p>PHP {item.price}</p>
              <p>{item.descripton}</p>
              <p>PROCESSING</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button className="bg-red-600 text-white hover:bg-red-700">Remove</Button>
              <Button className="bg-slate-700 text-white hover:bg-slate-600">Edit</Button>
            </CardFooter>
          </Card>
          ))}
            
          </section>
        </div>

    {/* <MyCustomDialog data={} /> */}
    </section>
  );
}

export default App;