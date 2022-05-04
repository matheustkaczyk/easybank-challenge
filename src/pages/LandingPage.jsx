import { Articles } from "../components/Articles"
import { Header } from "../components/Header"
import { Information } from "../components/Information"
import { Presentation } from "../components/Presentation"

export const LandingPage = () => {
  return (
    <main>
      <Header />
      <Presentation />
      <Information />
      <Articles />
    </main>
  )
}