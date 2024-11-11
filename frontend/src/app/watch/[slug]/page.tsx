"use client";

import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";

// eslint-disable-next-line @next/next/no-async-client-component
const WatchItem = async (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  return (
    <GameDetailsClient slug={slug}>
      <GameDetailsServer slug={slug} />
    </GameDetailsClient>
  );
};

export default WatchItem;
