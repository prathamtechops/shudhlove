"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import FeatureImage from "../../public/assets/Feature.png";
import SecondImage from "../../public/assets/Second.png";
import ThreeImage from "../../public/assets/Three.png";
import FourthImage from "../../public/assets/Fourth.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";

interface FeatureSection {
  image: StaticImageData;
  title: string;
  description: string;
}

const features: FeatureSection[] = [
  {
    image: FeatureImage,
    title: "Connect",
    description: "Find People of Your Interest and Make Connection With Them",
  },
  {
    image: SecondImage,
    title: "Socialize",
    description: "Talk With Your Matches and Enjoy Video Call, Audio Call",
  },
  {
    image: ThreeImage,
    title: "Find Match",
    description: "Search Matches of Your Interest and Find Your Best Pair",
  },
  {
    image: FourthImage,
    title: "Accomplishment",
    description: "Explore Achievements of Others and Rank Yourself In Them",
  },
];

const Feature: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(features[0].image);

  const handleImageChange = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setSelectedIndex(index),
  };

  return (
    <>
      <div className="hidden md:block container">
        <div className="flex">
          <div className="flex flex-wrap  items-center p-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className={clsx(
                  "flex w-1/2 cursor-pointer text-white  p-b-10",
                  index % 2 !== 0 && "mt-14"
                )}
                onClick={() => handleImageChange(feature.image)}
              >
                <h1 className="text-5xl font-stardos-stencil mr-4">
                  {String(index + 1).padStart(2, "0")}
                </h1>
                <div>
                  <h1 className="text-yellow-500">{feature.title}</h1>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Image src={selectedImage} alt="Feature_img" />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Image src={features[selectedIndex].image} alt="Feature_img" />
        <div className="p-10 lex flex-col ">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="cursor-pointer text-white ">
                <h1 className="text-5xl font-stardos-stencil mb-4">
                  {String(index + 1).padStart(2, "0")}
                </h1>
                <div>
                  <h1 className="text-yellow-500">{feature.title}</h1>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Feature;
