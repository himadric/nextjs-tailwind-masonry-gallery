import type { NextPage } from "next";
import Head from "next/head";
import { photos } from "../data/photos";
import PhotoBlock from "../components/PhotoBlock";

const buildPhotoBlocks = () => {
  let items = [];
  for (let index = 1; index < 5; index++) {
    items.push(
      <div key={index} className="flex flex-col justify-start gap-4">
        {photos
          .filter((photo) => photo.column === index)
          .map((filteredPhoto) => (
            <PhotoBlock
              key={filteredPhoto.id}
              image={filteredPhoto.src}
              link={filteredPhoto.link}
              height={filteredPhoto.height}
              heading={filteredPhoto.heading}
            />
          ))}
      </div>
    );
  }
  return items;
};
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nextjs Tailwind Masonry Image Gallery</title>
        <meta
          name="description"
          content="Nextjs Tailwind Masonry Image Gallery example."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-10 py-6">
        <h1 className=" text-4xl">Masonry Gallery</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
          {buildPhotoBlocks()}
        </div>
      </main>
    </div>
  );
};

export default Home;
