import imgMain from "../assets/images/image-product-1.jpg";
import imgMainThumb from "../assets/images/image-product-1-thumbnail.jpg";
import img2 from "../assets/images/image-product-2.jpg";
import img2Thumb from "../assets/images/image-product-2-thumbnail.jpg";
import img3 from "../assets/images/image-product-3.jpg";
import img3Thumb from "../assets/images/image-product-3-thumbnail.jpg";
import img4 from "../assets/images/image-product-4.jpg";
import img4Thumb from "../assets/images/image-product-4-thumbnail.jpg";

export interface IIMG {
  img: string;
  thumb: string;
}

export const IMAGES: IIMG[] = [
  { img: imgMain, thumb: imgMainThumb },
  { img: img2, thumb: img2Thumb },
  { img: img3, thumb: img3Thumb },
  { img: img4, thumb: img4Thumb },
];
