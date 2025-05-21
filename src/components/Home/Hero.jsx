import { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";

// Data for hero wallpapers
const heroWallpapers = [
  {
    id: 1,
    imagePath: "/img/hero/france.jpg",
    country: "France",
    countryFlagIcon: "twemoji:flag-france",
  },
  {
    id: 2,
    imagePath: "/img/hero/spain.jpg",
    country: "Spain",
    countryFlagIcon: "twemoji:flag-spain",
  },
  {
    id: 3,
    imagePath: "/img/hero/china.jpg",
    country: "China",
    countryFlagIcon: "twemoji:flag-china",
  },
  {
    id: 4,
    imagePath: "/img/hero/italy.jpg",
    country: "Italy",
    countryFlagIcon: "twemoji:flag-italy",
  },
  {
    id: 5,
    imagePath: "/img/hero/turkiye.jpg",
    country: "Turkiye",
    countryFlagIcon: "twemoji:flag-turkiye",
  },
  {
    id: 6,
    imagePath: "/img/hero/mexico.jpg",
    country: "Mexico",
    countryFlagIcon: "twemoji:flag-mexico",
  },
  {
    id: 7,
    imagePath: "/img/hero/thailand.jpg",
    country: "Thailand",
    countryFlagIcon: "twemoji:flag-thailand",
  },
  {
    id: 8,
    imagePath: "/img/hero/germany.jpg",
    country: "Germany",
    countryFlagIcon: "twemoji:flag-germany",
  },
  {
    id: 9,
    imagePath: "/img/hero/united-kingdom.jpg",
    country: "United Kingdom",
    countryFlagIcon: "twemoji:flag-united-kingdom",
  },
  {
    id: 10,
    imagePath: "/img/hero/egypt.jpg",
    country: "Egypt",
    countryFlagIcon: "twemoji:flag-egypt",
  },
];

// Shuffle array utility function
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffledWallpapers, setShuffledWallpapers] = useState(heroWallpapers);
  const slideIntervalRef = useRef(null);

  // Initialize with shuffled wallpapers and random starting index
  useEffect(() => {
    const shuffled = shuffleArray(heroWallpapers);
    setShuffledWallpapers(shuffled);
    const randomIndex = Math.floor(Math.random() * shuffled.length);
    setCurrentIndex(randomIndex);
  }, []);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledWallpapers.length);
  }, [shuffledWallpapers.length]);

  // Set up and clean up interval for auto-play
  useEffect(() => {
    if (isPlaying) {
      slideIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPlaying, nextSlide]);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledWallpapers.length - 1 : prevIndex - 1
    );
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const { country, countryFlagIcon } = shuffledWallpapers[currentIndex];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Images */}
      <div className="absolute inset-0">
        {shuffledWallpapers.map((wallpaper, index) => (
          <div
            key={wallpaper.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={wallpaper.imagePath}
              alt={wallpaper.country}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay with country details and navigation */}
      <div className="absolute inset-0 flex flex-col  bg-black bg-opacity-30 p-6">
        {/* Country details card */}
        <div className="mt-auto mb-1">
          <div className="bg-black bg-opacity-50 rounded-lg p-2 inline-block">
            <div className="flex items-center gap-2">
              <Icon icon={countryFlagIcon} className="text-xl" />
              <h2 className="text-l font-bold text-white">{country}</h2>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex gap-2 justify-center mb-6">
          <button 
            className="bg-black bg-opacity-50 hover:bg-opacity-100  p-2 transition-all"
            onClick={prevSlide}
          >
            <Icon icon="mingcute:left-fill" className="text-2xl text-white" />
          </button>
          <button 
            className="bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition-all"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <Icon icon="mingcute:pause-fill" className="text-2xl text-white" />
            ) : (
              <Icon icon="mingcute:play-fill" className="text-2xl text-white" />
            )}
          </button>
          <button 
            className="bg-black bg-opacity-50 hover:bg-opacity-100  p-2 transition-all"
            onClick={nextSlide}
          >
            <Icon icon="mingcute:right-fill" className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;