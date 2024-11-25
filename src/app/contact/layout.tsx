import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "contact page of movie maina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
