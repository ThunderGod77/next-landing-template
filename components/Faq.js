export default function FAQ() {
  return (
    <section className="bg-bookmark-white py-20">
      <div className="container">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
          <h1 className="text-3xl text-center text-bookmark-blue">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-bookmark-grey mt-4">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What is a Bookmark?</span>
            <i className="text-bookmark-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">How can I request a new browser?</span>
            <i className="text-bookmark-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">Is there a mobile app?</span>
            <i className="text-bookmark-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </i>
          </div>
          <div className="flex items-center border-b py-4">
            <span className="flex-1">What about other Chromium browsers?</span>
            <i className="text-bookmark-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </i>
          </div>
          <button
            type="button"
            className="mt-12 flex self-center btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
