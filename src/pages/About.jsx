import { useRef } from "react";
import SVGs from "../helpers/SVGs";

import elcos from "./../assets/images/companies/elcos-logo.png";
import gvd from "./../assets/images/companies/GVD.png";
import hascelik from "./../assets/images/companies/hascelik.png";
import meksan from "./../assets/images/companies/meksan.png";
import rio from "./../assets/images/companies/rio-claro.png";
import cu from "./../assets/images/companies/cu.svg";

import cert1 from "./../assets/images/certificates/ISO1400012015-1.jpg";
import cert2 from "./../assets/images/certificates/ISO900012015-1.jpg";
import cert3 from "./../assets/images/certificates/ISO450012018-1.jpg";

import about_image_1 from "./../assets/images/about.webp";
import about_image_2 from "./../assets/images/IMG_0087 (1).webp";
import about_image_3 from "./../assets/images/commissioning.webp";

import about_gallery_1 from "./../assets/images/IMG_0551.webp";
import about_gallery_2 from "./../assets/images/Image-012.webp";
import about_gallery_3 from "./../assets/images/Image-001.webp";
import about_gallery_5 from "./../assets/images/Image-009.webp";
import about_gallery_4 from "./../assets/images/Image-013.webp";
import about_gallery_6 from "./../assets/images/Image-008.webp";

import LeftTextSection from "../components/LeftTextSections";
import WideImageComponent from "../components/WideImageComponent";

import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import electricity from "./../assets/images/values/electricity.svg";
import share from "./../assets/images/values/collaboration.svg";
import right from "./../assets/images/values/right.svg";
import security from "./../assets/images/values/security.svg";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import map from "../assets/images/map.webp";

const About = () => {
  const scrollref = useRef(null);

  const scroll = (scrollOffset) => {
    scrollref.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className="h-screen-cus from-secondary to-primary">
        <div className=" px-10">
          <div className="relative z-2 md:grid md:grid-cols-2 gap-10 items-center py-14 md:py-28">
            <div data-aos="fade-right" className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">
                About Power Factor Limited
              </p>
              <p className="text-base font-light">
                Formed in 2006, Power Factor Limited is an aggressively evolving
                and rapidly growing engineering and construction services
                company with well-established entities in West Africa.
              </p>
            </div>

            <div
              data-aos="fade-left"
              className=" relative z-10 mt-10 md:mt-0 md:my-10 my-16"
            >
              <div className="rounded-lg overflow-hidden">
                <img
                  className="object-cover w-full h-full md:max-h-[400px] max-h-[250px] overflow-hidden"
                  src={about_image_1}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative -top-24 md:-top-60 lg:-top-72 z-0">
          <svg
            data-aos="fade-top"
            xmlns="http://www.w3.org/2000/svg"
            id="wave"
            style={{ transform: "rotate(0deg)", transition: "0.3s" }}
            viewBox="0 0 1440 450"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(172, 96, 181, 1)" offset="0%" />
                <stop stopColor="rgba(248, 155, 0, 1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: 1 }}
              fill="url(#sw-gradient-0)"
              d="M0,360L60,315C120,270,240,180,360,135C480,90,600,90,720,105C840,120,960,150,1080,172.5C1200,195,1320,210,1440,180C1560,150,1680,75,1800,90C1920,105,2040,210,2160,232.5C2280,255,2400,195,2520,165C2640,135,2760,135,2880,127.5C3000,120,3120,105,3240,135C3360,165,3480,240,3600,232.5C3720,225,3840,135,3960,120C4080,105,4200,165,4320,210C4440,255,4560,285,4680,285C4800,285,4920,255,5040,225C5160,195,5280,165,5400,127.5C5520,90,5640,45,5760,30C5880,15,6000,30,6120,75C6240,120,6360,195,6480,195C6600,195,6720,120,6840,120C6960,120,7080,195,7200,240C7320,285,7440,300,7560,300C7680,300,7800,285,7920,255C8040,225,8160,180,8280,135C8400,90,8520,45,8580,22.5L8640,0L8640,450L8580,450C8520,450,8400,450,8280,450C8160,450,8040,450,7920,450C7800,450,7680,450,7560,450C7440,450,7320,450,7200,450C7080,450,6960,450,6840,450C6720,450,6600,450,6480,450C6360,450,6240,450,6120,450C6000,450,5880,450,5760,450C5640,450,5520,450,5400,450C5280,450,5160,450,5040,450C4920,450,4800,450,4680,450C4560,450,4440,450,4320,450C4200,450,4080,450,3960,450C3840,450,3720,450,3600,450C3480,450,3360,450,3240,450C3120,450,3000,450,2880,450C2760,450,2640,450,2520,450C2400,450,2280,450,2160,450C2040,450,1920,450,1800,450C1680,450,1560,450,1440,450C1320,450,1200,450,1080,450C960,450,840,450,720,450C600,450,480,450,360,450C240,450,120,450,60,450L0,450Z"
            />
            <defs>
              <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(172, 96, 181, 1)" offset="0%" />
                <stop stopColor="rgba(248, 155, 0, 1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
              fill="url(#sw-gradient-1)"
              d="M0,225L60,255C120,285,240,345,360,360C480,375,600,345,720,315C840,285,960,255,1080,247.5C1200,240,1320,255,1440,225C1560,195,1680,120,1800,75C1920,30,2040,15,2160,15C2280,15,2400,30,2520,52.5C2640,75,2760,105,2880,150C3000,195,3120,255,3240,240C3360,225,3480,135,3600,97.5C3720,60,3840,75,3960,97.5C4080,120,4200,150,4320,150C4440,150,4560,120,4680,105C4800,90,4920,90,5040,120C5160,150,5280,210,5400,262.5C5520,315,5640,360,5760,330C5880,300,6000,195,6120,150C6240,105,6360,120,6480,120C6600,120,6720,105,6840,97.5C6960,90,7080,90,7200,97.5C7320,105,7440,120,7560,172.5C7680,225,7800,315,7920,322.5C8040,330,8160,255,8280,195C8400,135,8520,90,8580,67.5L8640,45L8640,450L8580,450C8520,450,8400,450,8280,450C8160,450,8040,450,7920,450C7800,450,7680,450,7560,450C7440,450,7320,450,7200,450C7080,450,6960,450,6840,450C6720,450,6600,450,6480,450C6360,450,6240,450,6120,450C6000,450,5880,450,5760,450C5640,450,5520,450,5400,450C5280,450,5160,450,5040,450C4920,450,4800,450,4680,450C4560,450,4440,450,4320,450C4200,450,4080,450,3960,450C3840,450,3720,450,3600,450C3480,450,3360,450,3240,450C3120,450,3000,450,2880,450C2760,450,2640,450,2520,450C2400,450,2280,450,2160,450C2040,450,1920,450,1800,450C1680,450,1560,450,1440,450C1320,450,1200,450,1080,450C960,450,840,450,720,450C600,450,480,450,360,450C240,450,120,450,60,450L0,450Z"
            />
            <defs>
              <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
                <stop stopColor="rgba(172, 96, 181, 1)" offset="0%" />
                <stop stopColor="rgba(172, 96, 181, 1)" offset="100%" />
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 100px)", opacity: 0.8 }}
              fill="url(#sw-gradient-2)"
              d="M0,180L60,157.5C120,135,240,90,360,105C480,120,600,195,720,187.5C840,180,960,90,1080,105C1200,120,1320,240,1440,307.5C1560,375,1680,390,1800,345C1920,300,2040,195,2160,150C2280,105,2400,120,2520,112.5C2640,105,2760,75,2880,105C3000,135,3120,225,3240,270C3360,315,3480,315,3600,277.5C3720,240,3840,165,3960,127.5C4080,90,4200,90,4320,120C4440,150,4560,210,4680,210C4800,210,4920,150,5040,120C5160,90,5280,90,5400,75C5520,60,5640,30,5760,30C5880,30,6000,60,6120,127.5C6240,195,6360,300,6480,315C6600,330,6720,255,6840,240C6960,225,7080,270,7200,277.5C7320,285,7440,255,7560,210C7680,165,7800,105,7920,97.5C8040,90,8160,135,8280,150C8400,165,8520,150,8580,142.5L8640,135L8640,450L8580,450C8520,450,8400,450,8280,450C8160,450,8040,450,7920,450C7800,450,7680,450,7560,450C7440,450,7320,450,7200,450C7080,450,6960,450,6840,450C6720,450,6600,450,6480,450C6360,450,6240,450,6120,450C6000,450,5880,450,5760,450C5640,450,5520,450,5400,450C5280,450,5160,450,5040,450C4920,450,4800,450,4680,450C4560,450,4440,450,4320,450C4200,450,4080,450,3960,450C3840,450,3720,450,3600,450C3480,450,3360,450,3240,450C3120,450,3000,450,2880,450C2760,450,2640,450,2520,450C2400,450,2280,450,2160,450C2040,450,1920,450,1800,450C1680,450,1560,450,1440,450C1320,450,1200,450,1080,450C960,450,840,450,720,450C600,450,480,450,360,450C240,450,120,450,60,450L0,450Z"
            />
          </svg>
        </div>
      </div>
      <div className="bg-secondary py-20">
        <div className="px-10 py-20 hidden lg:block">
          <Swiper
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={3}
            modules={[Autoplay]}
            autoplay
          >
            <SwiperSlide>
              <img
                src={about_gallery_1}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_2}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_3}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_4}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_5}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_6}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="px-10 py-10 block lg:hidden">
          <Swiper
            className="mySwiper"
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            autoplay
            pagination
          >
            <SwiperSlide>
              <img
                src={about_gallery_1}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_2}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_3}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_4}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_5}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={about_gallery_6}
                className="rounded-lg max-h-80 w-[30rem] object-cover"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          {/* 
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            src={about_gallery_2}
            className="rounded-lg max-h-80 w-full object-cover"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            src={about_gallery_3}
            className="rounded-lg max-h-80 w-full object-cover"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            src={about_gallery_4}
            className="rounded-lg max-h-80 w-full object-cover"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            src={about_gallery_5}
            className="rounded-lg max-h-80 w-full object-cover"
            alt=""
          />
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            src={about_gallery_6}
            className="rounded-lg max-h-80 w-full object-cover"
            alt=""
          /> */}
        </div>
      </div>
      <div>
        <div className="conainer px-10">
          <div className="md:grid md:grid-cols-2 gap-10 items-center py-14 md:py-28">
            <div className="mt-10 md:mt-0 md:my-10 my-16">
              <div
                data-aos="fade-right"
                className="grid grid-cols-2 pt-10 gap-2 h-80 md:h-auto"
              >
                <div
                  data-aos="zoom-out-right"
                  className="rounded-lg overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={about_image_2}
                    alt="img"
                  />
                </div>
                <div
                  data-aos="zoom-out-left"
                  className="rounded-lg overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full"
                    src={about_image_3}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">About Us </p>
              <p className="text-base font-light">
                Over the years Power Factor Limited has carved a solid
                reputation in the delivery of infrastructure projects in the
                ﬁelds of Electrical, Mechanical and Civil Engineering, Oil and
                gas support services and Logistics Services. The knowledge,
                expertise and professionalism of our people enable us to project
                manage and deliver projects of all sizes and complexity. <br />
                <br />
                Power Factor Limited’s team consists of qualiﬁed engineering and
                commercial professionals who are led by a strong pool of project
                management professionals. With a growing footprint across Africa
                Power Factor Limited is able to provide the local knowledge
                required to deliver some of the most challenging and exciting
                projects
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="purpose">
        <LeftTextSection imageSource="https://picsum.photos/300/200">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Purpose
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At our company, we rise to the challenge of building a world that
              works. We are committed to making a positive impact on the world
              and creating a better future for all.
            </p>
          </div>
        </LeftTextSection>
      </div>

      <div
        className="py-16 bg-gradient-to-br via-secondary from-secondary to-primary"
        id="values"
      >
        <div>
          <p className="text-center font-bold text-4xl text-white">
            What we Value
          </p>
          <p
            data-aos="fade-top"
            className="text-white text-center text-base mx-16 py-4"
          >
            To be the preferred company of choice for the provision of design,
            project management, construction and logistics services. This we
            plan to achieve by :
          </p>
          <div
            data-aos="fade-top"
            data-aos-offset="100"
            className="grid md:grid-cols-2 lg:grid-cols-4 py-10 px-10 gap-8 justify-center"
          >
            <div className="flex flex-col items-center md:items-start">
              <img src={security} className="w-16 h-16" alt="" />
              <p className="text-white text-xl py-5 text-center md:text-left">
                Fostering a culture where safety comes first.
              </p>
            </div>
            <div
              data-aos="fade-top"
              data-aos-offset="200"
              className="flex flex-col items-center md:items-start"
            >
              <img src={share} className="w-16 h-16" alt="" />
              <p className="text-white text-xl py-5 text-center md:text-left">
                Working in a collaborative way.
              </p>
            </div>
            <div
              data-aos="fade-top"
              data-aos-offset="300"
              className="flex flex-col items-center md:items-start"
            >
              <img src={right} className="w-16 h-16" alt="" />
              <p className="text-white text-xl py-5 text-center md:text-left">
                Being ethical in the way we do business and promoting this
                behavior within our work force.
              </p>
            </div>
            <div
              data-aos="fade-top"
              data-aos-offset="400"
              className="flex flex-col items-center md:items-start"
            >
              <img src={electricity} className="w-16 h-16" alt="" />
              <p className="text-white text-xl py-5 text-center md:text-left">
                Empowering our workforce to be innovative.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="where-we-operate" className="bg-[#1e1c49]">
        <div className="text-center py-10">
          <h1
            className={`text-gray-300 text-lg font-bold tracking-tight sm:text-4xl`}
          >
            Where We Operate
          </h1>
          <h2 className="text-gray-300 mt-6 text-3xl leading-8">
            We have established local presence in four (4) major countries
            worldwide
          </h2>
          <p className="text-gray-300 mt-6 text-lg leading-8 px-10">
            Our local joint ventures and partnership support local economies and
            deliver sustainable energy development. Our company is committed to
            supporting local economies and delivering sustainable energy
            development through our local joint ventures and partnerships. We
            believe that partnerships are core to our business and enable us to
            achieve more together. We work with local stakeholders, governments,
            and NGOs who can bring their expertise to our projects, augment our
            reach, and improve our results. We recognize that revitalizing the
            global partnership for sustainable development is critical to
            achieving the Sustainable Development Goals. We are committed to
            enhancing the global partnership for sustainable development,
            complemented by multi-stakeholder partnerships that mobilize and
            share knowledge, expertise, technology, and financial resources to
            support the achievement of the sustainable development goals in all
            countries, in particular developing countries. We believe that
            economic development and social investment are essential to building
            local capacity and boosting local economies and incomes. We create
            jobs and build local workforce skills and capacity through our
            supply chain activities. We are committed to having a workforce that
            reflects the communities where we operate. We use customized
            approaches to develop national and local goods and services, known
            as “content,” for our major capital. We believe that building strong
            relationships with our clients earns their trust and saves them time
            and money. We are committed to treating our clients as individuals
            and delivering exceptional results that exceed their expectations.
            We believe that by providing exceptional service, we can build
            long-term relationships with our clients and contribute to building
            a better world.
          </p>
        </div>
        <WideImageComponent image={map}>
          <div>
            <div className="text-center">
              <h1
                className={`text-gray-300 text-lg font-bold tracking-tight sm:text-3xl`}
              >
                Our Locations
              </h1>
              <p className={`text-gray-300 mt-3 text-lg leading-8`}>Ghana</p>
              <p className={`text-gray-300 mt-3 text-lg leading-8`}>Liberia</p>
              <p className={`text-gray-300 mt-3 text-lg leading-8`}>
                Serria Leone
              </p>
              <p className={`text-gray-300 mt-3 text-lg leading-8`}>
                United Kingdom
              </p>
            </div>
          </div>
        </WideImageComponent>
      </div>

      <div
        className="bg-gradient-to-br via-secondary from-secondary to-primary py-20"
        id="partners"
      >
        <p className="text-center text-3xl mx-5">
          Strategic Alliances & Partnerships
        </p>
        <div className="flex justify-center gap-10 flex-wrap py-10 px-5">
          <dir>
            <img
              data-aos="zoom-in"
              src={elcos}
              className="w-auto h-16"
              alt="..."
            />
          </dir>
          <dir>
            <img
              data-aos="zoom-in"
              src={gvd}
              className="w-auto h-16"
              alt="..."
            />
          </dir>
          <dir>
            <img
              data-aos="zoom-in"
              src={hascelik}
              className="w-auto h-16"
              alt="..."
            />
          </dir>
          <dir>
            <img
              data-aos="zoom-in"
              src={meksan}
              className="w-auto h-16"
              alt="..."
            />
          </dir>
          <dir>
            <img
              data-aos="zoom-in"
              src={rio}
              className="w-auto h-16"
              alt="..."
            />
          </dir>
          <dir>
            <img
              data-aos="zoom-in"
              src={cu}
              className="w-auto h-16"
              alt="..."
            />
          </dir>
        </div>
      </div>

      <div
        className="w-full relative min-h-screen-cus bg-primary"
        id="certificates"
      >
        <p className="absolute text-white font-black md:text-6xl py-10 mx-5 text-4xl right-20 top-0">
          OUR CERTIFICATES
        </p>
        <div className="absolute flex gap-3 right-20 top-20">
          <span
            onClick={() => scroll(-500)}
            className="rounded-full border-2 border-secondary_text cursor-pointer transition ease-in-out duration-300 hover:bg-secondary hover:border-secondary"
          >
            {SVGs.left_purple}
          </span>
          <span
            onClick={() => scroll(500)}
            className="rounded-full border-2 border-secondary_text cursor-pointer transition ease-in-out duration-300 hover:bg-secondary hover:border-secondary"
          >
            {SVGs.right_purple}
          </span>
        </div>
        <div
          ref={scrollref}
          className="flex pt-60 pb-40 pb-28 md:pb-40 pl-10  gap-10 items-center hide-scrollbar h-full overflow-x-scroll w-full "
        >
          <div className="">
            <div className="lg:w-[500px] lg:h-[600px] w-[350px] h-[450px] md:w-[450px] md:h-[550px]">
              <img
                className="w-full h-full object-contain "
                src={cert1}
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="lg:w-[500px] lg:h-[600px] w-[350px] h-[450px] md:w-[450px] md:h-[550px]">
              <img
                className="w-full h-full  object-contain"
                src={cert2}
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="lg:w-[500px] lg:h-[600px] w-[350px] h-[450px] md:w-[450px] md:h-[550px]">
              <img
                className="w-full h-full object-contain "
                src={cert3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
