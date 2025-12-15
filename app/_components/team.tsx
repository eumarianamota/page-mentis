import Image from 'next/image'
import psi1 from '@/public/psi1.jpg'
import psi2 from '@/public/psi2.jpg'
import psi3 from '@/public/psi3.jpg'
import psi4 from '@/public/psi4.jpg'

export function Team() {
    return (
        <section className="overflow-hidden bg-amber-50 text-gray-700 flex flex-col justify-center items-center py-20 px-10">
            <div className='flex flex-col justify-center'>
                <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold white pb-15">Conheça nossa equipe</h2>

                <div className='flex flex-wrap justify-center gap-10'>
                    <div>
                        <Image 
                            src={psi1} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dra. Larissa Amaral</h3>
                    </div>

                    <div>
                        <Image 
                            src={psi2} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dra. Camilla Nogueira</h3>
                    </div>

                    <div>
                        <Image 
                            src={psi3} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dra. Andressa Novaes</h3>
                    </div>

                    <div>
                        <Image 
                            src={psi4} 
                            alt="Psi da equipe" 
                            width={250} 
                        />
                        <h3 className='text-2xl text-center pt-2'>Dr. Marcílio Araujo</h3>
                    </div>
                </div>

                <button className="bg-amber-600 text-white py-4 px-10 w-fit self-center mt-15">
                    SAIBA MAIS
                </button>
            </div>
        </section>
    )
}