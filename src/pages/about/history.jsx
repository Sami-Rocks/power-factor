import ContentSection from "../../components/ContentSections";
import history_image from "../../assets/images/history.jpeg";

const History = () => {
  return (
    <div id="history">
      <ContentSection
        heading="History"
        imageSource={history_image}
      >
        <div>
          <p>
            Power Factor Limited is an aggressively evolving and rapidly growing
            company gradually becoming a well-established entity in the
            Ghanaian, Sierra Leone, Liberia and the United Kingdom. It is
            extensively carving its reputation and establishment in the field
            Electrical/Electronic, Computer, Mechanical engineering and Civil.
            By combining our experience and local knowledge we are becoming the
            sub-contractor of choice for major international contractors such
            Subsea 7, Halliburton and GE Power Factor limited has been
            registered as a limited liability company since 23rd June 2006 and
            with branches in Sierra Leone as Power Factor (SL) Limited, Liberia,
            and the United Kingdom (UK). It has been in operation for the past
            Seventeen (17) years and has established strong ties with major
            institutions.
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
              Assets integrity management and Safety integrity level assessment
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
  );
};

export default History;
