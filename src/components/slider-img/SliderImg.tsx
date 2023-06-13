import { FC, useEffect, useMemo, useState } from "react";
import { Stack } from "../Styles";
import { ISliderImg } from "./SliderImg.interface";
import { Next, Prev } from "./SliderImg.styles";

const SliderImg: FC<ISliderImg> = ({ imgs }) => {
  const [idx, setIdx] = useState(0);
  const [img, setImg] = useState(imgs[idx].img);

  const lastIdx = useMemo(() => {
    return imgs.length - 1
  }, [imgs]);

  function nextPic() {
    if(idx === lastIdx) return;
    setIdx(i => i+1);
  }
  
  function prevPic() {
    if(idx === 0) return
    setIdx(i => i-1);
  }

  useEffect(() => {
    setImg(imgs[idx].img)
  }, [idx, imgs]);
  return (
    <>
      <Prev onClick={prevPic}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </Prev>
      <Stack height="300px" width="375px">
        <img src={img} style={{ width: "100%", height: "100%" }} />
        <Next onClick={nextPic}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </Next>
      </Stack>
    </>
  );
};

export default SliderImg;
