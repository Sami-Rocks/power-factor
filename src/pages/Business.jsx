import business_image_1 from "./../assets/images/IMG_6475.webp";
import business_image_2 from "./../assets/images/IMG_0551.webp";
import business_image_3 from "./../assets/images/20210130_155507.webp";
import business_image_4 from "./../assets/images/Image007.webp";
import business_image_5 from "./../assets/images/IMG_6725.webp";

const Business = () => {
  return (
    <div>
      <div className=" from-primary to-secondary">
        <div className="conainer px-10">
          <div className="md:grid md:grid-cols-2 gap-10 items-center py-14 md:py-28">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">
                We are a group of businesses, delivering infrastructure projects
                for our customers.
              </p>
              <p className="text-base font-light">
                We undertake new build construction project as well as long-term
                contracts to operate and maintain the assets and facilities of
                our clients. <br />
                <br />
              </p>
            </div>

            <div className="mt-10 md:mt-0 md:my-10 my-16">
              <div className="rounded-lg overflow-hidden h-60 md:h-[500px]">
                <img
                  className="object-cover w-full h-auto"
                  src={business_image_1}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -top-20 md:-top-60 lg:-top-72">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 300"
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
            d="M0,60L80,55C160,50,320,40,480,75C640,110,800,190,960,220C1120,250,1280,230,1440,185C1600,140,1760,70,1920,45C2080,20,2240,40,2400,80C2560,120,2720,180,2880,175C3040,170,3200,100,3360,105C3520,110,3680,190,3840,190C4000,190,4160,110,4320,95C4480,80,4640,130,4800,140C4960,150,5120,120,5280,105C5440,90,5600,90,5760,110C5920,130,6080,170,6240,165C6400,160,6560,110,6720,90C6880,70,7040,80,7200,80C7360,80,7520,70,7680,75C7840,80,8000,100,8160,105C8320,110,8480,100,8640,120C8800,140,8960,190,9120,220C9280,250,9440,260,9600,255C9760,250,9920,230,10080,215C10240,200,10400,190,10560,155C10720,120,10880,60,11040,40C11200,20,11360,40,11440,50L11520,60L11520,300L11440,300C11360,300,11200,300,11040,300C10880,300,10720,300,10560,300C10400,300,10240,300,10080,300C9920,300,9760,300,9600,300C9440,300,9280,300,9120,300C8960,300,8800,300,8640,300C8480,300,8320,300,8160,300C8000,300,7840,300,7680,300C7520,300,7360,300,7200,300C7040,300,6880,300,6720,300C6560,300,6400,300,6240,300C6080,300,5920,300,5760,300C5600,300,5440,300,5280,300C5120,300,4960,300,4800,300C4640,300,4480,300,4320,300C4160,300,4000,300,3840,300C3680,300,3520,300,3360,300C3200,300,3040,300,2880,300C2720,300,2560,300,2400,300C2240,300,2080,300,1920,300C1760,300,1600,300,1440,300C1280,300,1120,300,960,300C800,300,640,300,480,300C320,300,160,300,80,300L0,300Z"
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
            d="M0,180L80,155C160,130,320,80,480,95C640,110,800,190,960,230C1120,270,1280,270,1440,235C1600,200,1760,130,1920,120C2080,110,2240,160,2400,195C2560,230,2720,250,2880,220C3040,190,3200,110,3360,110C3520,110,3680,190,3840,200C4000,210,4160,150,4320,115C4480,80,4640,70,4800,95C4960,120,5120,180,5280,175C5440,170,5600,100,5760,95C5920,90,6080,150,6240,145C6400,140,6560,70,6720,75C6880,80,7040,160,7200,170C7360,180,7520,120,7680,80C7840,40,8000,20,8160,45C8320,70,8480,140,8640,150C8800,160,8960,110,9120,110C9280,110,9440,160,9600,175C9760,190,9920,170,10080,140C10240,110,10400,70,10560,50C10720,30,10880,30,11040,25C11200,20,11360,10,11440,5L11520,0L11520,300L11440,300C11360,300,11200,300,11040,300C10880,300,10720,300,10560,300C10400,300,10240,300,10080,300C9920,300,9760,300,9600,300C9440,300,9280,300,9120,300C8960,300,8800,300,8640,300C8480,300,8320,300,8160,300C8000,300,7840,300,7680,300C7520,300,7360,300,7200,300C7040,300,6880,300,6720,300C6560,300,6400,300,6240,300C6080,300,5920,300,5760,300C5600,300,5440,300,5280,300C5120,300,4960,300,4800,300C4640,300,4480,300,4320,300C4160,300,4000,300,3840,300C3680,300,3520,300,3360,300C3200,300,3040,300,2880,300C2720,300,2560,300,2400,300C2240,300,2080,300,1920,300C1760,300,1600,300,1440,300C1280,300,1120,300,960,300C800,300,640,300,480,300C320,300,160,300,80,300L0,300Z"
          />
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(248, 155, 0, 1)" offset="0%" />
              <stop stopColor="rgba(248, 155, 0, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 100px)", opacity: 0.8 }}
            fill="url(#sw-gradient-2)"
            d="M0,0L80,30C160,60,320,120,480,140C640,160,800,140,960,140C1120,140,1280,160,1440,180C1600,200,1760,220,1920,215C2080,210,2240,180,2400,185C2560,190,2720,230,2880,240C3040,250,3200,230,3360,185C3520,140,3680,70,3840,75C4000,80,4160,160,4320,175C4480,190,4640,140,4800,115C4960,90,5120,90,5280,120C5440,150,5600,210,5760,210C5920,210,6080,150,6240,135C6400,120,6560,150,6720,165C6880,180,7040,180,7200,185C7360,190,7520,200,7680,195C7840,190,8000,170,8160,140C8320,110,8480,70,8640,50C8800,30,8960,30,9120,45C9280,60,9440,90,9600,90C9760,90,9920,60,10080,70C10240,80,10400,130,10560,160C10720,190,10880,200,11040,200C11200,200,11360,190,11440,185L11520,180L11520,300L11440,300C11360,300,11200,300,11040,300C10880,300,10720,300,10560,300C10400,300,10240,300,10080,300C9920,300,9760,300,9600,300C9440,300,9280,300,9120,300C8960,300,8800,300,8640,300C8480,300,8320,300,8160,300C8000,300,7840,300,7680,300C7520,300,7360,300,7200,300C7040,300,6880,300,6720,300C6560,300,6400,300,6240,300C6080,300,5920,300,5760,300C5600,300,5440,300,5280,300C5120,300,4960,300,4800,300C4640,300,4480,300,4320,300C4160,300,4000,300,3840,300C3680,300,3520,300,3360,300C3200,300,3040,300,2880,300C2720,300,2560,300,2400,300C2240,300,2080,300,1920,300C1760,300,1600,300,1440,300C1280,300,1120,300,960,300C800,300,640,300,480,300C320,300,160,300,80,300L0,300Z"
          />
        </svg>
        <div className="py-20 bg-[#ea9139] px-10">
          <p className="font-light">
            We have a broad client base consisting of international and national
            oil and gas companies, international charity organizations,
            government agencies and commercial, private and public organizations
            in every sector. We are a professional, collaborative and innovative
            company developing long term and trusting relationship with our
            clients. <br />
            <br />
          </p>
          <p className="font-light">
            {" "}
            We are involved in the management, design and construction of the
            assets that improve the life of the people in the areas we work. Our
            work contributes to society and improves the local area we work in.
            We support our clients and customers supply chain solutions by
            providing value added services in transport and logistics, material
            management and customs clearance.
          </p>

          <br />
          <br />
        </div>
      </div>

      <div>
        <div className="conainer px-10">
          <div className="md:grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
            <div className="mt-10 md:mt-0 md:my-10 my-16">
              <div className="rounded-lg overflow-hidden max-h-[540px] md:h-auto">
                <img
                  className="object-cover w-full h-full"
                  src={business_image_2}
                  alt="img"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">
                Mechanical and Electrical Engineering
              </p>
              <p className="text-base font-light">
                Our mechanical and electrical business unit specializes in the
                design, procurement, installation, commissioning of low and high
                voltage equipment and infrastructure. We support the operations
                and maintenance of our client's equipment and plant through the
                provision of expert technical assistance and spare parts. We
                provide offsite manufacture and installation of mechanical and
                electrical solutions and have carved a reputation for delivering
                projects responsibly and on time. Our strategic alliances enable
                us to engage with the best-in-class original equipment
                manufacturers through early engagement
              </p>
            </div>
          </div>
        </div>
        <div className="conainer px-10">
          <div className="md:grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">Civil Engineering</p>
              <p className="text-base font-light">
                Our Civil, Building and Construction division is involved in the
                design, procurement, construction, commissioning including
                maintenance of buildings and civil infrastructure projects We
                have the expertise to undertake projects within transport ,
                residential and public buildings, factory construction and
                remediation works. We specialize in delivering large, complex
                projects in partnership with our customers, safely and
                efficiently. We use the latest concepts in sustainable
                development to improve social, economic and environmental
                conditions because we believe these projects should leave a
                positive legacy in addition to the asset. Our skills as both
                engineers and project managers mean that we work with our
                customers and project stakeholders to build relationships that
                produce the best outcomes. We draw on experience gained and
                lessons learned from previous projects.
              </p>
            </div>
            <div className="mt-10 md:mt-0 md:my-10 my-16">
              <div className="rounded-lg overflow-hidden max-h-[540px] md:h-auto">
                <img
                  className="object-cover w-full h-full"
                  src={business_image_3}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="conainer px-10">
          <div className="md:grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
            <div className="mt-10 md:mt-0 md:my-10 my-16">
              <div className="rounded-lg overflow-hidden max-h-[540px] md:h-auto">
                <img
                  className="object-cover w-full h-full"
                  src={business_image_4}
                  alt="img"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">
                Oil and Gas Support Services
              </p>
              <p className="text-base font-light">
                Our Oil and Gas Support Services provide engineering services,
                resource and procurement solutions in support of oil and gas
                companies developments. We have a strong partnership with
                offshore construction companies who can provide construction
                vessels equipped with ROVs.
              </p>
            </div>
          </div>
        </div>
        <div className="conainer px-10">
          <div className="md:grid md:grid-cols-2 gap-10 items-center py-10 md:py-20">
            <div className="text-center md:text-left">
              <p className="text-4xl font-bold py-4 ">Logistics </p>
              <p className="text-base font-light">
                Our logistics business unit provide road and multi-modal
                transportation operations and all associated logistics services
                to support our clients supply chain activities. Our solutions
                include customs clearance and on-site logistics. We can easily
                manage your freight flows as we add proven information
                management expertise to continuously optimize your transport
                plans.
              </p>
            </div>

            <div className="mt-10 md:mt-0 md:my-10 my-16">
              <div className="rounded-lg overflow-hidden max-h-[540px] md:h-auto">
                <img
                  className="object-cover w-full h-full"
                  src={business_image_5}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
