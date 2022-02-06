import { Link as ScrollLink } from "react-scroll";
import { MailIcon } from "@heroicons/react/solid";

import Button from "../bricks/button";
import TypedJobDesc from "./typed-job-desc";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
        {/* Short intro */}
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mt-6">
            <div className="text-lg font-bold text-violet-600">Hi all, I&apos;m</div>

            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-extrabold text-black sm:text-5xl">Phạm Quốc Duy</h1>
              <p className="mt-2 text-xl text-gray-500">
                or you can call me <span className="font-extrabold text-black">Martin 👋</span>
              </p>
              <p className="mt-6 text-xl text-gray-500">
                I would like to take the image of myself as being a passionate <TypedJobDesc />
              </p>
              <p className="mt-6 text-xl text-gray-500">
                I’m happiest when I’m creating, learning, exploring and thinking about how to make things better.
              </p>
            </div>

            <div className="mt-6">
              <ScrollLink to="contact-section" smooth={true} duration={500}>
                <Button>
                  <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                  Contact me
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>
        {/* End Short intro */}

        {/* Intro photo */}
        <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-0 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="relative items-center pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
              <img className="display-none w-full lg:h-full lg:w-auto lg:max-w-none" src="/images/me.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
