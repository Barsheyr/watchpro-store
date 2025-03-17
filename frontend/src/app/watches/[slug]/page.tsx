// import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
// import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";

// const WatchItem = async (props: { params: { slug: string } }) => {
//   const {
//     params: { slug },
//   } = props;

//   return (
//     <GameDetailsClient slug={slug}>
//       <GameDetailsServer slug={slug} />
//     </GameDetailsClient>
//   );
// };

// export default WatchItem;

// "use client";

// import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
// import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";

// const GameItem = async (props: { params: { slug: string } }) => {
//   const {
//     params: { slug },
//   } = props;

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

const GameItem = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  return (
    <GameDetailsClient slug={slug}>
      <GameDetailsServer slug={slug} />
    </GameDetailsClient>
  );
};

export default GameItem;
