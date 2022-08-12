import { styled } from "baseui";

export const DivWrapper = styled("div", (props: any) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: props.$theme.colors.primaryB,
  overflow: "hidden",
}));

export const Paragraph = styled("p", (props: any) => ({
  ...props.$theme.typography.font200,
  color: props.$theme.colors.contentSecondary,
  marginBottom: props.$nomb ? "0.25" : "0.75rem",
}));

export const Title = styled("h1", (props: any) => ({
  fontWeight: 500,
  color: props.$theme.colors.primary,
  fontSize: "20px",
  lineHeight: "22px",
}));

export const SubSection = styled("div", (props: any) => ({
  padding: "0 1.5rem",
  borderLeftColor: props.$theme.colors.primaryA,
  transition: "opacity 0.25s ease",
  ":hover": {
    opacity: 0.75,
  },
}));

export const Label = styled("h4", (props: any) => ({
  fontWeight: 500,
  color: props.$theme.colors.contentSecondary,
  fontSize: "16px",
  lineHeight: "22px",
//   marginBottom: "0.25rem",
}));

export const SectionTitle = styled("h1", (props: any) => ({
  fontWeight: 400,
  color: props.$theme.colors.primaryA,
  fontSize: "28px",
  lineHeight: "18px",
  marginBottom: "10px",
}));

export const BorderedInfoList = styled('div', (props: any) => ({
    borderLeftWidth: '2px',
    padding: '0.25rem 0.5rem',
    borderLeftColor: props.$theme.colors.borderOpaque,
    borderLeftStyle: 'solid',
    marginBottom: '1.5rem',
  }));
