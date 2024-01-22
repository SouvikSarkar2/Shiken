import { getServerSession } from "next-auth";
import "./globals.css";
import SessionProvider from "@/components/main/SessionProvider";

export const metadata = {
  icons: {
    icon: "/shiken.svg",
  },
  title: "S  H  i  K  e  N",
  description: "A simple Quiz app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
