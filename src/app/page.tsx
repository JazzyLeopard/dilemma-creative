import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Niches } from "@/components/Niches";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dilemma Creative",
    description:
      "Social media beheer & content creatie voor food & beauty ondernemers in Vlaanderen.",
    url: "https://dilemmacreative.be",
    logo: "https://dilemmacreative.be/icon.svg",
    email: "hello@dilemmacreative.be",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Vlaanderen, België",
    },
    knowsLanguage: "nl",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Social Media Beheer" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Content Creatie" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Social Media Strategie" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Social Media Advertenties" },
        },
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Niches />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
