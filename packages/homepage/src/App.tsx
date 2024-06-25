import "./App.css";
import Logo from "../public/sherwinLogo.png";
import MiniCart from "../public/minicart.svg";
import SearchIcon from "../public/searchicon.svg";
import OrderHistory from "./components/OrderHistory";

function App() {
  const tally: number = 0;
  return (
    <main className=" border border-solid mx-auto">
      <nav className="container mx-auto flex justify-center">
        <ul className="px-20 flex place-content-evenly items-center border border-solid text-xs w-[75vw] ">
          <li className=" p-4 border-r border-solid flex-col  w-[13.2vw]bg-red-300">
            <p className="text-lg font-semibold">
              ACCURA HEALTHCARE OF KNOXVILLE
            </p>
            <p className="text-base text-gray-500 font-medium">
              Account: 2524-3595-3
            </p>
          </li>
          <li className=" p-4 border-r border-solid  w-[13.2vw]">
            <a className="text-lg" href="#">
              <u>My Store: </u>
              <span className="text-base text-gray-500 font-medium">
                AMES #703966 <br /> (745) 202-1274 <br /> 7:00 AM - 5:00 PM
              </span>
            </a>
          </li>
          <li className=" p-4 border-r border-solid text-center text-xl font-semibold  w-[13.2vw]">
            <a href="#">Quick Order</a>
          </li>
          <li className=" p-4 border-r border-solid text-center text-xl font-semibold  w-[13.2vw]">
            <a href="#">Order History</a>
          </li>
          <li className="ml-auto p-4 w-[13.2vw]  flex justify-center">
            <button className="px-8 py-2 bg-[#39c] w-64 text-white uppercase text-md font-bold ">
              Back to location selection
            </button>
          </li>
        </ul>
      </nav>
      <section className="h-[250px] bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800">
        <div className="container mx-auto h-full">
          <img className="px-8 py-5" src={Logo}></img>
        </div>
      </section>
      <section className="container mx-auto h-[964px] mt-[-100px] relative">
        <ul className="flex items-center  bg-zinc-800 h-[100px] sticky top-0 place-content-evenly z-50">
          <li className="px-10">
            <h1 className="font-bold text-white text-xl hover:cursor-pointer">
              SHOP BY CATEGORY
            </h1>
          </li>
          <li className="bg-white w-7/12 h-10 flex items-center rounded-lg">
            <input
              placeholder="What product would you like to order?"
              className="w-full text-2xl px-4 outline-none"
            ></input>
            <button className=" w-10 h-8 flex flex justify-center  flex items-center">
              <img src={SearchIcon}></img>
            </button>
          </li>
          <li className="flex-col items-center flex justify-center">
            <button className="w-25 columns-1 flex text-bold text-blue-300">
              <img className="mr-1" src={MiniCart}></img>
              {tally}
            </button>
            <p className="text-white text-semibold">$0.00</p>
          </li>
        </ul>
        <section className="container mx-auto bg-red-500 h-[865px] w-9/12 absolute bottom-0 right-0">
          <div className="h-full w-full relative none">
            <img
              className="absolute top-0 right-0 w-full"
              src="https://sherwin-ebus-ucm-production-s3.s3.us-east-2.amazonaws.com/content_images/store_image_punchout_atf.jpeg"
            ></img>
            <OrderHistory />
          </div>
        </section>
      </section>
      <footer className=" bg-[#e7e6e5] h-[300px]"></footer>
    </main>
  );
}

export default App;
