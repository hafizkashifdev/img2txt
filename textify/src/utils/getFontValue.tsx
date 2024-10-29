'use client'
import { useTheme } from "@mui/material/styles";
import useResponsive from "../hooks/useResponsive";

// ----------------------------------------------------------------------

export default function GetFontValue(variant: any) {
  const theme: any = useTheme();
  const breakpoints = useWidth();

  const key = theme.breakpoints.up(breakpoints === "xl" ? "lg" : breakpoints);

  const hasResponsive =
    variant === "h1" ||
    variant === "h2" ||
    variant === "h3" ||
    variant === "h4" ||
    variant === "h5" ||
    variant === "h6";

  const getFont =
    hasResponsive && theme.typography[variant][key]
      ? theme.typography[variant][key]
      : theme.typography[variant];

  const fontSize = remToPx(getFont.fontSize);
  const lineHeight = Number(theme.typography[variant].lineHeight) * fontSize;
  const { fontWeight } = theme.typography[variant];
  const { letterSpacing } = theme.typography[variant];

  return { fontSize, lineHeight, fontWeight, letterSpacing };
}

// ----------------------------------------------------------------------

export function remToPx(value: any) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: any) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ xs, sm, md, lg }: any) {
  return {
    "@media (max-width:600px)": {
      fontSize: pxToRem(xs),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const useWidth = () => {
  const theme = useTheme();

  // Check each breakpoint directly with separate useResponsive calls
  const isXl = useResponsive("up", "xl");
  const isLg = useResponsive("up", "lg");
  const isMd = useResponsive("up", "md");
  const isSm = useResponsive("up", "sm");

  // Return the first matched breakpoint in descending order
  if (isXl) return "xl";
  if (isLg) return "lg";
  if (isMd) return "md";
  if (isSm) return "sm";
  
  // Default to 'xs' if no match is found
  return "xs";
};