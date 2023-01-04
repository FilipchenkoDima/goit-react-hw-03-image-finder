import { ImageGalleryCard, GalleryCardImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures, onClickImg }) => {
  return pictures.map((picture, index) => {
    return (
      <ImageGalleryCard key={index}>
        <GalleryCardImg
          onClick={() => {
            onClickImg(picture.largeImageURL);
          }}
          src={picture.webformatURL}
          alt={picture.tags}
        />
      </ImageGalleryCard>
    );
  });
};
