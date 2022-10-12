export default function Card() {
  return (
    <div className="flex flex-col rounded-md shadow-md lg:mb-16">
      <div className="p-6 flex flex-col items-center">
        <img src="./logo-firefox.svg" alt="" />
        <h3 className="mt-5 mb-2 text-bookmark-blue text-lg">Add to Firefox</h3>
        <p class="mb-2 text-bookmark-grey font-light">Minimum version 62</p>
      </div>
      <hr className="border-b border-bookmark-white" />
      <div className="flex p-6">
        <button
          type="button"
          className="flex-1 btn btn-purple hover:bg-bookmark-white hover:text-black"
        >
          Add & Install Extension
        </button>
      </div>
    </div>
  );
}
