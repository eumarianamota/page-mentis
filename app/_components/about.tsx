import Image from "next/image"
import background2 from "@/public/bg-2.jpg"
import maps from "@/public/maps.jpg"

export function About() {
    return (
        <section className="overflow-hidden bg-amber-50 flex flex-col justify-center items-center py-20 px-10">
            <div className="md:max-w-200 flex flex-col items-center">
                <h2 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-gray-700 pb-8">Nossa abordagem</h2>
                <p className="text-gray-500 text-center md:text-xl pb-8">Somos um grupo de psicólogos e psiquiatras doutorados e prestamos serviços de cuidados de saúde mental. Por ser um coletivo de saúde mental, fornecemos terapia, gerenciamento de medicamentos, coaching e muito mais aos nossos membros. Conheça um dos nossos médicos para receber os devidos cuidados em um atendimento online.</p>
                <button className="bg-amber-600 py-4 px-10">
                    SAIBA MAIS
                </button>
            </div>

            <div className="md:max-w-300 pt-10 sm:pt-20 flex flex-col justify-center items-center gap-10 sm:flex-row">
                <Image
                    src={background2}
                    alt="Foto de um atendimento clínico"
                    className="object-cover mt-10 max-w-70 sm:max-w-80"
                />

                <div className="max-w-140">
                    <h2 className="text-4xl text-center sm:text-start md:text-5xl font-bold text-gray-700 pb-5">Disponibilizamos um espaço seguro e confortável</h2>
                    <p className="text-gray-500 text-center sm:text-start md:text-xl">Todos os atendimentos são realizados em nosso espaço reconfortante de salas totalmente privadas, com chá de cortesia e cuidados personalizados.</p>
                </div>
            </div>

            <div className="md:max-w-300 pt-10 sm:pt-20 flex flex-col justify-center items-center gap-10 sm:flex-row-reverse">
                <Image
                    src={maps}
                    alt="Foto de um atendimento clínico"
                    className="object-cover mt-10 max-w-70 sm:max-w-80"
                />

                <div className="max-w-140">
                    <h2 className="text-4xl text-center sm:text-start md:text-5xl font-bold text-gray-700 pb-5">Opções presenciais e remotas</h2>
                    <p className="text-gray-500 text-center sm:text-start md:text-xl">Nosso escritório encontra-se em Parnaíba. Não consegue comparecer pessoalemnte? Não se preocupe, oferecemos serviços de terapia on-line</p>
                </div>
            </div>

        </section>
    )
}