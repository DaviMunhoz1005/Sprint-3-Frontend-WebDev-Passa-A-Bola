import Button from "./Button";

export default function About() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-10">
            <h2 className="text-2xl font-bold mb-4">Sobre essa Copa:</h2>
            <p className="mb-4">
                Prepare seu time: a Copa Passa a Bola 2024 está chegando! <br />
                A maior copa de futebol feminino amador da Zona Leste acontece no dia 14
                de abril, no campo da Arena Nacional, em São Miguel Paulista (SP). Serão
                10 times disputando o troféu em jogos cheios de emoção, talento e
                representatividade.
            </p>

            <ul className="space-y-3 mb-6">
                <li>⚽ Times sorteados automaticamente, jogos eliminatórios.</li>
                <li>📋 Cadastro completo + documentos obrigatórios.</li>
                <li>📌 Jogos com tempo reduzido e respeito entre todas.</li>
                <li>
                    🎶 Além do futebol: música, comida, área de descanso e cobertura
                    fotográfica.
                </li>
            </ul>

            <p className="mb-4 font-semibold">
                A Copa PAB é mais que futebol: é união, comunidade e força feminina em
                campo!
            </p>

            <Button size="large" className="mx-auto block">
                Acompanhar Chaveamento
            </Button>
        </section>
    );
}
