import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Workflows from "./components/Workflows";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Workflows />
        <Contact />
      </main>
      <footer className="max-w-2xl mx-auto px-6 py-8 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Henry Markwardt
        </p>
      </footer>
    </>
  );
}
