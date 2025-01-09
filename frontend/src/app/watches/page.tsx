import WatchCard from "@/components/WatchCard/WatchCard";
import HeroSection from "@/components/HeroSection/HeroSection";

import { getGames } from "@/libs/api";

const Watches = async (props: {}) => {
  const watches = await getGames();

  return (
    <div>
      <HeroSection />

      <section className={classNames.section}>
        <h2 className={classNames.heading}> Watches </h2>
        <p className={classNames.subHeading}>
          Checkout our latest collection of watches
        </p>

        <div className="flex rounded gap-8 flex-wrap py-10">
          {watches.map((watch) => (
            <WatchCard
              key={watch._id}
              watchName={watch.name}
              imageUrl={watch.images[0].url}
              price={watch.price}
              slug={watch.slug.current}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Watches;

const classNames = {
  section: "py-16 lg:pb-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-6xl font-bold mb-3 text-black",
  subHeading: "max-w-xl mx-auto lg:text-xl text-black",
};
