import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import heroClassNames from "./heroClassName";

const HeroSection: FC<{ showLink?: boolean }> = (props) => {
  const { showLink } = props;

  return (
    <section className={heroClassNames.hero}>
      <div className={heroClassNames.grid}>
        <div className={heroClassNames.content}>
          <h1 className={heroClassNames.heading}> Hargo </h1>
          <h1 className={heroClassNames.ctaText}> Unlock Your Time</h1>
          <p className={heroClassNames.paragraph}>
            Discover the perfect blend of precision and elegance with our
            signature timepiece. Designed to make a statement, this watch
            features a sleek, minimalist dial and refined craftsmanship,
            ensuring timeless style for every occasion. Whether conquering your
            daily challenges or dressing up for a night out, this watch stands
            as a testament to impeccable taste and reliability.
          </p>
          {showLink && (
            <div className="mt-8 sm:mt-10 rounded">
              <Link href="#recent-watches" className={heroClassNames.button}>
                Find Watch
              </Link>
            </div>
          )}
        </div>

        <div className={heroClassNames.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Watch"
            className={heroClassNames.image}
            width="400"
            height={400}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
