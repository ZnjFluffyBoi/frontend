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
            src="https://prod-hk.oss-eu-central-1.aliyuncs.com/default/20240925_131351_750890____1_____1200x1200.jpg?x-oss-process=image/format,webp"
            alt="try"
          />
          <b className="text-nowrap">JOE FIGS</b>
        </div>
        <ul className="text-xl flex gap-5  px-5 py-2">
          <li>
            <a href="/">Home</a>
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
                src="https://img.lazcdn.com/g/ff/kf/S810a6631abff4688b68626dc04ca996cK.jpg_720x720q80.jpg"
                className="w-full h-[300px]"
                alt="bannir"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bgBElHPioCXkWa0YLxYbFmrrjvjF9yGdpw&s"
                className="w-full h-[300px]"
                alt="bannir"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bgBElHPioCXkWa0YLxYbFmrrjvjF9yGdpw&s"
                className="w-full h-[300px]"
                alt="bannir"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
        {/* Products */}
        <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center text-pink-600">POWER PUFF FIGURES</b>
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap justify-center">
          <Card className="w-[350px] h-[520px] bg-pink-400">
            <CardHeader>
              <CardTitle>
                <img
                  src="https://prod-eurasian-res.popmart.com/default/20240304_164111_296715__1200x1200.jpg"
                  className="w-full h-[300px]"
                  alt="TRY"
                ></img>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <p>The Vigilance</p>
              <p>PHP 2000.00</p>
              <p>
                The silver-blue part of magnetic mask has a metallic pearlescent
                effect
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-white text-black">Add to Cart</Button>
            </CardFooter>
          </Card>
        </section>
        </div>
        <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center text-gray-400">SPACE MOLLY FIGURES</b>
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap justify-center">
          <Card className="w-[350px] h-[520px] bg-gray-700">
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
              <p>The Vigilance</p>
              <p>PHP 2000.00</p>
              <p>
                The silver-blue part of magnetic mask has a metallic pearlescent
                effect
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-white text-black">Add to Cart</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
      <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center">SKULL PANDA FIGURES</b>
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap justify-center">
          <Card className="w-[350px] h-[520px] bg-zinc-800">
            <CardHeader>
              <CardTitle>
                <img
                  src="https://u-mercari-images.mercdn.net/photos/m29617180333_1.jpg?width=512&height=512&format=pjpg&auto=webp&fit=crop&_=1720234075"
                  className="w-full h-[300px]"
                  alt="TRY"
                ></img>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <p>The Vigilance</p>
              <p>PHP 2000.00</p>
              <p>
                The silver-blue part of magnetic mask has a metallic pearlescent
                effect
              </p>
            </CardContent>
            <CardFooter>
              <Button className="bg-white text-black">Add to Cart</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </section>
  );
}

export default App;
