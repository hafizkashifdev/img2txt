import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme";
import { Box } from "@mui/material";
import Header from "@/layout/header";
import Footer from "@/layout/footer/foooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Textify",
  description: "Image to Text Converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
            <Box
              marginX={{ xs: 1, md: 5 }}
              // position={"sticky"}
              // top={0}
              // zIndex={50}
              paddingY={{ xs: 1, md: 2 }}
              marginBottom={{ xs: 2, md: 3 }}
            >
              <Header />
            </Box>
            <Box flexGrow={1}>{children}</Box>
            <Box marginTop={{ xs: 2.5, md: 4.5 }}>
              <Footer/>
            </Box>
          </Box>
        </ThemeProvider></body>
    </html>
  );
}
