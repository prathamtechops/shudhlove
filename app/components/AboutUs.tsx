import Image from "next/image";
import sectionImg from "../../public/assets/sectionImg.jpg";

interface AboutUsSectionProps {
  title: string;
  sections: {
    imagePath: string | StaticImageData;
    description: string;
  }[];
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ sections }) => {
  return (
    <section className="py-12 container">
      <div className="container flex flex-wrap justify-center">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Us Section
        </h2>
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex w-full justify-between mb-8 flex-col md:flex-row"
          >
            <Image
              src={section.imagePath}
              alt={`Image ${index + 1}`}
              objectFit="cover"
              className="rounded-md mx-4 md:w-[40%]"
            />

            <p className="text-gray-700 w-full ml-4 md:w-[60%] whitespace-normal h-auto mt-4 md:mt-0">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AboutPage: React.FC = () => {
  const sections = [
    {
      imagePath: sectionImg,
      description:
        "Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem thiejij iajeiojkld jdklj iaj eioj kldfj  ieoj k jfi jeij kfdi fjewfk jfiefje fjeofe Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem thiejij iajeiojkld jdklj iaj eioj kldfj  ieoj k jfi jeij kfdi fjewfk jfiefje fjeofe .",
    },
    {
      imagePath: sectionImg,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imagePath: sectionImg,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return <AboutUsSection title="About Us" sections={sections} />;
};

export default AboutPage;
