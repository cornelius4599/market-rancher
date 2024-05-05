import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Experience
          <span className='text-yellow-400'> The </span>
          <span className='text-yellow-400'>Roadshow </span> Revolution
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
         Join us as we hit the road and bring the excitement of our brand activation to a city near you! Our roadshow events are where the magic happens-immersing audiences in unforgettable experiences and forging meaningful connections.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Discover how our innovative approach to brand activation is reshaping the marketing landscape, one roadshow at a time.
        </p>
        <div className='mt-11'>
          <Button label='View gallery' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
