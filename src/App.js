import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import girl from './assets/girls.jpeg';


function App() {
  return (
    <div className="bg-violet-950 px-10 py-16 mx-auto max-w-[624px] h-[524px] mt-16">
      <div className="grid grid-cols-2">
        <div className="cols-span-1">
          <h1 className="text-white text-lg font-bold">PlanPostAi</h1>

          <div className="relative block pt-8 text-2xl text-yellow-600 font-extrabold">
            <span className="block">Pure</span>
            <span className="block">Elegance in</span>
            <span className="block">Every Drop</span>
          </div>

          <p className="text-lg text-white font-bold mt-8">
            Experience the luxury of premium water
          </p>

          <div className="mt-8">
            <button className="uppercase rounded-2xl text-white py-2 px-4 bg-yellow-500 flex gap-3 items-center justify-center">
              <span className="bg-black p-2 rounded-full"><FaPlay /></span>Learn More
            </button>
          </div>

          <div className="flex gap-4 items-center pt-8">
            <span className="text-3xl text-yellow-600">
              <BsFillTelephoneOutboundFill />
            </span>
            <div className="text-lg text-white">
              <span className="block">Call to find out more</span>
              <span className="block text-2xl">+123-456-7890</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center relative">
          <div className="relative right-border transform rotate-6 ">
            <img
              src={girl}
              alt="Girl"
              className="trapezoid-image relative z-10"
            />
            <div className="absolute inset-0 left-border border-binding trapezoid-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
