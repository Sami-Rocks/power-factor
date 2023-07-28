import SVGs from "../helpers/SVGs";
import videoBG from "./../assets/video/video.mp4";

import home_image_one from "./../assets/images/IMG_6475.webp";
import home_image_two from "./../assets/images/IMG_6805.webp";
import home_image_three from "./../assets/images/Image-005.webp";

import home_gallery_1 from "./../assets/images/IMG_0087 (1).webp";
import home_gallery_2 from "./../assets/images/IMG_0542.webp";
import home_gallery_3 from "./../assets/images/IMG_6733.webp";
import home_gallery_4 from "./../assets/images/Image-011.webp";
import home_gallery_5 from "./../assets/images/Image-004.webp";
import home_gallery_6 from "./../assets/images/Image-002.webp";

import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

const Home = () => {
  // const [arrowhover, setArrowHover] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="landing h-full w-full mb-20">
        <video className="w-full " muted autoPlay loop>
          <source src={videoBG} type="video/mp4" />
        </video>
        <div className="overlay z-2"></div>

        <div className="container">
          <p className="font-medium mb-10 text-3xl leading-10 py-10">
            <span className="text-sm mb-2 mr-10">WELCOME </span>
            At Power Factor Limited our focus is is awesome on customers,
            capability and...
          </p>
        </div>

        <div className="absolute bottom-3 text-grey_text flex gap-2 items-center flex-col w-full">
          <p className="text-xs md:text-white">SCROLL</p>
          {SVGs.down}
        </div>
      </div>

      <div className=" container ">
        <div className="md:grid md:grid-cols-2 gap-10 items-center py-20 md:py-28">
          <div data-aos="fade-right" className="text-center md:text-left">
            <p className="text-3xl font-bold py-4 ">
              Welcome to Power Factor Limited
            </p>
            <p className="text-base font-light">
              Formed in 2006, Power Factor Limited is an aggressively evolving
              and rapidly growing engineering and construction services company
              with well-established entities in West Africa.
              <br />
              <br />
              Over the years Power Factor Limited has carved a solid reputation
              in the delivery of infrastructure projects in the ﬁelds of
              Electrical, Mechanical and Civil Engineering, Oil and gas support
              services and Logistics Services.
            </p>

            <button
              onClick={() => navigate("/about")}
              className="rounded-full bg-primary text-white py-3 px-8 mt-10 text-base"
            >
              Learn More
            </button>
          </div>

          <div data-aos="fade-left" className="mt-10 md:mt-0 md:my-10 my-16">
            <div className="grid grid-cols-2 gap-2 h-72 md:h-auto">
              <div className="rounded-lg overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={home_image_one}
                  alt="img"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={home_image_two}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="md:grid md:grid-cols-2 gap-4 md:gap-10 items-center py-28 md:py-40">
          <div data-aos="fade-right" className=" h-72 md:h-auto">
            <div className="rounded-lg overflow-hidden">
              <img
                className="object-cover w-full h-full md:max-h-[400px] max-h-[250px] overflow-hidden"
                src={home_image_three}
                alt="img"
              />
            </div>
          </div>
          <div data-aos="fade-left" className="text-center md:text-left">
            <p className="text-xl font-bold py-4 ">Message From CEO</p>
            <p className="text-base font-light">
              At Power Factor Limited our focus is on customers, capability and
              building relationships to drive long term sustainable value for
              our clients. Underpinning all of this is our commitment to Zero
              Harm, taking consistent measures to ensure that everyone goes home
              safely, every day.
            </p>

            {/* <button className="rounded-full bg-primary text-white py-3 px-8 text-base">
              Learn More
            </button> */}
          </div>
        </div>
      </div>

      <div className="w-full relative min-h-screen-cus mt-16 bg-primary">
        <div className="container px-10">
          <p className=" text-white text-right font-black text-6xl py-20 px-10 top-0">
            MEDIA
          </p>

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
                  src={home_gallery_1}
                  className="rounded-lg max-h-72 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_2}
                  className="rounded-lg max-h-72 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_3}
                  className="rounded-lg max-h-72 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_4}
                  className="rounded-lg max-h-72 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_5}
                  className="rounded-lg max-h-72 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_6}
                  className="rounded-lg max-h-72 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-10 py-10 block lg:hidden">
            <Swiper
              className="mySwiper"
              spaceBetween={30}
              modules={[Autoplay]}
              autoplay
            >
              <SwiperSlide>
                <img
                  src={home_gallery_1}
                  className="rounded-lg max-h-80 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_2}
                  className="rounded-lg max-h-80 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_3}
                  className="rounded-lg max-h-80 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_4}
                  className="rounded-lg max-h-80 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_5}
                  className="rounded-lg max-h-80 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={home_gallery_6}
                  className="rounded-lg max-h-80 w-[30rem] object-cover"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* <div className="bg-primary text-3xl md:text-5xl py-28 md:py-28 md:min-h-screen flex items-center text-white leading-20 px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque
        libero eos hic saepe aspernatur rerum sequi tempora voluptate et,
        aliquid harum, itaque id rem, reiciendis minus sapiente at possimus?
      </div> */}

      <div className="w-full bg-primary pt-16 pb-28">
        <div className="w-full ">
          {/* <h1>Co-operate Video</h1> */}

          <div
            className="flex h-screen justify-center items-center top-0 w-full h-full "
            id="cooperateVideo"
          >
            <iframe
              className="w-full bg-[#000000] shadow-xl h-[300px] px-10 xl:w-2/3 md:h-2/3 rounded-md rounded-md"
              src="https://www.youtube.com/embed/CO0NvdkvhNw"
              title="Welcome to Power Factor Limited"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
