export default function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-blue-200 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">
            One line description of extension
          </h2>
          <p className="text-grey-300 text-lg text-center lg:text-left mb-6">
           { "Small paragraph about your extension.Tell a bit more about it's features and usecases"}
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button typeof="button" className="btn btn-purple">
              Get it on chrome
            </button>
            <button typeof="button" className="btn btn-purple">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src="./hero-bg.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
