import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl container"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-orange-400"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="public/sl pics/pratyush_sahoo.png"
        alt="image 1"
        className="h-full w-full object-cover hover:cursor-pointer "
        onClick={()=>{window.open(" https://www.linkedin.com/in/happymansahoo/")}}
      />
      <img
        src="public/sl pics/janit.png"
        alt="image 1"
        className="h-full w-full object-cover hover:cursor-pointer "
        onClick={()=>{window.open(" https://www.linkedin.com/in/janit-kedia/")}}
      />
      <img
        src="public/sl pics/faizan.png"
        alt="image 1"
        className="h-full w-full object-cover hover:cursor-pointer "
        onClick={()=>{window.open(" https://www.linkedin.com/in/md-faizan-rahi/")}}
      />
      <img
        src="public/sl pics/samrat.png"
        alt="image 1"
        className="h-full w-full object-cover hover:cursor-pointer "
        onClick={()=>{window.open("")}}
      />
      <img
        src="public/sl pics/theresa_exe.png"
        alt="image 1"
        className="h-full w-full object-cover hover:cursor-pointer "
        onClick={()=>{window.open(" https://www.linkedin.com/in/theresa-sebastian/")}}
      />
      <img
        src="public/sl pics/rudhir.png"
        alt="image 1"
        className="h-full w-full object-cover hover:cursor-pointer "
        onClick={()=>{window.open(" https://www.linkedin.com/in/rudhir-mahalik/")}}
      />
    </Carousel>
  );
}
