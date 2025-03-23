"use client";

import GameDetailsClient from "../../../components/GameDetails/GameDetailsClient";
import GameDetailsServer from "../../../components/GameDetails/GameDetailsServer";

const GameItem = ({ params }) => {
  const { slug } = params;

  return (
    <GameDetailsClient slug={slug}>
      <GameDetailsServer slug={slug} />
    </GameDetailsClient>
  );
};

export default GameItem;
