import Button from "./Button";

export default function LastEditionsSection({ copaImg, trofeuImg }) {
  const editions = [
    {
      year: 2024,
      description: "A Copa Passa a Bola de 2024 foi inesquecível, reunindo times incríveis que deram um show dentro e fora das quatro linhas.",
      date: "14 de abril de 2024",
      location: "Centro Esportivo de Itaquera - São Paulo/SP",
      champion: "Estrelas da Zona Leste",
    },
    {
      year: 2023,
      description: "A Copa Passa a Bola de 2023 foi incrível, com partidas emocionantes e muita festa entre os times.",
      date: "15 de abril de 2023",
      location: "Centro Esportivo de Itaquera - São Paulo/SP",
      champion: "Feras da Zona Leste",
    }
  ];

  return (
    <section className="bg-yellow-400 py-10">
      <h1 className="text-gray-800 font-bold text-4xl text-center mb-8">ÚLTIMAS EDIÇÕES</h1>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 px-4">
        {editions.map((edition) => (
          <div key={edition.year} className="flex flex-col items-center w-full md:w-4/12">
            <div className="flex justify-center gap-2 mb-4">
              <img src={trofeuImg} alt="Troféu" className="w-6 h-6" />
              <h2 className="text-lg md:text-2xl font-bold text-gray-800 text-center">{`Copa ${edition.year}`}</h2>
            </div>
            <div className="rounded-2xl shadow-md w-full overflow-hidden hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col">
              <img src={copaImg} alt={`Copa ${edition.year}`} className="w-full h-60 object-cover" />
              <div className="bg-white p-6 flex flex-col min-h-[350px]">
                <p className="font-semibold mb-4">{edition.description}</p>
                <div className="text-sm text-gray-700 mb-4">
                  <p>📅 Data: {edition.date}</p>
                  <p>📍 Local: {edition.location}</p>
                  <p>⭐ Campeãs: {edition.champion}</p>
                </div>
                <div className="w-full h-full flex justify-center items-start">
                  <Button variant="pink" size="medium" className="mt-auto">
                    Confira Aqui
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
