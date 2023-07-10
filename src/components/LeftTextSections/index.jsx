export default function index({children, imageSource}) {
  return (
    <div className="overflow-hidden py-10 my-5">
      <div className="mx-auto px-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 flex items-center">
            <div className="lg:max-w-lg">
              <div>
                {children}
              </div>
            </div>
          </div>
          <div className="place-self-center">
          <img
            src={imageSource}
            alt="Product screenshot"
            className="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
