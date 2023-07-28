import Header from "../components/Header";
import Construction from "../assets/images/construction.png";

export default function PageNotFound() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            404
          </h1>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <p className="mt-3 text-base leading-7 text-gray-600">
            It either does not exist or it is under construction
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <img
              src={Construction}
              alt="construction"
              className="max-h-40 max-w-40"
            />
          </div>
        </div>
      </main>
    </>
  );
}
