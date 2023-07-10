import { useRef } from "react";
import SVGs from "../helpers/SVGs";

import electricity from "./../assets/images/values/electricity.svg";
import share from "./../assets/images/values/collaboration.svg";
import right from "./../assets/images/values/right.svg";
import security from "./../assets/images/values/security.svg";

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
import RightTextSection from "../components/RightTextSections";
import ContentSection from "../components/ContentSections";
import WideImageComponent from "../components/WideImageComponent";
import TeamComponent from "../components/TeamComponent";

import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import map from "../assets/images/map.webp";

const people = [
  {
    name: 'Dr. Frank Kulor',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ekua Attah Obimpeh (Mrs.)',
    role: 'Human Resource Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Michael Kumordzi',
    role: 'Head of Civil Department',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Emmanuel Amissah',
    role: 'Head of Electrical Department',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Thomas Obodai',
    role: 'Financial & Logistic Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Randsford Gyambrah',
    role: 'HSE Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]


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

      <div id="history">
        <ContentSection heading="History" imageSource="https://picsum.photos/300/200">
          <div>
            <p>
              Power Factor Limited is an aggressively evolving and rapidly
              growing company gradually becoming a well-established entity in
              the Ghanaian, Sierra Leone, Liberia and the United Kingdom. It is
              extensively carving its reputation and establishment in the field
              Electrical/Electronic, Computer, Mechanical engineering and Civil.
              By combining our experience and local knowledge we are becoming
              the sub-contractor of choice for major international contractors
              such Subsea 7, Halliburton and GE Power Factor limited has been
              registered as a limited liability company since 23rd June 2006 and
              with branches in Sierra Leone as Power Factor (SL) Limited,
              Liberia, and the United Kingdom (UK). It has been in operation for
              the past Seventeen (17) years and has established strong ties with
              major institutions.
            </p>
            <p>The company carries out major activities such as;</p>
            <ul
              role="list"
              className="mt-8 space-y-8 text-gray-600 list-decimal list-inside"
            >
              <li>Energy management systems</li>
              <li>Engineering design and construction</li>
              <li>
                {" "}
                EPC contracting in civil, mechanical, electrical and
                Instrumentation
              </li>
              <li>Environmental impact assessment</li>
              <li>
                Assets integrity management and Safety integrity level
                assessment
              </li>
              <li>Supply of general goods and services</li>
              <li>Shipping and logistics</li>
              <li>Information Technology Financial Management</li>
              <li>General Procurement and Stocking of Spares</li>
              <li>Constructions and Infrastructure development</li>
            </ul>
            <p className="mt-8">
              Part of its achievements is the execution of major projects both
              locally and internationally
            </p>
          </div>
        </ContentSection>
      </div>

      <div id="vision">
        <div className="max-w-7xl text-left px-10 my-5">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Our Vision
          </h2>
        </div>
        <RightTextSection imageSource="https://picsum.photos/300/200">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              To be the preferred company of choice for the provision of Design,
              Project Management, Logistics and construction Services.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We aspire to become the preferred company for the provision of
              Design, Project Management, Logistics, and Construction Services.
              We are committed to delivering high-quality services that meet the
              needs of our clients and exceed their expectations. Our services
              are designed to provide end-to-end solutions that cover all
              aspects of the project lifecycle, from site acquisition to
              construction and build-out. We have a team of experienced
              professionals who are dedicated to delivering projects on time,
              within budget, and to the highest quality standards. Our services
              are tailored to meet the unique needs of each client, and we work
              closely with them to ensure that we understand their requirements
              and deliver solutions that meet their specific needs. We are
              committed to transparency and accountability in all our
              operations, and we strive to build long-term relationships with
              our clients based on trust, integrity, and mutual respect. We
              believe that by providing exceptional services, we can help our
              clients achieve their goals and contribute to building a better
              world.
            </p>
          </div>
        </RightTextSection>
        <LeftTextSection imageSource="https://picsum.photos/300/200">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              To create value for our customers by providing exceptional service
              while using a professional approach.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We strive to deliver superior quality projects to our clients
              while meeting budget and schedule goals. We are committed to
              providing exceptional service to our customers while using a
              professional approach. We strive to deliver superior quality
              projects to our clients while meeting budget and schedule goals.
              Our focus is on creating value for our customers by delivering
              projects that meet their needs and exceed their expectations. To
              achieve this, we follow a customer-centric approach that involves
              understanding their needs, defining the scope of work, and
              developing a project plan that meets their requirements. We
              believe that good project management is essential to delivering
              successful projects, and we have standard processes in place to
              deal with all contingencies. We recognize that customer
              satisfaction is a critical building block to our success, and we
              use customer feedback to improve our services continually. We
              believe that by providing exceptional service, we can build
              long-term relationships with our customers and to be widely
              recognized within the community for our continuing commitment to
              customer service and client satisfaction contribute to building a
              better world.
            </p>
          </div>
        </LeftTextSection>
      </div>

      <div id="mission">
        <div className="max-w-7xl text-left px-10 mt-10 mb-5">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
        </div>
        <RightTextSection imageSource="https://picsum.photos/300/200">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              To provide a responsive, safe, cost effective and reliable
              solutions to our clients by forming a symbiotic relationship and
              fulfilling customers’ individual needs in all our business lines
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At our company, we are committed to providing our clients with
              responsive, safe, cost-effective, and reliable solutions. We
              believe that forming a symbiotic relationship with our clients is
              essential to fulfilling their individual needs in all our business
              lines. To achieve this, we follow a customer-centric approach that
              involves understanding our clients' needs, defining the scope of
              work, and developing a project plan that meets their requirements.
              We believe that good project management is essential to delivering
              successful projects, and we have standard processes in place to
              deal with all contingencies. We recognize that customer
              satisfaction is a critical building block to our success, and we
              use customer feedback to improve our services continually. We
              believe that by providing exceptional service, we can build
              long-term relationships with our clients and contribute to
              building a better world. We develop secure, scalable, and
              cost-effective solutions that support our clients, employees, and
              partners to work effectively. We believe that diversity of people
              with unique experiences, diverse backgrounds, and individual
              differences creates a dynamic and innovative workplace.
            </p>
          </div>
        </RightTextSection>
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
        <div>
          <div className="max-w-7xl text-left px-10 my-5">
            <h2 className="text-3xl tracking-tight font-bold text-gray-300 sm:text-4xl">
              Values
            </h2>
            <p className="mt-2 text-lg  tracking-tight text-gray-300 sm:text-2xl">
              To provide a responsive, safe, cost effective and reliable
              solutions to our clients by forming a symbiotic relationship and
              fulfilling customers’ individual needs in all our business lines
            </p>
          </div>
          <LeftTextSection imageSource="https://picsum.photos/300/200">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Integrity
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              we hold ourselves to the highest ethical standards and believe
              that our continued success is based on sustaining the
              relationships that keep our business growing. We recognize that
              open and honest communication is vital to the lasting success of
              the firm. We believe that transparency and accountability are
              critical components of building trust with our clients, employees,
              shareholders, and regulators. We are committed to promoting
              ethical behavior and environments in the workplace, which includes
              respecting others, being honest, and communicating bad news as
              well as good news. We believe that ethical behavior is essential
              to building a reputation for integrity and driving financial
              performance. We establish a company-wide code of ethics and
              provide ongoing training and education to our employees to ensure
              that we uphold the highest standards of ethical conduct. We
              believe that by acting ethically and responsibly, we can build
              long-term relationships with our stakeholders and contribute to
              building a better world.
            </p>
          </LeftTextSection>
          <RightTextSection imageSource="https://picsum.photos/300/200">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Professionalism
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              we are dedicated to providing professional services that reflect
              our commitment to competence, dependability, and excellence. We
              believe that our projects are a reflection of who we are as a
              company. To achieve this, we follow a customer-centric approach
              that involves understanding our clients' needs, defining the scope
              of work, and developing a project plan that meets their
              requirements. We believe that good project management is essential
              to delivering successful projects, and we have standard processes
              in place to deal with all contingencies. We recognize that
              customer satisfaction is a critical building block to our success,
              and we use customer feedback to improve our services continually.
              We believe that by providing exceptional service, we can build
              long-term relationships with our clients and contribute to
              building a better world. We are committed to transparency and
              accountability in all our operations, and we strive to build
              long-term relationships with our clients based on trust,
              integrity, and mutual respect. We believe that by acting ethically
              and responsibly, we can build long-term relationships with our
              stakeholders and contribute to building a better world.
            </p>
          </RightTextSection>
          <ContentSection imageSource="https://picsum.photos/300/200">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Safety
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We place utmost efforts to identify barriers and challenges for
              improving workplace safety and health culture. We believe that a
              safe and healthy workplace is essential to building a more
              inclusive culture and attracting and retaining top talent. We
              recognize that managing safety and health is an ongoing process
              that requires continuous improvement and a commitment to
              excellence. We believe that by providing exceptional service, we
              can build long-term relationships with our customers and
              contribute to building a better world. Here are some ways we
              identify barriers and challenges for improving workplace safety
              and health culture:
            </p>
            <ol
              role="list"
              className="mt-8 space-y-8 text-gray-100 list-decimal list-inside"
            >
              <li>
                We invest in safety and health management systems that help us
                focus on maintaining a safe and healthy workplace
              </li>
              <li>
                We encourage employee’s participation in safety and health by
                letting them know they will be expected to follow safe work
                practices
              </li>
              <li>
                We respond to all reports of unsafe or unhealthy conditions or
                work practices and make it our business to find out why injuries
                or illnesses occur.
              </li>
              <li>
                We go beyond the regulations and address all hazards, whether or
                not they are covered by laws
              </li>
              <li>
                We involve employees by including safety and health
                responsibilities in job descriptions and making following safe
                work practices a part of their job.
              </li>
              <li>
                We invest in employees’ safety training and correct techniques
                to demonstrate our commitment to safety
              </li>
              <li>
                We create training programs that help employees understand their
                role in creating a safe working environment and know how they
                can contribute to achieving goals.
              </li>
              <li>
                We foster a culture of safety that encourages employees to take
                risks within the team and feel safe doing so.
              </li>
              <li>
                We adopt systematic methods for building a culture that fosters
                ethical behavior and integrity-preserving workplace
              </li>
            </ol>
          </ContentSection>
          <LeftTextSection imageSource="https://picsum.photos/300/200">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Quality
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Customer value is a critical factor in our company, and we strive
              to deliver products and services that meet our customers' needs
              and exceed their expectations. We believe that customer value is a
              measure of all the costs and benefits associated with a product or
              service, including price, quality, and what the product or service
              can do for the customer. We recognize that customers weigh product
              value relative to cost to make balanced purchasing decisions. We
              believe that delivering customer value is key to maintaining
              long-term relationships with existing customers and earning repeat
              business. We are committed to transparency and accountability in
              all our operations, and we strive to build long-term relationships
              with our clients based on trust, integrity, and mutual respect. We
              believe that by providing exceptional service, we can build
              long-term relationships with our customers and contribute to
              building a better world. We recognize that customer value can
              encompass many factors, including our brand's reliability, the
              effort level customers need to put in to get what they want, how
              innovative our products are, how useful our services are, how
              customers feel about our public image, and how successful their
              interactions with us are. We believe that understanding customer
              value and how to calculate it can help our business price products
              fairly and reduce friction within the customer experience.
            </p>
          </LeftTextSection>
          <ContentSection imageSource="https://picsum.photos/300/200">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              Innovation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our Company is committed to introducing new technologies and
              upgrades that are designed to achieve both product differentiation
              and low costs. We believe that innovation is essential to driving
              growth and creating value for our customers, shareholders, and
              employees. To achieve this, we follow a customer-centric approach
              that involves understanding our clients' needs, defining the scope
              of work, and developing a project plan that meets their
              requirements. We recognize that innovation is a critical component
              of building a competitive advantage and driving financial
              performance. We believe that by providing exceptional service, we
              can build long-term relationships with our customers and
              contribute to building a better world. Here are some ways we
              introduce new technologies and upgrades to achieve product
              differentiation and low costs:
            </p>
            <ol
              role="list"
              className="mt-8 space-y-8 text-gray-300 list-decimal list-inside"
            >
              <li>
                We invest in research and development to identify new
                technologies and upgrades that can improve our products and
                services
              </li>
              <li>
                We collaborate with our clients to understand their needs and
                develop customized solutions that meet their specific
                requirements
              </li>
              <li>
                We continuously monitor the market and industry trends to
                identify emerging technologies and opportunities for innovation.
              </li>
              <li>
                We establish a culture of innovation that encourages our
                employee to think creatively and develop new ideas that can
                drive growth and create value.{" "}
              </li>
              <li>
                We use customer feedback to improve our products and services
                continually and ensure that they meet the evolving needs of our
                clients.
              </li>
              <li>
                We invest in training and education to ensure that our employees
                have the skills and knowledge needed to develop and implement
                new technologies and upgrades.
              </li>
              <li>
                We recognize that innovation is a long-term process that
                requires patience, persistence and a willingness to take risks.
                We are committed to investing in innovation and building a
                culture of continuous improvement that can drive our growth and
                success.{" "}
              </li>
            </ol>
          </ContentSection>
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

      <div className="bg-gradient-to-br via-secondary from-secondary to-primary py-20" id="partners">
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

      <div id="leadership" className="">
        <TeamComponent>
        {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-gray-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
        </TeamComponent>
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
