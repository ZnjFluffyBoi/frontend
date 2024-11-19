import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function OrderDetails() {

  const [updateStatus, setUpdateStatus] = useState(false)
  
  const orderList = [
    {
      id: 1,
      image: 'https://u-mercari-images.mercdn.net/photos/m29617180333_1.jpg?width=512&height=512&format=pjpg&auto=webp&fit=crop&_=1720234075',    
      status: "Delivered",
      title: 'The Vigilance',
      price: 2000.00  
    }
  ]
  
  return (

    <section className="flex flex-col flex-1 min-h-0 ">
      <nav className="flex justify-between items-center bg-white">
        <div className="flex gap-5 items-center py-2">
          <img
            className="w-[70px] h-[70px]"
            src="https://tse3.mm.bing.net/th?id=OIG1.9HW8GFK4jDQYuVttnrAt&pid=ImgGn"
            alt="try"
          />
          {/* <b className="text-nowrap">JOE FIGS</b> */}
        </div>
        <ul className="text-xl flex gap-5  px-5 py-2">
          <li>
            <a href="/app">Home</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
          <li>
            <a href="/orderdetails">Order Details</a>
          </li>
        </ul>
      </nav>
      <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center">Order Details</b>
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap">
          {console.log(orderList)}
          {orderList.map((obj) => (
          <Card key={obj.id} className="w-[350px] h-[520px] bg-sky-800">
            {console.log('id: ', orderList.id)}
            <CardHeader>
              <CardTitle>
                {/* product image */}
                <img
                  src={obj.image}
                  className="w-full h-[300px]"
                  alt="TRY"
                ></img>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              {/* product status */}
             <p>{obj.status}</p>
              {/* product name */}
              <p>{obj.title}</p>
              {/* product price */}
              <p>{obj.price}</p>
               {/* <input type="text" value={"STATUS"} className={"bg-transparent"} {...setUpdateStatus ? "disabled" : "enabled"}/>  */}
            </CardContent>
            <CardFooter className="flex gap-1">
              {/* <Button className="bg-white text-black" onClick={() => {
                setUpdateStatus(true)
              }}>Update Status</Button> */}
                <select id="status" className={"text-black"}>
                <option hidden defaultValue={true}>SELECT STATUS</option>
                <option value={obj.status = 'WAITING FOR COURIER'}>WAITING FOR COURIER</option>
                <option value="test..">SHIPPED</option>
                <option value="test..">DELIVERED</option>
                <option value="test..">PROCESSING</option>
              </select>  
            </CardFooter>
          </Card> 
        ))}
        </section>
      </div>
    </section>
  )
}
