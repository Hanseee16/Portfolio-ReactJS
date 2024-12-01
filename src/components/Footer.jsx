const Footer = () => {
  return (
    <>
      <footer className="max-w-full text-center px-5 py-5 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border">
        <div>
          <h1 className="text-2xl text-light-secondary-text dark:text-dark-secondary-text">
            Get{" "}
            <span className="font-black text-light-primary-text dark:text-dark-primary-text">
              in Touch.
            </span>
          </h1>
          <p className="text-base text-light-secondary-text dark:text-dark-secondary-text">
            So that we can talk more about...
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 my-6 text-light-primary-text dark:text-dark-primary-text">
          <a href="">
            <i className="ri-mail-fill"></i>
          </a>
          <a href="">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="">
            <i className="ri-whatsapp-fill"></i>
          </a>
          <a href="">
            <i className="ri-linkedin-fill"></i>
          </a>
        </div>
        <div>
          <h1 className="text-base text-light-secondary-text dark:text-dark-secondary-text">
            Made with ❣️ by{" "}
            <span className="font-black capitalize text-light-primary-text dark:text-dark-primary-text">
              farhan kamil
            </span>
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
