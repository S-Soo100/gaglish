import "./globals.css";
import { Nanum_Gothic } from "next/font/google";

const nanum_gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: "Gae-Glish",
  description: "English Vocabulary For Developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nanum_gothic.className}>{children}</body>
    </html>
  );
}
