const ShowcaseImage = () => {
  return (
    <section className="bg-black pb-20 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <img
          src="/placeholder.png" // <-- Let me know the real name of your image file!
          alt="Showcase"
          className="rounded-lg shadow-2xl mx-auto w-full max-w-6xl"
        />
      </div>
    </section>
  );
};

export default ShowcaseImage;