import React from "react";
import imgg from "../images/Port.jpg";

function Page3() {
  return (
    <div>
      <section>
        <div>
          <h3 className="text3-xl py-1 mt-4 font-bold">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-700">
            Throughout my career, I have collaborated with cross-functional
            teams to build scalable and intuitive web applications. I excel at
            translating complex requirements into clean, efficient code and
            leveraging frameworks like React to create dynamic user interfaces
          </p>
          <p className="text-md py-2 leading-8 text-gray-700">
            I offer from a wide range of services, including brand designing,
            programming and teaching
          </p>
        </div>
        <div className="felx flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <img src={imgg} alt="Imagee" className="rounded-lg object-cover" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src={imgg} alt="Imagee" className="rounded-lg object-cover" />
          </div>
          <div className="basis-1/3 flex-1">
            <img src={imgg} alt="Imagee" className="rounded-lg object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page3;
