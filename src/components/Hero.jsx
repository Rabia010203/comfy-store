import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
const carouselImages = [hero1, hero2, hero3, hero4];
 const Hero = () => {
  return (
    
      <div className="grid lg:grid-cols-2 gap-24  items-center my-20">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold sm:text-6xl tracking-tight">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa in
            ex neque aspernatur eveniet iusto nobis fugiat quis cum laborum!
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              Our Products
            </Link>
          </div>
        </div>

        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 rounded-box space-x-4 bg-neutral ">
          {carouselImages.map((image) => {
            return (
              <div className="carousel-item" key={image}>
                <img
                  src={image}
                  alt=""
                  className="rounded-box h-full  w-80 object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    
  );
};
export default Hero;