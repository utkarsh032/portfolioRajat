const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto text-neutral-200">
      <div className="absolute inset-0 top-[120px]  max-w-7xl mx-auto flex justify-between translate-y-1/4">
        <div className="w-1/2 ">
          <h1 className="text-6xl font-extrabold ">
            Hi, {`I'm`} <br />
            <span className="bg-gradient-to-r from-[#94bbe9] to-[#eeaeca] text-transparent bg-clip-text">
              Rajat Kumar
            </span>
          </h1>
          <p className="text-xl py-5 font-bold ">
            Designing immersive digital journeys with precision and creativity
            for enhanced user engagement.
          </p>
          <button className="border rounded-full px-2 py-1 backdrop-blur-md">
            About me
          </button>
        </div>

        <div className="w-1/2">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/ui-ux-design-5996826-4972885.png"
            className=""
            alt="heroArt"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
