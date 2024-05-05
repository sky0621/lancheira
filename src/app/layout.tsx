import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";

const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Box Lunch",
  description: "",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="ja" className={NotoSansJP.className}>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#E98300",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
};

export default RootLayout;
