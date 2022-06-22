export default function Hero() {
  return (
    <header className="mt-10 bg-white mb-[4.5rem]">
      <div className="container flex flex-col-reverse md:flex-row md:items-center">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 h-max">
          <div className="w-max max-w-full mx-auto text-center">
            <h1 className="mx-auto md:mx-0 md:text-left text-[2.85rem] leading-[3rem] lg:text-6xl max-w-md text-veryDarkViolet">
              More than just shorter links
            </h1>
            <p className="max-w-sm md:mx-0 text-grayishViolet mt-4 md:text-left mx-auto">
              Build your brand's recognition and get detailed insights on how
              your links performing.
            </p>
            <a href="#!" className="btn btnCyan btnLg mt-8 mx-auto md:mx-0">
              Get Started
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center">
          <div className="md:w-max max-w-[450px] md:max-w-full mx-auto h-max">
            <img
              src="/images/illustration-working.svg"
              className="min-w-[370px] sm:min-w-[450px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
