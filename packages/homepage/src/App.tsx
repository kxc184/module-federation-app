import "./App.css";
import Logo from "../public/sherwinLogo.png";
import MiniCart from "../public/minicart.svg";
import SearchIcon from "../public/searchicon.svg";
import OrderHistory from "./components/OrderHistory";
import WaterMark from "../public/bg-watermark.png";
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
      <footer className=" bg-[#e7e6e5] h-[300px] relative flex justify-center">
        <div className="w-[75vw] container mx-auto">
          <ul className="flex flex-row">
            <li className="w-1/3">
              <p className="mt-5">
                <img className="mb-5" src={WaterMark} />
                For special assistance contact your servicing store or call{" "}
                <br />
                <p className="text-blue-400 inline"> 844-552-7579</p> or email
                <p className="text-blue-400 inline">
                  {" "}
                  punchout@sherwin-williams.com
                </p>
                <br />
                <p className="mt-6">©2024 The Sherwin-Williams Company</p>
              </p>
            </li>
            <li className="w-1/3">
              <p className="my-4 text-xl font-semibold ">Sherwin Williams</p>
              <ul className="font-semibold hover:cursor-pointer text-gray-600">
                <li className=" border-2 border-t-gray-400 w-64 pt-2">
                  Privacy Policy
                </li>
                <li>P3P Policy </li>
                <li>Accessibility Statement</li>
                <li>Terms Of Use</li>
                <li>Di Not Sell or Share My Personal Information</li>
              </ul>
            </li>
            <li className="w-1/3 mt-5 text-gray-600">
              Due to screen limitations, colors seen here may not accurately
              reflect painted colors. To confirm your color choices, visit a
              Sherwin-Williams store and refer to our in-store color cards or
              Color to Go® color samples.
            </li>
          </ul>
        </div>
      </footer>
    </main>
  );
}

export default App;
