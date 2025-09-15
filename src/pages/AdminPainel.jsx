import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { FaFilePen } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

import arenaImg from "./../assets/imgs/copa.png"

export default function AdminPainel() {
  const [openCreate, setOpenCreate] = useState(false);
  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      image: arenaImg,
      location: "Arena Nacional",
      totalSlots: 10,
      filledSlots: 8,
      date: "2024-04-14",
      description:
        "Prepare seu time, porque a maior copa de futebol feminino amador da zona leste está de volta! A Copa Passa a Bola 2024 vai acontecer no dia 14 de abril, no tradicional campo da Arena Nacional (São Miguel Paulista – SP), reunindo talentos, histórias e muita bola na rede.",
    },
  ]);
  const [newTournament, setNewTournament] = useState({
    image: "",
    location: "",
    totalSlots: "",
    date: "",
    description: "",
  });
  const [openDeleteId, setOpenDeleteId] = useState(null);

  // Função para criar torneio
  const handleCreateTournament = () => {
    const newId = tournaments.length
      ? Math.max(...tournaments.map((t) => t.id)) + 1
      : 1;
    setTournaments([
      ...tournaments,
      {
        id: newId,
        image: newTournament.image || arenaImg,
        location: newTournament.location,
        totalSlots: Number(newTournament.totalSlots),
        filledSlots: 0,
        date: newTournament.date,
        description: newTournament.description,
      },
    ]);
    setNewTournament({
      image: "",
      location: "",
      totalSlots: "",
      date: "",
      description: "",
    });
    setOpenCreate(false);
  };

  // Função para excluir torneio
  const handleDeleteTournament = (id) => {
    setTournaments(tournaments.filter((t) => t.id !== id));
    setOpenDeleteId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />

      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Painel Administrativo</h2>

        {/* Situação e Botão criar */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="bg-green-200 inline-block px-3 py-1 rounded-md font-semibold">
            Situação: Ativo
          </p>
          <div className="flex gap-3">
            <Button 
            onClick={() => setOpenCreate(true)} 
            className="gap-3 " >
              <FaFilePen className="mr-6"/>
            </Button>
          </div>
        </div>

        {/* Lista de Torneios */}
        <div className="flex flex-col gap-6">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={tournament.image}
                alt={tournament.location}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{tournament.location}</h3>
                <p className="text-sm text-gray-600">
                  Data: {tournament.date}
                </p>

                <div className="flex justify-between mt-3 items-center">
                  <div>
                    <p className="font-semibold">Total Vagas</p>
                    <p>{tournament.totalSlots}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Vagas Preenchidas</p>
                    <p>{tournament.filledSlots}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => alert("Abrir chaveamento")}
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                    >
                      Chaveamento
                    </Button>
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                      onClick={() => setOpenDeleteId(tournament.id)}

                    >
                      <FaTrashAlt />
                    </Button>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-bold mb-1">Descrição:</h4>
                  <p className="text-sm text-justify">{tournament.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      {/* Modal Criar Torneio */}
      {openCreate && (
        <Modal onClose={() => setOpenCreate(false)}>
          <h2 className="text-lg font-bold mb-4">Criar Nova Copa</h2>
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateTournament();
            }}
          >
            <div>
              <label
                htmlFor="uploadImagem"
                className="cursor-pointer border rounded p-2 block hover:bg-gray-200"
              >
                Escolher imagem
              </label>
              <input
                id="uploadImagem"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setNewTournament({
                    ...newTournament,
                    image: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </div>
            <input
              type="text"
              placeholder="Local do Evento"
              className="border rounded p-2 block hover:bg-gray-200"
              value={newTournament.location}
              onChange={(e) =>
                setNewTournament({ ...newTournament, location: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Quantidade de Vagas"
              className="border rounded p-2 block hover:bg-gray-200"
              value={newTournament.totalSlots}
              onChange={(e) =>
                setNewTournament({ ...newTournament, totalSlots: e.target.value })
              }
              required
            />
            <input
              type="date"
              className="border rounded p-2 block hover:bg-gray-200"
              value={newTournament.date}
              onChange={(e) =>
                setNewTournament({ ...newTournament, date: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Descrição"
              className="border rounded p-2 block hover:bg-gray-200"
              rows={4}
              value={newTournament.description}
              onChange={(e) =>
                setNewTournament({ ...newTournament, description: e.target.value })
              }
              required
            />
            <div className="flex justify-between mt-2">
              <Button type="button" onClick={() => setOpenCreate(false)} className="bg-gray-400 hover:bg-gray-300">
                Voltar
              </Button>
              <Button type="submit">Criar</Button>
            </div>
          </form>
        </Modal>
      )}

      {/* Modal Excluir Torneio */}
      {openDeleteId !== null && (
        <Modal onClose={() => setOpenDeleteId(null)}>
          <h2 className="text-lg font-bold mb-4 text-red-600">Cuidado!</h2>
          <p className="mb-6">Tem certeza que deseja excluir esse torneio?</p>
          <div className="flex justify-between">
            <Button
              type="button"
              className="bg-gray-400 hover:bg-gray-300"
              onClick={() => setOpenDeleteId(null)}
            >
              Não
            </Button>
            <Button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => handleDeleteTournament(openDeleteId)}
            >
              Sim
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
