import React from "react";
import UIdesign from "../images/ui.png";
import Respons from "../images/responsive_apps2.png";
import Optimize from "../images/website-Speed.png";

function Cards() {
  return (
    <div className="md:flex gap-3">
      <div className="text-center shadow-lg p-5 rounded-xl my-10 bg-gray-100 dark:bg-gray-200">
        <img src={UIdesign} alt="design" />
        <h3 className="font-medium text-md pt-8 pb-2">User Interface (UI)</h3>
        <p className="py-2 text-md" style={{ fontFamily: "rail" }}>
          I specialize in creating visually appealing and interactive user
          interfaces for websites or applications
        </p>
        <h4 className="py-2 text-teal-600">Tools</h4>
        <p className="text-gray-800">HTML</p>
        <p className="text-gray-800">CSS</p>
        <p className="text-gray-800">JavaScript</p>
        <p className="text-gray-800">React</p>
      </div>
      {/*  */}
      <div className="text-center shadow-lg p-5 rounded-xl my-10 bg-gray-100 dark:bg-gray-200">
        <img src={Respons} alt="design" className="rounded-lg" />
        <h3 className="font-medium text-md pt-8 pb-2">Responsive Web Design</h3>
        <p className="py-2 text-md" style={{ fontFamily: "rail" }}>
          I ensure that websites or applications are responsive and accessible
          across different devices and screen sizes
        </p>
        <h4 className="py-2 text-teal-600">Techniques</h4>
        <p className="text-gray-800">Media queries</p>
        <p className="text-gray-800">CSS flexbox and grid</p>
        <p className="text-gray-800">Frameworks</p>
      </div>
      {/*  */}
      <div className="text-center shadow-lg p-5 rounded-xl my-10 bg-gray-100 dark:bg-gray-200">
        <img src={Optimize} alt="design" />
        <h3 className="font-medium text-md pt-8 pb-2">
          Performance Optimization
        </h3>
        <p className="py-2 text-md" style={{ fontFamily: "rail" }}>
          I optimize the performance of websites or applications to enhance user
          experience and reduce loading times
        </p>
        <h4 className="pt-8 pb-2 text-teal-600">Techniques</h4>
        <p className="text-gray-800">Minification</p>
        <p className="text-gray-800">Code optimization</p>
        <p className="text-gray-800">Image optimization</p>
        <p className="text-gray-800">Caching strategies</p>
      </div>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <section>
        <div>
          <h3 className="text-2xl text-sky-800 text-center pt-5 mt-4 font-bold md:mt-1 md:pt-1 dark:text-white">
            Services I Offer
          </h3>
          <p className="text-md py-2 leading-8 text-gray-700 dark:text-teal-100 justify-center">
            Throughout my career, I have collaborated with cross-functional
            teams to build scalable and intuitive web applications. I excel at
            translating complex requirements into clean, efficient code and
            leveraging frameworks like React to create dynamic user interfaces
          </p>
          <p className="text-md py-2 leading-8 text-gray-700 dark:text-teal-100">
            I offer from a wide range of services, including brand designing,
            programming and testing...
          </p>
        </div>

        <div className="md:flex gap-5">
          <Cards />
        </div>
      </section>
    </div>
  );
}

export default Page2;
