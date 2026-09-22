import Hero from "../components/home/Hero";
import Achievements from "../components/home/Achievements";
import FeaturedProperties from "../components/home/FeaturedProperties";
import CEOSection from "../components/home/CEOSection";
import PropertyTypes from "../components/home/PropertyTypes";
import Locations from "../components/home/Locations";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <FeaturedProperties />
      <CEOSection />
      <PropertyTypes />
      <Locations />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;