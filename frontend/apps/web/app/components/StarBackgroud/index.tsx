import { Canvas } from '@react-three/fiber';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Text Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Everyone's <span className="text-purple-500">Favorite DEX</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-6">
          Trade, earn, and own crypto on the all-in-one multichain DEX
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition">
            Connect Wallet
          </button>
          <button className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition">
            Trade Now
          </button>
        </div>
      </div>

    </div>
  );
};


export default HeroSection;
