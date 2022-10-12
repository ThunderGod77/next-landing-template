export default function Features(){
    return(
        <div className="relative mt-20 lg:mt-24">
        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
         
          <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
            <img
              className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
              src="./illustration-features-tab-1.png"
              alt=""
            />
          </div>
        
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="text-3xl text-bookmark-blue">Bookmark in one click</h1>
            <p className="text-grey-300 my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
              Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control
              over how you manage your favourite sites.
            </p>
            <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">More Info</button>
          </div>
        </div>
        
        
      </div>
    )
}