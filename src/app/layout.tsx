import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/themeContext";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://suraj-portfolio-c0mpmpfy8-surajgit07s-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Suraj Mishra — Data Engineer",
    template: "%s · Suraj Mishra",
  },
  description:
    "Data Engineer building batch and streaming pipelines with PySpark, Kafka, Snowflake, dbt, and Airflow across AWS and Azure. Databricks Professional & SnowPro Core certified.",
  keywords: [
    "Suraj Mishra",
    "Data Engineer",
    "PySpark",
    "Apache Kafka",
    "Snowflake",
    "dbt",
    "Apache Airflow",
    "Databricks",
    "AWS",
    "Azure",
    "Delta Lake",
  ],
  authors: [{ name: "Suraj Mishra", url: "https://github.com/suraj-git07" }],
  creator: "Suraj Mishra",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Suraj Mishra — Data Engineer",
    description:
      "Batch & streaming data pipelines, data quality frameworks, and cloud-native data platforms.",
    siteName: "Suraj Mishra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Mishra — Data Engineer",
    description:
      "Batch & streaming data pipelines, data quality frameworks, and cloud-native data platforms.",
    creator: "@Suraj_Mishra7",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1015" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${mono.variable}`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
