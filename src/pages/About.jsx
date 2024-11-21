import React from 'react';
import Container from '../components/Container';
import Layout from '../layouts/Layout';
import Team from '../components/Team';

const AboutPage = () => {
  return (
    <Layout title="Welcome to Digital Loop Marketing">
      <main className="space-y-20">
        <Container>
          <div className="relative flex flex-col-reverse items-center md:flex-row" id="hero">
            <div className="row items-center py-5 md:pb-20 md:pt-10">
              <div className="text-center space-y-10">
                <h2 className="text-5xl font-medium leading-none md:text-6xl">
                  We Navigate the <br /> digital landscape <br /> for success
                </h2>
                <p className="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12">
                  Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                </p>
                <a
                  style={{
                    backgroundColor: '#1D4ED8', // Blue color
                    color: '#FFFFFF', // White text
                    padding: '1rem 2.25rem',
                    borderRadius: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    transition: 'background-color 0.3s, color 0.3s',
                    textDecoration: 'none',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#000000'; // Black on hover
                    e.target.style.color = '#FFFFFF'; // White text on hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1D4ED8'; // Revert to blue
                    e.target.style.color = '#FFFFFF'; // Revert to white text
                  }}
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/digitalloopmarketing/"
                  target="_blank"
                >
                  <h2 className="text-center text-xl font-normal leading-7">Book a consultation</h2>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex-row items-center">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6">
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./clients/01.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./clients/02.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img src="./clients/03.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./clients/04.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img src="./clients/05.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./clients/06.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" />
              </div>
            </div>
          </div>
        </Container>
        <Team />
      </main>
    </Layout>
  );
};

export default AboutPage;
