import Link from "next/link";
import Image from "next/image";

type PhotoBlockProps = {
  image: string;
  link: string;
  height: string;
  heading: string;
};

const PhotoBlock = ({ image, link, height, heading }: PhotoBlockProps) => {
  return (
    <>
      <div>
        <Link href={link}>
          <div className={`group relative cursor-pointer`}>
            <Image
              className="transition ease-in-out delay-150 duration-700 group-hover:opacity-50 group-hover:-translate-y-1 group-hover:scale-110"
              src={image}
              layout="responsive"
              width="100%"
              height={`${height}%`}
              objectFit="cover"
              objectPosition="50%,50%"
              alt="Photo"
            />
            <div className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-300 font-primary font-bold">
              <h1>{heading}</h1>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default PhotoBlock;
