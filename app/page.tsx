import { About } from "./_components/about";
import { Blog } from "./_components/blog";
import { Feedback } from "./_components/feedback";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Team } from "./_components/team";

export default function Home() {
    return(
        <main>
            < Hero />
            < About />
            < Services />
            < Team />
            < Feedback />
            < Blog />
            < Footer />
        </main>
    )
}