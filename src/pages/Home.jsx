import catering from "../assets/img/catering.png";
import siakad from "../assets/img/siakad.png";
import penyewaan from "../assets/img/penyewaan.png";

const Home = () => {
  return (
    <>
      <section className="bg-light-background dark:bg-dark-background px-6 md:px-10 lg:px-10 py-0 md:py-40 lg:py-0">
        <div className="flex justify-center items-center h-dvh md:h-auto lg:h-dvh">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extralight text-light-secondary-text dark:text-dark-secondary-text leading-snug md:leading-normal lg:leading-relaxed">
            I’m a web developer specialising in{" "}
            <span className="font-black text-light-primary-text dark:text-dark-primary-text">
              Frontend Development
            </span>{" "}
            and{" "}
            <span className="font-black text-light-primary-text dark:text-dark-primary-text">
              UI/UX Implementation
            </span>
          </h1>
        </div>
      </section>

      <section className="bg-light-background dark:bg-dark-background px-6 md:px-7 lg:px-10 py-36">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-light-secondary-text dark:text-dark-secondary-text">
            Selected{" "}
            <span className="text-light-primary-text dark:text-dark-primary-text font-black">
              Works
            </span>
          </h1>
          <a
            href=""
            className="text-sm md:text-base font-medium capitalize hover:underline transition-all ease-in-out duration-300 text-light-secondary-text dark:text-dark-secondary-text"
          >
            view all
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-20 lg:gap-y-24 mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-0 md:gap-x-5 lg:gap-x-10 gap-y-5 md:gap-y-0">
            <div className="order-1 md:order-1">
              <img src={catering} alt="" className="w-full object-cover" />
            </div>
            <div className="text-center md:text-start order-2 md:order-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl uppercase font-semibold md:font-bold text-light-primary-text dark:text-dark-primary-text">
                aplikasi catering
              </h1>
              <p className="text-base md:text-lg text-justify line-clamp-6 lg:line-clamp-none text-light-secondary-text dark:text-dark-secondary-text py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                quae recusandae rerum dolore incidunt molestiae libero earum
                magni neque commodi natus consectetur impedit quaerat, modi
                saepe repellat minima porro ipsa.
              </p>
              <a
                href=""
                className="bg-light-button-bg dark:bg-dark-button-bg text-light-button-text dark:text-dark-button-text shadow shadow-light-shadow dark:shadow-dark-shadow hover:bg-light-button-hover-bg hover:dark:bg-dark-button-hover-bg transition-all ease-in-out duration-300 text-lg capitalize rounded-full block md:inline-block px-4 md:px-6 lg:px-10 py-1.5"
              >
                view work
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-0 md:gap-x-5 lg:gap-x-10 gap-y-5 md:gap-y-0">
            <div className="order-1 md:order-2">
              <img src={siakad} alt="" className="w-full object-cover" />
            </div>
            <div className="text-center md:text-start order-2 md:order-1">
              <h1 className="text-xl md:text-2xl lg:text-3xl uppercase font-semibold md:font-bold text-light-primary-text dark:text-dark-primary-text">
                aplikasi siakad
              </h1>
              <p className="text-base md:text-lg text-justify line-clamp-6 lg:line-clamp-none text-light-secondary-text dark:text-dark-secondary-text py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                quae recusandae rerum dolore incidunt molestiae libero earum
                magni neque commodi natus consectetur impedit quaerat, modi
                saepe repellat minima porro ipsa.
              </p>
              <a
                href=""
                className="bg-light-button-bg dark:bg-dark-button-bg text-light-button-text dark:text-dark-button-text shadow shadow-light-shadow dark:shadow-dark-shadow hover:bg-light-button-hover-bg hover:dark:bg-dark-button-hover-bg transition-all ease-in-out duration-300 text-lg capitalize rounded-full block md:inline-block px-4 md:px-6 lg:px-10 py-1.5"
              >
                view work
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-0 md:gap-x-5 lg:gap-x-10 gap-y-5 md:gap-y-0">
            <div className="order-1 md:order-1">
              <img src={penyewaan} alt="" className="w-full object-cover" />
            </div>
            <div className="text-center md:text-start order-2 md:order-2">
              <h1 className="text-xl md:text-2xl lg:text-3xl uppercase font-semibold md:font-bold text-light-primary-text dark:text-dark-primary-text">
                aplikasi penyewaan
              </h1>
              <p className="text-base md:text-lg text-justify line-clamp-6 lg:line-clamp-none text-light-secondary-text dark:text-dark-secondary-text py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                quae recusandae rerum dolore incidunt molestiae libero earum
                magni neque commodi natus consectetur impedit quaerat, modi
                saepe repellat minima porro ipsa.
              </p>
              <a
                href=""
                className="bg-light-button-bg dark:bg-dark-button-bg text-light-button-text dark:text-dark-button-text shadow shadow-light-shadow dark:shadow-dark-shadow hover:bg-light-button-hover-bg hover:dark:bg-dark-button-hover-bg transition-all ease-in-out duration-300 text-lg capitalize rounded-full block md:inline-block px-4 md:px-6 lg:px-10 py-1.5"
              >
                view work
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
