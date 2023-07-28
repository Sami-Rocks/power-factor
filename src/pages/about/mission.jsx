/* eslint-disable react/no-unescaped-entities */
import RightTextSection from "../../components/RightTextSections";

const Mission = () => {
  return (
    <div id="mission">
      <div className="max-w-7xl text-left px-10 mt-10 mb-5">
        <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
          Our Mission
        </h2>
      </div>
      <RightTextSection imageSource="https://picsum.photos/300/200">
        <div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            To provide a responsive, safe, cost effective and reliable solutions
            to our clients by forming a symbiotic relationship and fulfilling
            customers’ individual needs in all our business lines
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At our company, we are committed to providing our clients with
            responsive, safe, cost-effective, and reliable solutions. We believe
            that forming a symbiotic relationship with our clients is essential
            to fulfilling their individual needs in all our business lines. To
            achieve this, we follow a customer-centric approach that involves
            understanding our clients' needs, defining the scope of work, and
            developing a project plan that meets their requirements. We believe
            that good project management is essential to delivering successful
            projects, and we have standard processes in place to deal with all
            contingencies. We recognize that customer satisfaction is a critical
            building block to our success, and we use customer feedback to
            improve our services continually. We believe that by providing
            exceptional service, we can build long-term relationships with our
            clients and contribute to building a better world. We develop
            secure, scalable, and cost-effective solutions that support our
            clients, employees, and partners to work effectively. We believe
            that diversity of people with unique experiences, diverse
            backgrounds, and individual differences creates a dynamic and
            innovative workplace.
          </p>
        </div>
      </RightTextSection>
    </div>
  );
};

export default Mission;
