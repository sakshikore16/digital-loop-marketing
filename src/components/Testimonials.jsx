import React from 'react';
import Container from './Container';
import Topic from './Topic';

const Testimonials = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row">
        <Topic title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between my-6 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 p-6 bg-black text-white rounded-[45px]"> {/* Reduced padding */}
          <div className="justify-items-center relative w-full border border-lime rounded-3xl">
            <div className="p-4"> {/* Reduced padding */}
              <p className="text-white text-sm md:text-lg font-normal mb-4">
                "We have partnered with Digital Loop Marketing since the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business and take required efforts."
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 bg-black text-white rounded-[45px]"> {/* Reduced padding */}
          <div className="justify-items-center relative w-full border border-lime rounded-3xl">
            <div className="p-4"> {/* Reduced padding */}
              <p className="text-white text-sm md:text-lg font-normal mb-4">
                 "Working with Digital Loop Marketing over the past year has been transformative for our business. We've experienced a substantial boost in website traffic and leads. Their team's professionalism, responsiveness, and genuine commitment to our success have been exceptional."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
