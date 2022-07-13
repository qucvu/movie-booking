import styled from "styled-components";

// interface props {
//   children: string;
//   variant: string;
//   className: string;
//   rest: string;
// }
// export const Text = ({ children, variant, className, ...rest }: props) => {
//   return (
//     <button className={className} {...rest}>
//       {children}
//     </button>
//   );
// };

// export const TextFooter = styled.p<{
//   padding?: string;
//   color?: string;
//   fontSize?: string;
//   fontWeight?: string;
//   hover?: boolean;
// }>`
//   color: ${(props) => props.color};
//   font-size: ${(props) => props.fontSize};
//   font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 500)};
//   letter-spacing: 1px;
//   line-height: 1.6;
//   padding: ${(props) => props.padding};
// `;

export const WrapperFooter = styled.section`
  padding: 1.5rem 0;
  background-color: #212121;
  color: #fff;
`;

// export const Hr = styled.div<{ margin?: string }>`
//   background-color: #e0e0e0;
//   height: 2px;
//   margin: ${(props) => props.margin};
// `;
