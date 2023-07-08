import ContentSection from "../components/ContentSections";
import RightTextSection from "../components/RightTextSections";
import LeftTextSection from "../components/LeftTextSections";

export default function Csrs() {
  return (
    <div>
      <div id="diversity">
        <ContentSection />
      </div>
      <div id="ethics">
        <div className="max-w-7xl text-left px-10">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl">
            Ethics
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            est quidem accusamus sint perferendis animi deleniti nobis,
            reprehenderit dicta nemo? Voluptates voluptas molestiae totam
            nostrum praesentium dicta quo, similique aperiam atque dolores
            repellat odio deleniti nulla culpa! Explicabo voluptates quibusdam
            expedita qui. Quam, ea suscipit! Blanditiis, animi fuga?
            Perspiciatis commodi veniam quo cum rem consequuntur voluptatum quia
            laboriosam, consectetur praesentium dolor error aliquam debitis ut
            accusantium nobis suscipit saepe. Libero doloremque accusamus
            dignissimos molestiae delectus fugit ipsum consectetur mollitia
            tempora?
          </p>
        </div>
        <LeftTextSection />
        <RightTextSection />
      </div>
    </div>
  );
}