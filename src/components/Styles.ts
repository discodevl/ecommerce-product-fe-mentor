import styled from "styled-components";

interface IStack {
  flexDirection?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  bg?: string;
  bgImage?: string;
  
  p?: string;
  px?: string;
  py?: string;

  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  
  m?: string;
  mx?: string;
  my?: string;
  
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
}

export const Stack = styled.div<IStack>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  width: ${({ width }) => width && width};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  height: ${({ height }) => height && height};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  gap: ${({ gap }) => gap && gap};
  background-color: ${({ bg }) => bg && bg};
  background-image: ${({bgImage}) => bgImage && `url(${bgImage})`};
  

  padding: ${({ p, px, py }) => {
    if (p) return p;
    if (px) return `0 ${px}`;
    if (py) return `0 ${px}`;
  }};
  padding-top: ${({pt}) => pt && pt};
  padding-right: ${({pr}) => pr && pr};
  padding-bottom: ${({pb}) => pb && pb};
  padding-left: ${({pl}) => pl && pl};
  
  margin: ${({ m, mx, my }) => {
    if (m) return m;
    if (mx) return `0 ${mx}`;
    if (my) return `${my} 0`;
  }};
  margin-top: ${({mt}) => mt && mt};
  margin-right: ${({mr}) => mr && mr};
  margin-bottom: ${({mb}) => mb && mb};
  margin-left: ${({ml}) => ml && ml};
`;

interface ITypo {
  bold?: boolean;
  size?: string;
  color?: string;
  isTitle?: boolean;
}

export const Typo = styled.span<ITypo>`
  font-weight: ${({ bold }) => bold && "bold"};
  font-size: ${({ size }) => size && size};
  color: ${({ color }) => color && color};
  font-family: ${({ isTitle }) => (isTitle ? "Outfit" : "Kumbh Sans")};
`;
