export function Footer() {
    return (
        <section className="overflow-hidden text-gray-700 bg-white flex flex-col justify-center items-center pt-10 text-center">
            <div className="bg-emerald-900 w-full py-20 px-10 lg:py-40">
                <h2 className="text-4xl text-teal-50 text-center md:text-5xl font-bold white pb-10">Venha para a Mentis hoje mesmo.</h2>
                <button className="bg-white text-gray-700 py-4 px-6">AGENDE UMA CONSULTA</button>
            </div>

            <footer className="bg-white w-full py-15 px-10 flex flex-col gap-10 justify-start sm:flex-row sm:justify-between lg:px-30">
                <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-x">Mantenha contato.</h3>
                    <p>Feito com a <a href="#" className="text-amber-700 border-b border-b-amber-700">Mariana</a></p>
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="font-semibold text-x">Dúvidas?</h3>
                    <a href="#" className="text-amber-700 border-b border-b-amber-700">Fale conosco</a>
                </div>

                <div className="flex justify-start gap-10 sm:justify-between">
                    <div className="flex flex-col items-start">
                        <a href="#" className="text-amber-700 border-b border-b-amber-700">Sobre</a>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700">Serviços</a>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700">Equipe</a>
                    </div>

                    <div className="flex flex-col items-start">
                        <a href="#" className="text-amber-700 border-b border-b-amber-700">Abordagem</a>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700">Blog</a>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700">Primeiros passos</a>
                    </div>
                </div>
            </footer>
        </section>
        
    )
}