import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Tile({data}) {
    
  const router = useRouter();
  const spotlight = data[Math.floor(Math.random() * data.length)]

  return (
    <>
      <section >
        <div className="artTile__artwork">
          <Image
            src={spotlight.imageSource}
            alt={spotlight.name}
            width={spotlight.dimensions.width / 3}
            height={spotlight.dimensions.height / 3}
          />
        </div>
        <div className="artTile__information">
          <p>
            Name of artwork:&nbsp;<em>{spotlight.name}</em>
          </p>
          <p>
            Artist:&nbsp;<em>{spotlight.artist}</em>
          </p>
        </div>
      </section>
    </>
  );
}
