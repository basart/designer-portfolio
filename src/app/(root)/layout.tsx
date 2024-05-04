import BaseTemplate from "@/templates/BaseTemplate";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseTemplate>
      {children}
    </BaseTemplate>
  );
}
