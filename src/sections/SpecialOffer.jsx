import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Charitable </span>
          Opportunity
        </h2>
        <p className="mt-4 info-text">
        We believe in the power of giving back. Our mission is to create opportunities for positive change by supporting various charitable causes and initiatives. Whether it's providing access to education, healthcare, or essential resources, we are dedicated to making a difference in the lives of those in need. 
        </p>
        <p className="mt-6 info-text">
        Join us in our commitment to making a difference. Whether through donations, volunteering, or spreading awareness, every action counts. Together, we can create a ripple effect of kindness and generosity, transforming lives and building stronger, more compassionate communities.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button>
            Donate Now
            <img
              src={arrowRight}
              alt="Arrow right icon"
              className="ml-2 rounded-full w-5 h-5"
            />
          </Button>
          <Button bg="bg-black">Become a Volunteer</Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
