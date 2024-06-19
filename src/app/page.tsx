import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <main className="w-full overflow-y-auto">
      <Hero />
      <Features />
      <Blogs />
      <NewsLetter />
      <Contact />
      <Footer />
    </main>
  );
}
