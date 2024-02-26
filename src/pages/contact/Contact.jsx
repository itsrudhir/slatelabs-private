import React from "react";
import HeadBoth from "../../component/header/headBoth";
import FootMain from "../../component/footer/FootMain";
import HeaderTH from "../../component/header/header thapa/headerTh";



const Contact = () => {
  return (
    <div>
      <header>
        <HeaderTH/>
        {/* <HeadBoth /> */}
      </header>

      <body>
        <div id="pictue" className="m-1">
          <img src="./contact.jpg" alt="" />
        </div>

        <div id="head-text" className="">
          <h1 className="text-4xl text-center">Contact Us</h1>
        </div>

        <div id="form">
          <div class="flex items-center justify-center p-12">
            {/* <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com --> */}
            <div class="mx-auto w-full max-w-[550px]">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-5">
                  <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="subject"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Query
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="State your query"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div class="mb-5">
                  <label
                    for="message"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button class="hover:shadow-form rounded-md bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>

        <footer>
            <FootMain/>
        </footer>

    </div>
  );
};

export default Contact;
