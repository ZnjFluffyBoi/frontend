import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cart() {

  const cartList = [
    {
      id: 1,
      image: 'https://u-mercari-images.mercdn.net/photos/m29617180333_1.jpg?width=512&height=512&format=pjpg&auto=webp&fit=crop&_=1720234075',
      title: 'The Vigilance',
      price: 2000.00,
      description: 'The silver-blue part of magnetic mask has a metallic pearlescent effect',
    },
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
        <b className="text-4xl text-center text-black">CART</b>
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap">
          {console.log(cartList)}
          {cartList.map((obj) => (
            
            <Card key={obj.id} className=" w-[350px] h-[520px] bg-sky-800">
              {console.log('id: ', cartList.id)}
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
                {/* product name */}
                <p>{obj.title}</p>
                {/* product price */}
                <p>{obj.price}</p>
                {/* product description */}
                <p>{obj.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="bg-white text-black">Checkout</Button>
                <Button className="bg-white text-black">Remove</Button>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </section>
  )
}

