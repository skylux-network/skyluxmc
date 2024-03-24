import Link from "@docusaurus/Link";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "yummacss/dist/yumma.css";

const Index = () => {
    return (
        <div>
            <Header appName="Skylux MC" />
            <section class="lg:px-18 pos-r pt-4 px-4">
                <div class="lg:py-18 mx-auto py-4 sm:py-16">
                    <div class="ta-c">
                        <h1 class="fs-6xl">A Reabertura Da Skylux!</h1>
                        <p class="fs-lg lh-5 mt-2 t-d-lead-1">
                            Somos um servidor de mini jogos de Minecraft que conta com vários modos de jogo populares!
                        </p>
                        <div class="cg-6 ins mt-3">
                            <Link to="/blog" class="btn-teal fw-600 t-white h:t-white">Últimas Notícias</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer appName="Skylux MC" />
        </div>
    );
}
export default Index;