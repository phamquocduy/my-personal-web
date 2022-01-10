import { MailIcon } from "@heroicons/react/solid";

import Button from "../bricks/button";
import TypedJobDesc from "./typed-job-desc";

const HeroSection = () => {
  return (
    <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        {/* Short intro */}
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="mt-6">
            <div className="text-lg font-bold text-indigo-600">Hi all, I&apos;m</div>

            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-extrabold text-black sm:text-5xl">Phạm Quốc Duy</h1>
              <p className="mt-6 text-xl text-gray-500">
                I would like to take the image of myself as being a passionate <TypedJobDesc /> Developer.
              </p>
              {/* <p className="mt-6 text-xl text-gray-500">
                I don&apos;t like to define myself by the work I&apos;ve done. I define myself by the work I want to do.
                Any skills can be taught, personality is inherent. I prefer to keep learning, continue challenging
                myself, and do interesting things that matter.
              </p> */}
            </div>

            <div className="mt-6">
              <Button>
                <MailIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Contact me
              </Button>
            </div>
          </div>
        </div>
        {/* End Short intro */}

        {/* <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
              </svg>
            </div>
            <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
              <img
                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
