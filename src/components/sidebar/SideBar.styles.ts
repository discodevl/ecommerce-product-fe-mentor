import { motion } from "framer-motion";
import styled from "styled-components";

interface IStack {
  flexDirection?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  bg?: string;
  p?: string;
  px?: string;
  py?: string;
  m?: string;
  mx?: string;
  my?: string;
}

export const StackAnimated = styled(motion.div)<IStack>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  gap: ${({ gap }) => gap && gap};
  background-color: ${({ bg }) => bg && bg};
  padding: ${({ p, px, py }) => {
    if (p) return p;
    if (px) return `0 ${px}`;
    if (py) return `0 ${px}`;
  }};

  margin: ${({ m, mx, my }) => {
    if (m) return m;
    if (mx) return `0 ${mx}`;
    if (my) return `${my} 0`;
  }};
`;