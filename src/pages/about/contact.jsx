const Contact = () => {
  return (
    <div>
      <div className=" ">
        <div className="conainer px-10">
          <div className="md:grid md:grid-cols-2 gap-10 items-center py-14 md:py-28">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">
                We would love to hear from you.{" "}
                <span className="text-primary">Get in touch.</span>
              </p>
              <p className="text-base font-light">
                Get in touch. Pay us a visit.
              </p>

              <div className="py-4">
                <p className="font-medium">Ghana</p>
                <p className="font-light">
                  Asokwa <br />
                  Madina <br />
                  <br />
                  info@test.com <br />
                  +2442407403
                </p>
              </div>
              <div className="py-4">
                <p className="text-medium">Ghana</p>
                <p className="font-light">
                  Asokwa <br />
                  Madina <br />
                  <br />
                  info@test.com <br />
                  +2442407403
                </p>
              </div>
            </div>

            <div className="mt-10 md:mt-0 md:my-10 my-16">
              <form action="">
                <div className="py-4">
                  <label className="ml-1" htmlFor="">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border p-2 rounded-lg w-full"
                    name=""
                    id=""
                  />
                </div>
                <div className="py-4">
                  <label className="ml-1" htmlFor="">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border p-2 rounded-lg w-full"
                    name=""
                    id=""
                  />
                </div>
                <div className="py-4">
                  <label className="ml-1" htmlFor="">
                    Message
                  </label>
                  <br />
                  <textarea
                    type="text"
                    className="border p-2 h-40 rounded-lg w-full"
                    name=""
                    id=""
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="rounded-full cursor-pointer bg-primary text-white py-3 px-8 text-base"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
