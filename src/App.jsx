import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
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
  
  return (
    <section className="dark bg-background text-foreground flex flex-col flex-1 min-h-0 ">
      <nav>
        <ul className='text-2xl flex gap-5 fixed z-10 w-full bg-[#717274B3] justify-end px-5 py-2'>
          <li><a href="#home">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Cart</a></li>
          <li><a href="">Log Out</a></li>
        </ul>
      </nav>
      <span id="home">{/* For home navigation only*/}</span>
      <div className="w-full h-[300px] px-20 mt-20">
        {/* Advertisement banner */}
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bgBElHPioCXkWa0YLxYbFmrrjvjF9yGdpw&s"
                className="w-full h-[300px]"
                alt="bannir"
              />
            </CarouselItem>
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
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Products */}
      </div>
      <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center">SKULL PANDA THE SOUND SERIES</b>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
      <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center">POWER PUFF SERIES</b>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
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
              <Button>Add to Cart</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </section>
  );
}

export default App;
