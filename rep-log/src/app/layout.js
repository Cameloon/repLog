import "./globals.css";


export const metadata = {
  title: "repGen",
  description: "protection status checker, certificate of origin generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
