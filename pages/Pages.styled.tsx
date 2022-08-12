import { styled } from "baseui";

export const DivWrapper = styled("div", (props: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minHeight: '160px',
  flexDirection: "row",
  backgroundColor: props.$theme.colors.primaryB,
  overflow: "hidden",
}));

export const Paragraph = styled("p", (props: any) => ({
  ...props.$theme.typography.font200,
  color: props.$theme.colors.contentSecondary,
  marginBottom: "0.75rem",
}));

export const SubSection = styled("div", (props: any) => ({
    padding: "0 1.5rem",
    borderLeftColor: props.$theme.colors.primaryA,
    transition: 'opacity 0.25s ease',
    ':hover': {
      opacity: 0.75,
    },
}))

export const SectionTitle = styled('h1', (props: any) => ({
    fontWeight: 400,
    color: props.$theme.colors.primaryA,
    fontSize: '28px',
    lineHeight: '18px',
    marginBottom:'10px',
  }));