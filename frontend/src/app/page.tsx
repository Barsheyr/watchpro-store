import Link from "next/link";
import Image from "next/image";

import HeroSection from "@/components/HeroSection/HeroSection";
import WatchCard from "@/components/WatchCard/WatchCard";
import WatchCategoryCard from "@/components/WatchCategoryCard/WatchCategoryCard";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getCategories, getGames, getRecentGames } from "@/libs/api";

export default async function Home() {
  const categories = await getCategories();
  const games = await getGames();
  const isTrendingGames = games?.filter((game) => game.isTrending);
  const isFeaturedGame = games?.find((game) => game.isFeatured);
  const recentGames = await getRecentGames();

  return (
    <>
      <HeroSection showLink />

      <section className={sectionClassNames.section}>
        <div className={sectionClassNames.trending}>
          <h2 className={sectionClassNames.trendingTitle}>
            Currently Trending Watches
          </h2>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
          {isTrendingGames.map((game) => (
            <WatchCard
              key={game._id}
              watchName={game.name}
              imageUrl={game.images[0].url}
              slug={game.slug.current}
              price={game.price}
            />
          ))}
        </div>
      </section>

      {isFeaturedGame && (
        <>
          <h3 className="font-semibold text-2xl max-w-3xl text-center mx-auto text-primary-dark pt-12 sm:pt-28 pb-8 sm:pb-16 leading-[125%] sm:leading-[187%]">
            Featured Game
          </h3>

          <section className={sectionClassNames.featured}>
            <div className={sectionClassNames.featuredContent}>
              <h2 className={featuredClassNames.gameName}>
                {isFeaturedGame.name}
              </h2>
              <p className={featuredClassNames.gameDetails}>
                {isFeaturedGame.description}
              </p>
              <Link href={`/games/${isFeaturedGame.slug.current}`}>
                <Image
                  src={isFeaturedGame.images[0].url}
                  alt={isFeaturedGame.name}
                  width={500}
                  height={500}
                  className={featuredClassNames.gameImage}
                />
              </Link>
            </div>
          </section>
        </>
      )}

      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519153017650-55aad829d4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        className={styles.categorySection}
      >
        <div className={styles.categoryContent}>
          <h2 className={styles.categoryHeading}>Categories</h2>
          <p className={styles.categorySubHeading}>
            Discover a collection of timepieces that combine classic design and
            modern functionality. Explore an array of watches, from elegant
            chronographs to minimalist styles, crafted for durability and
            precision. Make a statement with versatile designs, perfect for
            daily wear or special occasions, and experience the art of
            watchmaking that will keep you stylish and punctual.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((category) => (
              <WatchCategoryCard
                key={category._id}
                categoryImage={category.image}
                categoryName={category.name}
                slug={category.slug.current}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="recent-watches" className={recentGamesClasses.section}>
        <h2 className={recentGamesClasses.heading}>Our Recent Watch</h2>
        <p className={recentGamesClasses.subHeading}>
          Stay Ahead of the Gaming Curve with Our Latest Games.
        </p>

        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {games.map((game) => (
            <WatchCard
              key={game._id}
              watchName={game.name}
              imageUrl={game.images[0].url}
              price={game.price}
              slug={game.slug.current}
            />
          ))}
        </div>

        <Link href="watches" className={sectionClassNames.latestButton}>
          See All
        </Link>
      </section>

      <NewsLetter />
    </>
  );
}

const sectionClassNames = {
  section: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-5 text-black",
  trending: "flex flex-col sm:flex-row items-center justify-between mb-8",
  trendingTitle: "font-bold text-3xl sm:mr-4",
  trendingButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-primary hover:bg-primary-dark",
  latestButton:
    "mt-4 sm:mt-0 px-6 py-2 rounded-md bg-black border-2 border-primary-dark text-white ",
  featured: "pb-24 px-6 sm:px-12 md:px-20 lg:px-36 text-white",
  featuredContent: "mx-auto max-w-screen-xl",
};

// const watches = [
//   {
//     id: 1,
//     price: 12,
//     name: "Watch1",
//     slug: "watch1",
//     image:
//       "https://images.unsplash.com/photo-1444881421460-d838c3b98f95?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     price: 14,
//     name: "Watch2",
//     slug: "watch2",
//     image:
//       "https://images.unsplash.com/photo-1488132828189-4e416661b680?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     price: 42,
//     name: "Watch3 ",
//     slug: "watch3",
//     image:
//       "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGxheSUyMHN0YXRpb24lMjBmaWZhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
//   },
//   {
//     id: 4,
//     price: 27,
//     name: "Watch4",
//     slug: "watch4",
//     image:
//       "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const featuredGame = {
//   name: "Richard Mille",
//   description:
//     "Immerse yourself in timeless elegance with the 'Eternal Domination' timepiece. This watch, crafted for those who lead with confidence, features a striking design that commands attention. With precision engineering and refined detailing, it represents the perfect blend of strength and sophistication. Each element, from the durable case to the intricately designed dial, speaks of authority and grandeur. Whether navigating high-stakes decisions or simply marking moments, this watch ensures you always have a sense of control. Will you rise to greatness with the timepiece that defines ambition? Claim your destiny and make every second count with 'Eternal Domination.'",
//   slug: "eternal-domination",
//   image: "/images/trending.jpg",
// };

const featuredClassNames = {
  gameName:
    "font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 text-black",
  gameDetails: "max-w-screen-md text-sm mb-8 md:mb-12 text-black",
  gameImage: "h-72 md:h-96 lg:h-112 w-full object-cover rounded-lg",
};

const styles = {
  categorySection:
    "bg-center bg-cover bg-no-repeat py-16 sm:py-20 md:py-28 lg:py-32",
  categoryContent: "container mx-auto px-4 sm:px-6 md:px-8",
  categoryHeading:
    "text-center text-white max-w-md sm:max-w-lg md:max-w-2xl mx-auto text-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-[130%,187%,130%,130%]",
  categorySubHeading:
    "text-center bg-primary-gradient px-8 rounded-3xl py-5 max-w-md sm:max-w-lg md:max-w-4xl mx-auto text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-8",
};

const recentGamesClasses = {
  section: "py-16 lg:py-36 px-4 lg:px-36 text-white text-center",
  heading: "text-3xl lg:text-4xl font-bold mb-3 text-black",
  subHeading: "text-gray-400 max-w-xl mx-auto lg:text-lg",
};
