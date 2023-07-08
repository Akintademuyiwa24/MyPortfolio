import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName("");
    setLastName("");
    setMessage("");
  };

  return (
    <div className="mt-10">
      <h2 className="text-center font-bold text-2xl text-sky-700 dark:text-white">
        Contact Me
      </h2>

      <div className="mt-8 md:flex gap-10 sm:flex gap-10">
        {/* first section */}
        <div>
          {/* 1st */}
          <div className="bg-blue-700 text-white mb-5 rounded-lg text-center align-center p-5">
            <MdOutlineEmail className="mx-auto mb-3" />
            <h4 className="text-sm">Email</h4>
            <h5 className="text-sm">harkintademuyiwa@gmail.com</h5>
            <a
              href="mailto:harkintademuyiwa@gmail.com"
              className="text-sky-400"
            >
              Send a message
            </a>
          </div>

          {/* 2nd */}
          <div className="bg-blue-700 text-white mb-5 rounded-lg text-center p-5">
            <BsWhatsapp className="mx-auto mb-3" />
            <h4 className="text-sm">WhatsApp</h4>
            <h5 className="text-sm">+2349069631465</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2349069631465"
              className="text-sky-400"
            >
              Send a message
            </a>
          </div>
          {/* end */}
        </div>
        {/* second dectio */}
        <div>
          <form class="w-full max-w-lg" onSubmit={handleSubmit}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {/* <p class="text-red-500 text-xs italic"> */}
                {/* Please fill out this field. */}
                {/* </p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Your Message Here.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={7}
                ></textarea>
                <p class="text-gray-600 text-xs italic dark:text-teal-100">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>
            <button
              className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* 2nd end */}
      </div>
    </div>
  );
}

export default Contact;
