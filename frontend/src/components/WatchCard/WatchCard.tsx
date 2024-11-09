import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import watchCardClassNames from "./watchCardClassName";

interface WatchCardProps {
  watchName: string;
  imageUrl: string;
  slug: string;
  price: number;
}

const WatchCard: FC<WatchCardProps> = (props) => {
  const { watchName, imageUrl, slug, price } = props;

  return (
    <Link href={`/watch/${slug}`} className={watchCardClassNames.container}>
      <h3 className={watchCardClassNames.price}>{price} $</h3>

      <Image
        className={watchCardClassNames.image}
        src={imageUrl}
        alt={watchName}
        width={200}
        height={200}
      />

      <div className={watchCardClassNames.watchName}>{watchName}</div>
    </Link>
  );
};

export default WatchCard;
