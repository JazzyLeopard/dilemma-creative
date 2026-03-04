import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Dilemma Creative",
  description:
    "Neem contact op met Dilemma Creative. Boek een gratis kennismakingsgesprek voor social media beheer en content creatie.",
  openGraph: {
    title: "Contact — Dilemma Creative",
    description: "Boek een gratis kennismakingsgesprek.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
