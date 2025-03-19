// "use client";

// import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
// import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";

// const GameItem = ({ params }: { params: { slug: string } }) => {
//   const { slug } = params;

//   return (
//     <GameDetailsClient slug={slug}>
//       <GameDetailsServer slug={slug} />
//     </GameDetailsClient>
//   );
// };

// export default GameItem;

"use client";

import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";
import { getGames } from "@/libs/api";

export async function generateStaticParams() {
  const games = await getGames();
  return games.map((game) => ({ slug: game.slug.current }));
}

const GameItem = ({ params }: { params: { slug: string } }) => {
  return (
    <GameDetailsClient slug={params.slug}>
      <GameDetailsServer slug={params.slug} />
    </GameDetailsClient>
  );
};

export default GameItem;
