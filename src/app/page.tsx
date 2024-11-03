import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import EventsSection from "@/components/EventsSection"
import GetInvolvedSection from "@/components/GetInvolvedSection"
import Footer from "@/components/Footer"
import Form from "@/components/Form";

export default function Page() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <HeroSection/>
        <AboutSection/>
        <EventsSection/>
        <GetInvolvedSection/>
        <Form/>
      </main>
      <Footer/>
    </div>
  )
}
