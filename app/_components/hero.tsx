import Image from "next/image"
import background from "@/public/background.jpg"
import logo from "@/public/logo.png"
import { Menu } from "lucide-react"

export function Hero() {
    return (
        <section className="text-white overflow-hidden w-full flex flex-col h-screen">
            <div>
                <Image
                    src={background}
                    alt="Foto de um atendimento clínico"
                    fill 
                    quality={100}
                    className="object-cover opacity-60"
                />
            </div>

            <header>     
                <nav className="bg-white/10 backdrop-blur-lg border border-white/15 flex items-baseline md:items-center justify-between p-6 opacity-100 px-10 lg:px-25">
                    <div>
                        <Image
                            src={logo}
                            alt="Logo da empresa"
                            width={150}
                            height={50}
                        />
                    </div>

                    <div>
                        <ul className="hidden md:flex gap-10 text-white font-semibold">
                            <li className="cursor-pointer transition-colors">Início</li>
                            <li className="cursor-pointer transition-colors">Sobre</li>
                            <li className="cursor-pointer transition-colors">Serviços</li>
                            <li className="cursor-pointer transition-colors">Equipe</li>
                            <li className="cursor-pointer transition-colors">Blog</li>
                            <li className="cursor-pointer transition-colors">Contato</li>
                        </ul>
                    </div>
                    
                    <div className="md:hidden">
                        <Menu 
                            size={32}
                            className="text-white brightness-100"
                        />
                    </div>
                </nav>
            </header>
            
            <div className="opacity-90 flex items-start pr-5 pl-10 md:pl-20 lg:pl-30 pt-80 max-w-90 md:max-w-150 lg:max-w-200">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Conheça a Mentis, um coletivo de saúde mental.</h1>
                    <p className="md:text-xl">Receba cuidados médicos de sapúde mental acessíveis e personalizados presencialmente ou no aconchego da sua casa.</p>
                </div>
            </div>
        </section>
    )
}