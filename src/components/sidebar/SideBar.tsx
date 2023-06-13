import { FC } from "react";
import { Stack, Typo } from "../Styles";
import { COLORS } from "../../constants/colors";
import { ISideBar } from "./ISideBar.interface";
import { StackAnimated } from "./SideBar.styles";
import { OPTIONS } from "./OptionsMock";

const SideBar: FC<ISideBar> = ({ onClose }) => {
  return (
    <Stack width="100vw" style={{ position: "fixed", top: 0, left: 0 }}>
      <StackAnimated
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        flexDirection="column"
        width="66.6vw"
        height="100vh"
        bg="white"
        p="25px"
        initial={{ x: "100%" }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "100%",
        }}
      >
        <Stack onClick={onClose} mb="50px">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#69707D"
              fill-rule="evenodd"
            />
          </svg>
        </Stack>

        {OPTIONS.map((opt, i) => (
          <Stack mb="22px" key={i}>
            <Typo size="18px" bold>
              {opt.label}
            </Typo>
          </Stack>
        ))}
      </StackAnimated>
      <Stack
        height="100vh"
        width="33.3vw"
        bg={COLORS.secondary.backdrop}
        onClick={onClose}
      />
    </Stack>
  );
};

export default SideBar;
