import AboutPage from "@/components/component/AboutUs";
import { ContactForm } from "@/components/component/ContactForm";
import Feature from "@/components/component/Features";
import { Navbar } from "@/components/component/Navbar";
import Image from "next/image";
import heroImg from "@/public/assets/heroImg.png";
import Icon from "@/components/component/Icon";
import { GoShieldCheck } from "react-icons/go";
import { GoShieldLock } from "react-icons/go";
import { MdConnectWithoutContact } from "react-icons/md";

export default function Home() {
  return (
    <main
      className="main text-white"
      style={{
        background:
          "linear-gradient(180deg, #ff0091 30% , #f60246 , #f76244 51%, #fa7d21 85%)",
      }}
    >
      <Image
        src={heroImg}
        alt="hero"
        className="absolute z-15 top-0 right-0  max-w-md max-h-md hidden md:block"
      />

      <Navbar />
      <Hero />
      <Feature />
      <AboutPage />
      <div className="container flex justify-around">
        <Icon icon={<GoShieldLock />} text="Security" />
        <Icon icon={<MdConnectWithoutContact />} text="Connection" />
        <Icon icon={<GoShieldCheck />} text="Varification" />
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}

const Hero = () => {
  return (
    <div className="max-w-2xl  px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Section header */}
        <div className="text-left pb-12 md:pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Dive into The Sweet Symphony of Sudh Love{" "}
            </span>{" "}
            Sudh Love{" "}
          </h1>
          <div className="space-x-3 text-sm">
            Where Connections Blossom and Hearts Flourish.
          </div>
        </div>
      </div>
    </div>
  );
};

// components/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer className=" text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Your Logo</h2>
          <p className="mt-2">A short tagline or description</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="mb-1">
              <a href="#">Home</a>
            </li>
            <li className="mb-1">
              <a href="#">About</a>
            </li>
            <li className="mb-1">
              <a href="#">Services</a>
            </li>
            <li className="mb-1">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: example@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </footer>
  );
};
