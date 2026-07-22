import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticlesBackground from "./ParticlesBackground";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen flex flex-col">
    {/* site-wide brand backdrop + particles, behind all content */}
    <div className="fixed inset-0 -z-10 bg-background">
      <ParticlesBackground />
    </div>
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
