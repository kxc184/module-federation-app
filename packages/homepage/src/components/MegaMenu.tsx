export default function MegaMenu() {
  return (
    <section className="container mx-auto bg-zinc-800 absolute left-0 min-h-[225px] h-fit w-1/4 text-white">
      <div>
        <ul className="ml-8">
          <li className="group pb-5 text-md ">
            <p className="hover:underline hover:cursor-pointer">
              Interior Paint & Coatings -{">"}
            </p>
            {
              <ul className="hidden group-hover:block ml-4">
                <li className="hover:underline hover:cursor-pointer">
                  Paint & Coatings
                </li>
                <li>
                  <div className="group/inner w-5/6">
                    <p className="hover:underline hover:cursor-pointer">
                      Concrete & Masonry Products -{">"}
                    </p>
                    <ul className=" hidden group group-hover/inner:block ml-4">
                      <li className="hover:underline hover:cursor-pointer">
                        Concrete Preparation Products
                      </li>
                      <li className="hover:underline hover:cursor-pointer">
                        Decorative Concrete Products
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Primers
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Aerosols
                </li>
              </ul>
            }
          </li>
          <li className="group pb-5">
            <p className="hover:underline hover:cursor-pointer">
              Exterior Paint & Coatings
            </p>
            {
              <ul className="hidden group-hover:block ml-4">
                <li>
                  <div className="group/inner w-5/6">
                    <p className="hover:underline hover:cursor-pointer">
                      Deck Stains & Supplies -{">"}
                    </p>
                    <ul className=" hidden group group-hover/inner:block ml-4">
                      <li className="hover:underline hover:cursor-pointer">
                        Applicators
                      </li>
                      <li className="hover:underline hover:cursor-pointer">
                        Finishes
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="group/inner w-5/6">
                    <p className="hover:underline hover:cursor-pointer">
                      Concrete & Masonry Products -{">"}
                    </p>
                    <ul className=" hidden group group-hover/inner:block ml-4">
                      <li className="hover:underline hover:cursor-pointer">
                        Concrete Preparation Products
                      </li>
                      <li className="hover:underline hover:cursor-pointer">
                        Decorative Concrete Products
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Primers
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Commercial High Performance Coatings
                </li>
              </ul>
            }
          </li>
          <li className="group  pb-5">
            <p className="hover:underline hover:cursor-pointer">
              Protective & Marine Coatings
            </p>
            {
              <ul className="hidden group-hover:block ml-4">
                <li className="hover:underline hover:cursor-pointer">
                  Primers
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  High Performance Floor Coatings
                </li>
                <li className="hover:underline hover:cursor-pointer">
                  Industrial High Performance Paints
                </li>
              </ul>
            }
          </li>
          <li className="group pb-5 hover:underline hover:cursor-pointer">
            Equipment & Supplies
          </li>
          <li className="group pb-5 hover:underline hover:cursor-pointer">
            Promotions
          </li>
        </ul>
      </div>
    </section>
  );
}
