export default function index({ children }) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our leadership play a pivotal role in driving success and
            fostering growth. Their visionary guidance inspires teams to achieve
            greatness, their effective communication builds strong
            relationships, their integrity sets the tone for ethical practices,
            and their empathy creates a supportive work culture. With their
            strategic decision-making and ability to empower others, they pave
            the way for innovation and drive the organization towards
            excellence. Their exceptional leadership transforms challenges into
            opportunities, making them invaluable assets to the company's
            success.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {children}
        </ul>
      </div>
    </div>
  );
}
