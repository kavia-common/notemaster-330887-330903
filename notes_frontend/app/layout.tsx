import type { ReactNode } from "react";

export const metadata = {
  title: "Notes App",
  description: "Minimal preview-ready notes frontend"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
