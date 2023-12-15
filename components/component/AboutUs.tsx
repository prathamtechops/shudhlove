import Image from "next/image";
import sectionImg from "../../public/assets/sectionImg.jpg";
import sectionImg2 from "../../public/assets/sectionImg1.png";
import sectionImg3 from "../../public/assets/sectionImg3.png";
import clsx from "clsx";
import { StaticImageData } from 'next/image';


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
      <div className="container flex flex-wrap justify-start">
        <h2
          style={{
            fontFamily: "Dancing Script",
          }}
          className="text-3xl text-center mb-8 mx-auto"
        >
          Why Sudh Love?
        </h2>
        {sections.map((section, index) => (
          <div
            key={index}
            className={clsx(
              "flex w-full justify-start items-center mb-8 flex-col md:flex-row",
              {
                "md:flex-row-reverse": index % 2 !== 0,
              }
            )}
          >
            <Image
              src={section.imagePath}
              alt={`Image ${index + 1}`}
              // objectFit="cover"
              className="rounded-lg mx-4 max-w-[40%]"
            />

            <p className=" w-full ml-4 md:w-[60%] whitespace-normal h-auto mt-4 md:mt-0">
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
      description: `Welcome to Sudh Love, where the harmonious symphony of genuine connections unfolds, and hearts find the perfect rhythm to flourish. In a world bustling with the hustle and bustle of modern life, Sudh Love stands as a sanctuary for those seeking the authentic beauty of love. Our journey began with a vision to redefine the landscape of online connections, focusing not just on matches but on the profound essence of heartfelt connections. At Sudh Love, we believe that meaningful relationships are nurtured through shared values, common interests, and the genuine understanding that sparks between two souls.`,
    },
    {
      imagePath: sectionImg2,
      description:
        `Our platform is designed with a deep commitment to fostering connections that go beyond superficial appearances. Sudh Love is not just a dating site; it's a community where individuals can embrace the unique melody of their hearts and find resonance with someone who truly understands them. We understand that every individual is a unique note in the grand symphony of life, and through Sudh Love, we aim to orchestrate serendipitous encounters that lead to lifelong melodies of love.`
    },
    {
      imagePath: sectionImg3,
      description:
      `At Sudh Love, we value the sanctity of genuine connections. Our commitment goes beyond algorithms and profiles; we are dedicated to creating an environment where individuals can express their true selves, unfiltered and without pretense. Through our platform, we invite you to join a community that cherishes the authenticity of every love story, where the pursuit of love is celebrated as a beautiful journey of self-discovery and shared joy. Sudh Love is not just a platform; it's an ode to the purity of love, where connections blossom, and hearts find the symphony that resonates uniquely with their own.`
    },
  ];

  return <AboutUsSection title="About Us" sections={sections} />;
};

export default AboutPage;
