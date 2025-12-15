import { Syringe, Target, Pill, Armchair } from "lucide-react"
export function Services() {
    return (
        <section className="overflow-hidden bg-emerald-900 flex flex-col justify-center items-center py-20 px-10">
            <div>
                <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold white pb-10">Nossos serviços</h2>
                <div className="flex flex-col gap-10 sm:flex-row sm:gap-15 lg:gap-30">
                    <div className="flex flex-col gap-5 items-center hover:brightness-125 hover:scale-105 transition-all duration-300">
                        <Armchair className="w-20 h-20 lg:w-15 lg:h-15 opacity-60"/>
                        <h3 className="text-2xl">Terapia</h3>
                    </div>

                    <div className="flex flex-col gap-5 items-center hover:brightness-125 hover:scale-105 transition-all duration-300">
                        <Pill className="w-20 h-20 lg:w-15 lg:h-15 opacity-60"/>
                        <h3 className="text-2xl">Psiquiatria</h3>
                    </div>

                    <div className="flex flex-col gap-5 items-center hover:brightness-125 hover:scale-105 transition-all duration-300">
                        <Target className="w-20 h-20 lg:w-15 lg:h-15 opacity-60"/>
                        <h3 className="text-2xl">Coaching</h3>
                    </div>

                    <div className="flex flex-col gap-5 items-center hover:brightness-125 hover:scale-105 transition-all duration-300">
                        <Syringe className="w-20 h-20 lg:w-15 lg:h-15 opacity-60"/>
                        <h3 className="text-2xl">Acumputura</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}