import Masonry from 'react-masonry-css';
import { images } from '../data/images';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

function MasonryGrid() {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="pin"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      ))}
    </Masonry>
  );
}

export default MasonryGrid;
