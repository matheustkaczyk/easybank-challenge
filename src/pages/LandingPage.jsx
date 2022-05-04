import { Articles } from "../components/Articles"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Information } from "../components/Information"
import { MenuHamburger } from "../components/Menu"
import { Presentation } from "../components/Presentation"

export const LandingPage = () => {
  return (
    <>
      <Header />
      <MenuHamburger />
      <Presentation />
      <Information />
      <Articles />
      <Footer />
    </>
  )
}