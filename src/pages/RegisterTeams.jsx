import { useState } from "react";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaPlus } from "react-icons/fa";
import Modal from "../components/Modal";
import PlayerCard from "../components/PlayerCard";
import PlayerForm from "../components/PlayerForm";
import DocumentForm from "../components/DocumentForm";
import { useNavigate } from "react-router-dom";

export default function RegisterTeam() {
    const navigate = useNavigate();

    const [players, setPlayers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDocModalOpen, setIsDocModalOpen] = useState(false);
    const [newPlayer, setNewPlayer] = useState({
        nome: "",
        posicao: "",
        telefone: "",
        nascimento: "",
        email: "",
        foto: null,
        documentoTipo: "",
        documentoFoto: null,
        selfieDoc: null,
    });

    const validateEmail = (value) => {
        return /\S+@\S+\.\S+/.test(value);
    };

    const handleConfirmPlayer = () => {
        const { nome, posicao, telefone, nascimento, email } = newPlayer;

        if (!nome || !posicao || !telefone || !nascimento || !validateEmail(email)) {
            alert("Por favor, preencha todos os campos antes de prosseguir.");
            return;
        }

        setIsModalOpen(false);     
        setIsDocModalOpen(true);   
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
                        <Button type="submit" size="medium" onClick={() => navigate("/subscribe")}>Cadastrar Time</Button>
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
                        confirmForm={handleConfirmPlayer}       
                        cancelForm={() => setIsModalOpen(false)}
                    />
                </Modal>
            )}
            {isDocModalOpen && (
                <Modal title="Documento da Jogadora" onClose={() => setIsDocModalOpen(false)}>
                    <DocumentForm
                        newPlayer={newPlayer}
                        setNewPlayer={setNewPlayer}
                        confirmDoc={() => {
                            setPlayers([...players, newPlayer]);
                            console.log(newPlayer);
                            setNewPlayer({
                                nome: "",
                                posicao: "",
                                telefone: "",
                                nascimento: "",
                                email: "",
                                foto: null,
                                documentoTipo: "",
                                documentoFoto: null,
                            });
                            setIsDocModalOpen(false);
                        }}
                        cancelDoc={() => setIsDocModalOpen(false)}
                    />
                </Modal>
            )}
        </div>
    );
}
