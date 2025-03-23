import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import gameCardClassNames from "./gameCardClassName";

interface WatchCardProps {
  gameName: string;
  imageUrl: string;
  slug: string;
  price: number;
}

const WatchCard: FC<WatchCardProps> = (props) => {
  const { gameName, imageUrl, slug, price } = props;

  return (
    <Link href={`/watches/${slug}`} className={gameCardClassNames.container}>
      <h3 className={gameCardClassNames.price}>{price} $</h3>

      <Image
        className={gameCardClassNames.image}
        src={imageUrl}
        alt={gameName}
        width={200}
        height={200}
      />

      <div className={gameCardClassNames.watchName}>{gameName}</div>
    </Link>
  );
};

export default WatchCard;
