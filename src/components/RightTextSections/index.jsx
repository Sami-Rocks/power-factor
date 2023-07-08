import {
    CloudArrowUpIcon,
    LockClosedIcon,
    ServerIcon,
  } from "@heroicons/react/20/solid";
  
  const features = [
    {
      name: "Push to deploy.",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "SSL certificates.",
      description:
        "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
      icon: LockClosedIcon,
    },
    {
      name: "Database backups.",
      description:
        "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
      icon: ServerIcon,
    },
  ];
  
  export default function index() {
    return (
      <div className="overflow-hidden py-15 sm:py-20 my-5">
        <div className="mx-auto px-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 place-items-center sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
          <img
              src="https://picsum.photos/id/237/300/200"
              alt="Product screenshot"
              className="w-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem] md:-mr-4 lg:-mr-0"
              width={2432}
              height={1442}
            />
          </div>
            <div className="lg:pl-8 lg:pt-4 place-self-center">
              <div>
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  