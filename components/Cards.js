import Card from "./Card";

export default function Cards() {
  return (
    <section class="py-20 mt-20">
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <h1 class="text-3xl text-center text-bookmark-blue">
          Download the extension
        </h1>
        <p class="text-center text-bookmark-grey mt-4">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
