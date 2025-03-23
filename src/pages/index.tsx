import OfferSection from "@/components/Sections/OfferSection";
import AirlineList from "@/components/Sections/AirlineList";
import DestinationList from "@/components/Sections/DestinationList";
import Footer from "@/components/Layout/Footer";
import PromoBanner from "@/components/Sections/PromoBanner";
import Header from "@/components/Layout/Header";

export default function Home() {
  return (
    <>
      <title>Hazetrip</title>
      <Header />
      <OfferSection />
      <AirlineList />
      <DestinationList />
      <PromoBanner />
      <Footer />
    </>
  );
}
