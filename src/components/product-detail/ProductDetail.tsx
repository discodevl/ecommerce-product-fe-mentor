import React from "react";
import { Stack, Typo } from "../Styles";
import { COLORS } from "../../constants/colors";

const MainContent = () => {
  return (
    <Stack p="24px" maxWidth="300px" gap="14px" flexDirection="column">
      <Typo bold size="12px" color={COLORS.primary.orange}>
        SNEAKER COMPANY
      </Typo>
      <Stack width="70%">
        <Typo bold size="28px" color={COLORS.secondary.very_dark_blue}>
          Fall Limited Edition Sneakers
        </Typo>
      </Stack>
      <Stack >
        <Typo size="14px">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Typo>
      </Stack>
    </Stack>
  );
};

export default MainContent;
