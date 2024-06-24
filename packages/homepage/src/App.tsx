import "./App.css";
import Logo from "../public/sherwinLogo.png";

function App() {
  return (
    <main className=" border border-solid mx-auto">
      <nav className="container mx-auto ">
        <ul className="flex gap-x-4 items-center  border border-solid text-xs">
          <li className=" p-4 border-r border-solid">
            <p className="">ACCURA HEALTHCARE OF KNOXVILLE</p>
            <p> Account: 2524-3595-3</p>
          </li>
          <li className=" p-4 border-r border-solid">
            <a href="#">
              <u>My Store:</u>
              <span>
                {" "}
                AMES <br /> #703966 <br /> (745) 202-1274 <br /> 7:00 AM - 5:00
                PM
              </span>
            </a>
          </li>
          <li className=" p-4 border-r border-solid text-center ">
            <a href="#">Quick Order</a>
          </li>
          <li className=" p-4 border-r border-solid text-center">
            <a href="#">Order History</a>
          </li>
          <li className="ml-auto p-4 ">
            <button className="px-8 py-2 bg-[#39c] text-white uppercase">
              Back to location selection
            </button>
          </li>
        </ul>
      </nav>
      <section className="h-[250px] bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800">
        Header
        <div className="container mx-auto h-full">
          <img className="px-8" src={Logo}></img>
        </div>
      </section>
      <section className="container mx-auto bg-zinc-800 h-[964px] m-[-100px]">
        Body
      </section>
      <footer className=" bg-[#e7e6e5] h-[300px]">Footer</footer>
    </main>
  );
}

export default App;
