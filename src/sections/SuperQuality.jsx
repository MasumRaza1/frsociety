import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide
          <span className="text-coral-red"> Best </span>
          <span className="text-coral-red">Aid </span>  to Communities
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
       FR Society stands as a beacon of hope, dedicated to transforming lives and fostering positive change. Through our unwavering commitment to empowerment and innovation, we strive to uplift communities, inspire progress, and create a brighter future for all. With every initiative, we aim to address pressing issues, harnessing the power of collaboration and compassion to make a meaningful impact.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Join us on this journey of empowerment, where every step forward brings us closer to a more equitable and prosperous tomorrow...
        </p>
        <div className="mt-11">
          <Button>Join Us: Become a Volunteer</Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
