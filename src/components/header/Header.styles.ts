import styled from "styled-components";
import { Stack } from "../Styles";
import { COLORS } from "../../constants/colors";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 375px) {
    height: 65px;
    padding: 0 24px;
  }
  @media (min-width: 376px) {
    height: 112px;
    padding: 0 160px;
    /* border: 1px solid red; */
  }
`;

export const HeaderItemDesktop = styled(Stack)`
  cursor: pointer;
  &:hover{
    border-bottom: 2px solid ${COLORS.primary.orange};
  }
`;