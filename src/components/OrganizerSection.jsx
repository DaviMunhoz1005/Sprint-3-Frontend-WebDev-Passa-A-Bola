export default function OrganizersSection({ duasImg, aleImg, luanaImg }) {
  return (
    <section className="bg-pink-100 p-8">
      <div className="flex justify-center items-center relative w-full h-[550px] mb-20">
        <img src={duasImg} alt="Imagem Central" className="w-40 h-52 sm:w-96 sm:h-85 lg:w-[560px] lg:h-[500px] object-cover rounded-xl shadow-2xl z-20"/>
        <img src={aleImg} alt="Imagem Ale" className="w-30 h-30 sm:w-44 sm:h-44 lg:w-56 lg:h-64 object-cover rounded-xl shadow-lg absolute left-1/2 -translate-x-[150%] sm:-translate-x-[200%] lg:-translate-x-[220%] top-1/2 -translate-y-1/2 z-10"/>
        <img src={luanaImg} alt="Imagem Luana" className="w-30 h-30 sm:w-44 sm:h-44 lg:w-56 lg:h-64 object-cover rounded-xl shadow-lg absolute left-1/2 translate-x-[50%] sm:translate-x-[100%] lg:translate-x-[120%] top-1/2 -translate-y-1/2 z-10"/>
      </div>

      <h1 className="text-center text-4xl font-bold p-8">Quem organiza a Copa Passa a Bola?</h1>
      <div className="text-lg leading-relaxed space-y-4 mt-12">
        <p>Por trás da Copa Passa a Bola estão duas mulheres que acreditam no poder do futebol para transformar realidades: Ana Clara e Letícia</p>
        <p>Amigas, educadoras e ativistas sociais, elas se uniram para criar um espaço onde mulheres pudessem jogar, se conectar e ocupar o lugar que é delas — dentro e fora do campo. A Copa PAB nasceu dessa vontade de fazer diferente, com mais acolhimento, representatividade e respeito.</p>
        <p>Ana Clara, além de organizadora, agora também vive uma nova fase como mãe. Sim, ela está grávida e segue acompanhando tudo com o mesmo carinho de sempre (só que agora com dois corações batendo por esse projeto!). Já a Letícia é aquela que resolve mil coisas ao mesmo tempo, segura o microfone, cuida da logística e ainda lembra do nome de quase todas as jogadoras.</p>
        <p>Juntas, elas formam o time que faz a Copa acontecer com amor, luta e muita bola no pé ⚽💕</p>
      </div>
    </section>
  );
}
