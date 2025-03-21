import GameCard from "@/components/GameCard/GameCard";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getCategory, getCategoryGames } from "@/libs/api";

// Define the expected props for the page
interface CategoryPageProps {
  params: {
    slug: string;
  };
}

const GameCategory = async ({ params }: CategoryPageProps) => {
  const { slug } = params; // ✅ No need to cast

  const games = await getCategoryGames(slug);
  const { subtitle } = await getCategory(slug);

  return (
    <>
      <section className={classNames.hero}>
        <div className={classNames.heroContent}>
          <div className="lg:w-3/4">
            <h1 className={classNames.title}>{slug.toUpperCase()} Games</h1>
            <p className={classNames.subtitle}>{subtitle}</p>
          </div>
        </div>
      </section>

      <section className={classNames.section}>
        <h2 className={classNames.heading}>{slug.toUpperCase()} Games</h2>
        <p className={classNames.subHeading}>
          Checkout our latest collection of{" "}
          <span className="text-primary">{slug}</span> games
        </p>
        <div className="flex rounded gap-8 flex-wrap py-10">
          {games.map((game) => (
            <GameCard
              key={game._id}
              gameName={game.name}
              imageUrl={game.images[0].url}
              price={game.price}
              slug={game.slug.current}
            />
          ))}
        </div>
      </section>

      <NewsLetter />
    </>
  );
};

export default GameCategory;

const classNames = {
  hero: "relative py-16 md:py-20 bg-cover bg-[url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxheSUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60')]",
  heroContent:
    "relative bg-primary-gradient inline-block max-w-screen-xl mx-auto px-4 py-8 md:py-12 lg:px-8 lg:py-20",
  title:
    "text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white",
  subtitle: "mt-2 md:mt-4 max-w-3xl text-sm md:text-xl text-gray-300",
  section: "py-16 lg:py-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-4xl font-bold mb-3",
  subHeading: "text-gray-400 max-w-xl mx-auto lg:text-lg",
};
