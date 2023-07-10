
  
  export default function index({children, imageSource}) {
    return (
      <div className="overflow-hidden py-10  my-5">
        <div className="mx-auto px-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 place-items-center sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
          <img
              src={imageSource}
              alt="Product screenshot"
              className="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem] md:-mr-4 lg:-mr-0"
              width={2432}
              height={1442}
            />
          </div>
            <div className="lg:pl-8 lg:pt-4 place-self-center">
              {children}
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  