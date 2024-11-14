import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OrderDetails() {
    return(

    <section className="flex flex-col flex-1 min-h-0 ">
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
      <div className="mt-10 flex flex-col p-5 gap-5">
        <b className="text-4xl text-center">Order Details</b>
        <section className="flex gap-5 flex-1 min-h-0 flex-wrap">
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
              <p>PRODUCT: The Vigilance</p>
              <p>PRICE: PHP 2000.00</p>
              <p>STATUS: SHIPPED</p>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </section>
      </div>
    </section>
    )
  }
