export default function MegaMenu() {
  return (
    <section className="container mx-auto bg-zinc-800 absolute left-0 min-h-[450px] h-fit w-1/4 text-white">
      <div>
        <ul className="ml-8">
          <li className="group pb-5 text-md ">
            <p className="hover:underline">Interior Paint & Coatings -{">"}</p>
            {
              <ul className="hidden group-hover:block ml-4">
                <li className="hover:underline">Paint & Coatings</li>
                <li>
                  <div className="group/inner w-5/6">
                    <p className="hover:underline">
                      Concrete & Masonry Products -{">"}
                    </p>
                    <ul className=" hidden group group-hover/inner:block ml-4">
                      <li className="hover:underline">
                        Concrete Preparation Products
                      </li>
                      <li className="hover:underline">
                        Decorative Concrete Products
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:underline">Primers</li>
                <li className="hover:underline">Aerosols</li>
              </ul>
            }
          </li>
          <li className="group pb-5">
            <p className="hover:underline">Exterior Paint & Coatings</p>
            {
              <ul className="hidden group-hover:block ml-4">
                <li>
                  <div className="group/inner w-5/6">
                    <p className="hover:underline">
                      Deck Stains & Supplies -{">"}
                    </p>
                    <ul className=" hidden group group-hover/inner:block ml-4">
                      <li className="hover:underline">Applicators</li>
                      <li className="hover:underline">Finishes</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="group/inner w-5/6">
                    <p className="hover:underline">
                      Concrete & Masonry Products -{">"}
                    </p>
                    <ul className=" hidden group group-hover/inner:block ml-4">
                      <li className="hover:underline">
                        Concrete Preparation Products
                      </li>
                      <li className="hover:underline">
                        Decorative Concrete Products
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:underline">Primers</li>
                <li className="hover:underline">
                  Commercial High Performance Coatings
                </li>
              </ul>
            }
          </li>
          <li className="group  pb-5">
            <p className="hover:underline">Protective & Marine Coatings</p>
            {
              <ul className="hidden group-hover:block ml-4">
                <li className="hover:underline">Primers</li>
                <li className="hover:underline">
                  High Performance Floor Coatings
                </li>
                <li className="hover:underline">
                  Industrial High Performance Paints
                </li>
              </ul>
            }
          </li>
          <li className="group  pb-5">Equipment & Supplies </li>
          <li className="group  pb-5">Promotions </li>
        </ul>
      </div>
    </section>
  );
}
