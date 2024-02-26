import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigationteacher() {
  return (
    <Carousel
      className="rounded-xl container"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-orange-700"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="public/sl pics/theresa.png"
        alt="image 1"
        className="h-full w-full object-cover"
        onClick={()=>{window.open(" https://www.linkedin.com/in/theresa-sebastian/")}}
        
      />
      <img
        src="public/sl pics/tushar-kumar.png"
        alt="image 1"
        className="h-full w-full object-cover"
        onClick={()=>{window.open(" https://www.linkedin.com/in/theresa-sebastian/")}}
      />
      <img
        src="public/sl pics/karanV.png"
        alt="image 1"
        className="h-full w-full object-cover"
        onClick={()=>{window.open(" https://www.linkedin.com/in/theresa-sebastian/")}}
      />
    </Carousel>
  );
}
