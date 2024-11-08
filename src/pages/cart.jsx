

export default function Cart() {
    return(
    <section className="bg-black/80 flex flex-col flex-1 min-h-0 ">
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
    </section>
    )
  }

