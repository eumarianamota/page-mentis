export function Footer() {
    return (
        <section id="footer" className="overflow-hidden text-gray-700 bg-amber-700 flex flex-col justify-center items-center text-center">
            <div className="bg-amber-700 w-full px-10 lg:py-40">
                <h2 className="text-4xl text-teal-50 text-center md:text-5xl font-bold white pb-10">Venha para a Mentis hoje mesmo.</h2>
                <button data-aos="zoom-in-up" className="bg-teal-50 text-gray-700 py-4 px-6 hover:scale-105 hover:shadow-xl hover:brightness-105 transition-discrete duration-300">
                    <a target="_blank" href="https://wa.me/556799998800?text=Olá, Mariana, tudo bem? Vim pela landing page de saúde mental, Mentis, desenvolvida por você.">AGENDE UMA CONSULTA</a></button>
            </div>

            <footer className="bg-amber-700 text-teal-50 w-full pb-15 px-10 flex flex-col gap-10 justify-start sm:flex-row sm:justify-between lg:px-30">
                <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-x">Mantenha contato.</h3>
                    <p>Feito com a <a target="_blank" href="https://wa.me/556799998800?text=Olá, Mariana, tudo bem? Vim pela landing page de saúde mental, Mentis, desenvolvida por você." className="text-teal-50 border-b border-b-teal-50">Mariana</a></p>
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-x">Dúvidas?</h3>
                    <a target="_blank" href="https://wa.me/556799998800?text=Olá, Mariana, tudo bem? Vim pela landing page de saúde mental, Mentis, desenvolvida por você." className="text-teal-50 border-b border-b-teal-50">Fale conosco</a>
                </div>

                <div className="flex justify-start gap-10 sm:justify-between">
                    <div className="flex flex-col items-start">
                        <a href="#about" className="text-teal-50 border-b border-b-teal-50">Sobre</a>
                        <a href="#services" className="text-teal-50 border-b border-b-teal-50">Serviços</a>
                        <a href="#team" className="text-teal-50 border-b border-b-teal-50">Equipe</a>
                    </div>

                    <div className="flex flex-col items-start">
                        <a href="#about" className="text-teal-50 border-b border-b-teal-50">Abordagem</a>
                        <a href="#blog" className="text-teal-50 border-b border-b-teal-50">Blog</a>
                        <a href="#about" className="text-teal-50 border-b border-b-teal-50">Primeiros passos</a>
                    </div>
                </div>
            </footer>
        </section>
        
    )
}