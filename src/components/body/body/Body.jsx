
import Hero from "./Hero";
import ProjectSection from "../project/ProjectSection";
import ContactSection from "../contactSection/ContactSection";
import './body.scss'
export default function Body() {
  return (
    <>
      <div className="body">
      <Hero />
      <ProjectSection />
      <div id="contactSection">
        <ContactSection />
      </div>
      </div>
    </>
  )
}
