import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  // nav part i guess
  return (
    <section className="bg-orange-0 flex flex-col flex-1 min-h-0 ">
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
      <div className="w-full h-[300px] px-20 mt-20">
        {/* Advertisement banner */}
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://cdn.shopify.com/s/files/1/0594/3210/8209/files/banner_c93b7715-3e60-497a-97a4-8880cc3f5274.jpg?v=1648803380"
                className="w-full h-[300px]"
                alt="bannir"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
        {/* Products */}
        <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center text-zinc-950">SPACE MOLLY</b>
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap justify-center">
          <Card className="w-[350px] h-[520px] bg-sky-800">
            <CardHeader>
              <CardTitle>
                <img
                  src="https://prod-eurasian-res.popmart.com/default/1_91J1BWpBKQ_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp"
                  className="w-full h-[300px]"
                  alt="TRY"
                ></img>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <p>ZnjBigBoi</p>  
              <p>PHP 200,000</p>
              <p>
                COLLECTORS ITEM TO PAR
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button className="bg-white text-black ">Add to Cart</Button>
              <Button className="bg-white text-black">Edit</Button>
              <Button className="bg-white text-black">Remove</Button> 
            </CardFooter>
          </Card>
        </section>
        </div>
        <div className="mt-10 flex flex-col p-5 gap-5">
        {/* <b className="text-4xl text-center text-gray-400">SPACE MOLLY FIGURES</b> */}
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap justify-center">
        </section>
      </div>
      <div className="mt-10 flex flex-col p-5 gap-5">
        {/* <b className="text-4xl text-center">SKULL PANDA FIGURES</b> */}
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap justify-center">
        </section>
      </div>
    </section>
  );
}

export default App;
