import GameDetailsClient from "@/components/GameDetails/GameDetailsClient";
import GameDetailsServer from "@/components/GameDetails/GameDetailsServer";

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
