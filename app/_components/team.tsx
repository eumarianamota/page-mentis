import Image from 'next/image'
import psi1 from '@/public/psi1.svg'
import psi2 from '@/public/psi2.svg'
import psi3 from '@/public/psi3.svg'
import psi4 from '@/public/psi4.svg'

export function Team() {
    return (
        <section id="team" className="overflow-hidden bg-amber-50 text-gray-700 flex flex-col justify-center items-center py-20 px-10">
            <div className='flex flex-col justify-center'>
                <h2 data-aos="zoom-in-up" className="text-4xl text-center md:text-5xl lg:text-6xl font-bold white pb-15">Conheça nossa equipe</h2>

                <div className='flex flex-wrap justify-center gap-10'>
                    <div className='hover:scale-105 hover:shadow-xl hover:brightness-105 transition-discrete duration-300'>
                        <Image 
                            src={psi1} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dra. Larissa Amaral</h3>
                    </div>

                    <div className='hover:scale-105 hover:shadow-xl hover:brightness-105 transition-discrete duration-300'>
                        <Image 
                            src={psi2} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dra. Camilla Nogueira</h3>
                    </div>

                    <div className='hover:scale-105 hover:shadow-xl hover:brightness-105 transition-discrete duration-300'>
                        <Image 
                            src={psi3} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dra. Andressa Novaes</h3>
                    </div>

                    <div className='hover:scale-105 hover:shadow-xl hover:brightness-105 transition-discrete duration-300'>
                        <Image 
                            src={psi4} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dr. Marcílio Araujo</h3>
                    </div>
                </div>

                <button data-aos="zoom-in-up" className="bg-amber-600 text-white py-4 px-10 w-fit self-center mt-15 hover:scale-105 hover:shadow-xl hover:brightness-105 transition-discrete duration-300">
                    <a target='_blank' href="https://wa.me/556799998800?text=Olá, Mariana, tudo bem? Vim pela landing page de saúde mental, Mentis, desenvolvida por você.">
                        SAIBA MAIS
                    </a>
                </button>
            </div>
        </section>
    )
}