import React from "react";
import Foodie from "../images/foodie.png";
import ShowB from "../images/Showbox.png";
function Services() {
  return (
    <div>
      <h2 className="my-8 text-center font-bold text-sky-800 text-2xl md:mt-10 dark:text-white">
        Portfolio
      </h2>
      <div className="md:flex gap-8 sm:flex gap-8">
        <div className="bg-sky-900 rounded-lg p-4 mb-4">
          <div>
            <img
              src={Foodie}
              alt="foodapp"
              className="rounded-lg mb-4"
              width={450}
            />
          </div>
          <div>
            <h3 className="mb-4 text-white">This is a restaurant app</h3>
            <a
              href="https:lemon-app.netlify.app"
              className="bg-violet-500 hover:bg-violet-600  text-white p-2 my-4 rounded-lg"
            >
              Live Demo
            </a>
          </div>
        </div>
        {/* for movie app */}
        <div className="bg-sky-900 rounded-lg p-4 mb-4">
          <div>
            <img
              src={ShowB}
              alt="foodapp"
              className="rounded-lg mb-4"
              width={480}
            />
          </div>
          <div>
            <h3 className="mb-4 text-white">This is a search movie app</h3>
            <a
              href="https:lemon-app.netlify.app"
              className="bg-violet-500 hover:bg-violet-600  text-white p-2 my-4 rounded-lg"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
