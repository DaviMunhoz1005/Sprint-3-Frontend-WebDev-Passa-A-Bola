import { useState } from "react";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import Modal from "../components/Modal";
import PlayerCard from "../components/PlayerCard";
import PlayerForm from "../components/PlayerForm";

export default function RegisterTeam() {
    const [players, setPlayers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newPlayer, setNewPlayer] = useState({
        nome: "",
        posicao: "",
        telefone: "",
        nascimento: "",
        email: "",
        foto: null,
    });

    const handleAddPlayer = () => {
        const { nome, posicao, telefone, nascimento, email } = newPlayer;

        if (!nome || !posicao || !telefone || !nascimento || !email) {
            alert("Por favor, preencha todos os campos antes de adicionar a jogadora.");
            return;
        }

        setPlayers([...players, newPlayer]);
        setNewPlayer({
            nome: "",
            posicao: "",
            telefone: "",
            nascimento: "",
            email: "",
            foto: null,
        });
        setIsModalOpen(false);
    };

    return (
        <div className="bg-pastel-pink w-full min-h-screen flex flex-col">
            <main className="flex flex-col flex-grow items-center justify-center">
                <section
                    aria-labelledby="register-team-title"
                    className="bg-white flex flex-col w-11/12 py-6 px-10 items-center justify-between my-10 rounded-2xl"
                >
                    <header className="w-full flex flex-col items-center">
                        <h1 id="register-team-title" className="text-4xl pb-3 text-center">
                            Cadastro do Time
                        </h1>
                    </header>

                    <section className="flex flex-col md:flex-row w-full justify-between items-center gap-4 mb-6">
                        <p className="text-sm font-medium underline">
                            É necessário cadastrar no mínimo 7 jogadoras
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <Input type="text" placeholder="Nome do Time" />
                            <Input type="password" placeholder="Senha" />
                        </div>
                    </section>

                    <section
                        aria-label="Jogadoras cadastradas"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
                    >
                        {players.map((player, index) => (
                        <PlayerCard key={index} player={player} />
                        ))}

                        <article
                            className="flex flex-col justify-center items-center bg-pastel-pink rounded-xl shadow-md p-4 text-center cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                        <div className="flex justify-center items-center w-24 h-24 rounded-full hover:bg-black hover:text-contrast-pink text-contrast-pink-hover bg-neutral-900 mb-3 transition duration-300">
                            <FaPlus size={40} />
                        </div>
                        <p className="text-pink-600 underline font-medium">
                            Adicionar Nova Jogadora
                        </p>
                        </article>
                    </section>

                    <div className="w-full flex justify-center mt-6">
                        <Button type="submit" size="medium">Cadastrar Time</Button>
                    </div>
                </section>
            </main>

            <footer className="mt-auto">
                <Footer />
            </footer>

            {isModalOpen && (
                <Modal title="Adicionar Jogadora" onClose={() => setIsModalOpen(false)}>
                    <PlayerForm
                        newPlayer={newPlayer}
                        setNewPlayer={setNewPlayer}
                        confirmForm={handleAddPlayer}       
                        cancelForm={() => setIsModalOpen(false)}
                    />
                </Modal>
            )}
        </div>
    );
}
