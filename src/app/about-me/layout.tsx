import BaseTemplate from "@/templates/BaseTemplate";

// export const metadata: Metadata = {
//   title: "Polina Basova",
//   description: "Designer Portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseTemplate withFooter={false}>
      {children}
    </BaseTemplate>
  );
}
