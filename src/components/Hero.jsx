import { ReactTyped } from "react-typed";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <div className="bg-[url('../../public/bgimage.jpeg')] h-full w-full bg-cover bg-center flex justify-center items-center px-4">
        <div className="max-w-[1360px] w-full">
          <div className="w-full md:w-[900px]">
            <div className="flex items-center">
              <ReactTyped
                className="pl-2 font-bold text-white md:text-2xl sm:text-4xl"
                strings={["BTB", "BTC", "SASS"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
              <h5 className="uppercase leading-10 pl-2 font-poppins relative text-white before:content-[' '] after:absolute after:left-0 after:top-0 after:h-full after:w-1  text-base md:text-lg">
                An Empowered Sri Lanka IPET.
              </h5>
            </div>
            <h1 className="text-4xl leading-snug text-white uppercase md:text-7xl">
              <span className="block font-poppins ">Institute of</span>
              <span className="block font-poppins">Professional Engineers</span>
              <span className="block font-poppins">and Technologists</span>
            </h1>
            <Button className="mt-4 hover:bg-blue-700 font-poppins">
              Explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
