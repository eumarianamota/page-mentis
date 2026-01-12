import Image from "next/image"
import post1 from "@/public/post1.svg"
import post2 from "@/public/post2.svg"
import post3 from "@/public/post3.svg"
import post4 from "@/public/post4.svg"

export function Blog() {
    return (
        <section id="blog" className="overflow-hidden text-gray-700 bg-white flex justify-center items-center px-10 py-20 text-center">
            <div>
                <h2 data-aos="zoom-in-right" className="text-4xl text-center md:text-5xl lg:text-6xl font-bold white pb-15" >Nosso blog</h2>
                <div className="flex flex-wrap justify-center gap-10 lg:gap-30">
                    <div className="flex flex-col justify-center items-center gap-5 transition-transform hover:scale-105 hover:brightness-95 duration-300 ease-in-out">
                        <Image 
                            src={post1}    
                            alt=""
                            quality={100}
                            width={250}
                        />
                        <h3 className="max-w-50 font-semibold">Essa rotina matinal melhora o seu humor</h3>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700" >Leia mais</a>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 transition-transform hover:scale-105 hover:brightness-95 duration-300 ease-in-out">
                        <Image 
                            src={post2}    
                            alt=""
                            quality={100}
                            width={250}
                        />
                        <h3 className="max-w-50 font-semibold">Essa rotina matinal melhora o seu humor</h3>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700" >Leia mais</a>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 transition-transform hover:scale-105 hover:brightness-95 duration-300 ease-in-out">
                        <Image 
                            src={post3}    
                            alt=""
                            quality={100}
                            width={250}
                        />
                        <h3 className="max-w-50 font-semibold">Essa rotina matinal melhora o seu humor</h3>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700" >Leia mais</a>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 transition-transform hover:scale-105 hover:brightness-95 duration-300 ease-in-out">
                        <Image 
                            src={post4}    
                            alt=""
                            quality={100}
                            width={250}
                        />
                        <h3 className="max-w-50 font-semibold">Essa rotina matinal melhora o seu humor</h3>
                        <a href="#" className="text-amber-700 border-b border-b-amber-700" >Leia mais</a>
                    </div>
                </div>
            </div>
        </section>
    )
}