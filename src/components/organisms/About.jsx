import React from "react";

export default function About() {
  return (
    
<div className="container mx-auto p-4 max-h-max max-w-max	overflow-auto">
      <h1 className="text-gray-900 text-3xl font-extrabold mb-2 text-left tracking-widest">UM NOVO FUTURO PARA<br />SUA CARREIRA</h1>
      <p className='text-gray-900 mb-6 text-lg'>Cursos online com interações ao vivo liderados por experts do mercado digital</p>
      <button className="bg-gray-900 text-gray-200 mr-3 p-4 rounded-sm">Comece agora</button>
      <button className="bg-gray-300 text-gray-900 text-md p-4 rounded-sm hover:bg-gray-900 hover:text-gray-300 transition-all">Fale com um especialista</button>

      <div className="gap-2 mt-10 flex justify-center">
        <div className="border-double border-4 border-gray-900 p-4 hover:scale-105 cursor-pointer">
          <h1 className="text-gray-900 text-3xl font-extrabold mb-2 text-center tracking-widest">O QUE ESPERAR DA ULEARN</h1>
          <p className='text-gray-900 text-base mb-4'>Através da educação e da programação, fazemos diferença real na realidade de milhares de pessoas.</p>
          <ul className="list-disc list-inside text-gray-900 text-base">
            <li>93% dos nossos alunos trabalham como programadores seis meses depois de formados.</li>
            <li>78% dos nossos estudantes apresentaram um aumento de renda em até 12 meses.</li>
            <li>85% dos nossos alunos se sentem mais confiantes no trabalho.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-gray-900 text-3xl font-extrabold mb-2 text-left tracking-widest">NOSSA METODOLOGIA</h1>
        <div className="">
          <p className='text-gray-900 text-base'>Entenda como oferecemos um ensino de excelência para formar profissionais completos em 10 meses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
          <div className="dark:bg-gray-900 rounded-md p-2">
            <h2 className="text-emerald-400 font-extrabold text-lg mb-2">APRENDA NA PRÁTICA</h2>
            <p className="text-gray-200 text-base">Com um ensino baseado em projetos, os alunos Ulearn evoluem com base nas demandas do mercado. Ao colocar a mão na massa, o aprendizado torna-se muito mais rápido.</p>
          </div>

          <div className="dark:bg-gray-900 rounded-md p-2">
            <h2 className="text-emerald-400 font-extrabold text-lg mb-2">SUPORTE EM TEMPO REAL</h2>
            <p className="text-gray-200 text-base">Um dos diferenciais da Ulearn é que vamos bem além das aulas gravadas. O contato ágil entre alunos, instrutores e equipe é parte da metodologia. Assim, as dúvidas são sempre respondidas no menor tempo possível.</p>
          </div>

          <div className="dark:bg-gray-900 rounded-md p-2">
            <h2 className="text-emerald-400 font-extrabold text-lg mb-2">CONTEÚDO ATUALIZADO</h2>
            <p className="text-gray-200 text-base">Aprenda tudo que mais interessa para entrar no mercado. Nosso currículo é atualizado e baseado no que as empresas realmente precisam. Em 10 meses você se torna um profissional completo.</p>
          </div>
        </div>
      </div>
      <div className="gap-2 mt-10 flex justify-center">
        <div className="border-double border-4 border-gray-900 p-4 hover:scale-105">
          <h1 className="text-gray-900 text-3xl font-extrabold mb-2 text-center tracking-widest">APRENDA COM A ULEARN</h1>
          <p className='text-gray-900 text-center text-lg'>Torne-se um desenvolvedor completo.</p>
          <div className='flex flex-col items-center md:flex-row md:items-center w-full p-4 gap-2'>
            <p className='border-double border-4 border-gray-900 p-2 flex items-center text-gray-900 text-md hover:dark:bg-gray-900 hover:text-gray-200 cursor-pointer'>Back-end
              <span class="relative flex h-3 w-3 ml-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-gray-900 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </p>
            <p className='border-double border-4 border-gray-900 p-2 flex items-center text-gray-900 text-md hover:dark:bg-gray-900 hover:text-gray-200 cursor-pointer'>Front-End
              <span class="relative flex h-3 w-3 ml-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </p>
            <p className='border-double border-4 border-gray-900 p-2 flex items-center text-gray-900 text-md hover:dark:bg-gray-900 hover:text-gray-200 cursor-pointer'>JavaScript
              <span class="relative flex h-3 w-3 ml-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </p>
            <p className='border-double border-4 border-gray-900 p-2 flex items-center text-gray-900 text-md hover:dark:bg-gray-900 hover:text-gray-200 cursor-pointer'>Git/Github
              <span class="relative flex h-3 w-3 ml-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </p>
            <p className='border-double border-4 border-gray-900 p-2 flex items-center text-gray-900 text-md hover:dark:bg-gray-900 hover:text-gray-200 cursor-pointer'>ReactJS
              <span class="relative flex h-3 w-3 ml-1">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-900 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
            </p>
          </div>
        </div>
      </div>


      <h1 className="text-gray-900 text-3xl font-extrabold mb-4 text-left tracking-widest mt-4">DEPOIMENTOS DOS ALUNOS</h1>

      <div className='flex flex-col gap-2 md:grid md:grid-cols-4'>

        <div className="bg-gray-900/70 rounded-md p-3 h-auto mt-4 hover:scale-y-110">
          <h3 className="text-xl font-bold text-emerald-400">Vinicius Almeida</h3>
          <p className="text-sm text-gray-200 italic">“A Ulearn oferece uma didática de ensino diferente do que estamos acostumados. Aqui temos muitos exercícios práticos. A forma como o conteúdo é passado com material escrito, vídeos, projetos práticos é um diferencial.”</p>
          <span className="font-bold text-emerald-300 text-sm">Aluno Ulearn</span>
        </div>

        <div className="bg-gray-900/70 rounded-md p-3 h-auto float-right mt-4 hover:scale-y-110">
          <h3 className="text-xl font-bold text-emerald-400">Marcos Cavalcanti</h3>
          <p className="text-sm text-gray-200 italic">“O modelo de ensino focado em prática é uma das coisas que mais deram certo para o meu aprendizado, e junto disso a rotina de estudos e as atividades semanais aliadas com as disciplinas que a Ulearn nos a construir.”</p>
          <span className="font-bold text-emerald-300 text-sm">Aluno Ulearn</span>
        </div>

        <div className="bg-gray-900/70 rounded-md p-3 float-left mt-4 hover:scale-y-110">
          <h3 className="text-xl font-bold text-emerald-400">Pablo Hernandez</h3>
          <p className="text-sm text-gray-200 italic">“Quando entrei no mercado de trabalho, que foi graças a conexões que realizei dentro do ecossistema da Ulearn, também percebi que o conhecimento técnico que nos foi passado é realmente de excelente qualidade.”</p>
          <span className="font-bold text-emerald-300 text-sm">Aluno Ulearn</span>
        </div>

        <div className="bg-gray-900/70 rounded-md p-3 float-right mt-4 hover:scale-y-110">
          <h3 className="text-xl font-bold text-emerald-400">Maxwell Leal</h3>
          <p className="text-sm text-gray-200 italic">“Quando entrei no mercado de trabalho, que foi graças a conexões que realizei dentro do ecossistema da Ulearn, também percebi que o conhecimento técnico que nos foi passado é realmente de excelente qualidade.”</p>
          <span className="font-bold text-emerald-300 text-sm">Aluno Ulearn</span>
        </div>
      </div>
    </div>
  );
}


