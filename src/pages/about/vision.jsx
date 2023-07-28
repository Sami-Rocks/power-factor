import RightTextSection from "../../components/RightTextSections";
import LeftTextSection from "../../components/LeftTextSections";

const Vision = () => {
  return (
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
            Design, Project Management, Logistics, and Construction Services. We
            are committed to delivering high-quality services that meet the
            needs of our clients and exceed their expectations. Our services are
            designed to provide end-to-end solutions that cover all aspects of
            the project lifecycle, from site acquisition to construction and
            build-out. We have a team of experienced professionals who are
            dedicated to delivering projects on time, within budget, and to the
            highest quality standards. Our services are tailored to meet the
            unique needs of each client, and we work closely with them to ensure
            that we understand their requirements and deliver solutions that
            meet their specific needs. We are committed to transparency and
            accountability in all our operations, and we strive to build
            long-term relationships with our clients based on trust, integrity,
            and mutual respect. We believe that by providing exceptional
            services, we can help our clients achieve their goals and contribute
            to building a better world.
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
            We strive to deliver superior quality projects to our clients while
            meeting budget and schedule goals. We are committed to providing
            exceptional service to our customers while using a professional
            approach. We strive to deliver superior quality projects to our
            clients while meeting budget and schedule goals. Our focus is on
            creating value for our customers by delivering projects that meet
            their needs and exceed their expectations. To achieve this, we
            follow a customer-centric approach that involves understanding their
            needs, defining the scope of work, and developing a project plan
            that meets their requirements. We believe that good project
            management is essential to delivering successful projects, and we
            have standard processes in place to deal with all contingencies. We
            recognize that customer satisfaction is a critical building block to
            our success, and we use customer feedback to improve our services
            continually. We believe that by providing exceptional service, we
            can build long-term relationships with our customers and to be
            widely recognized within the community for our continuing commitment
            to customer service and client satisfaction contribute to building a
            better world.
          </p>
        </div>
      </LeftTextSection>
    </div>
  );
};

export default Vision;
