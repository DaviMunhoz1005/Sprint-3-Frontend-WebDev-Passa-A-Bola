import Input from "./Input";
import ImageUpload from "./ImageUpload";
import Button from "./Button";

export default function PlayerForm({ newPlayer, setNewPlayer, confirmForm, cancelForm }) {
    const formatPhone = (value) => {
        let digits = value.replace(/\D/g, ""); 
        if (digits.length > 11) digits = digits.slice(0, 11);
        if (digits.length <= 2) {
            return `(${digits}`;
        } else if (digits.length <= 6) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        } else if (digits.length <= 10) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
        } else {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
        }
    };

    const formatCPF = (value) => {
        let digits = value.replace(/\D/g, "");
        if (digits.length > 11) digits = digits.slice(0, 11);
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
        if (digits.length <= 9)
            return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
        return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
    };

    const validateEmail = (value) => {
        return /\S+@\S+\.\S+/.test(value);
    };

    return (
        <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="flex flex-col gap-6 md:col-span-2">
                    <Input
                        type="text"
                        placeholder="Nome"
                        value={newPlayer.nome}
                        onChange={(e) =>
                            setNewPlayer({ ...newPlayer, nome: e.target.value })
                        }
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <select
                            value={newPlayer.posicao}
                            onChange={(e) =>
                                setNewPlayer({
                                    ...newPlayer,
                                    posicao: e.target.value,
                                })
                            }
                            className="border border-neutral-300 rounded-2xl px-3 py-3 hover:border-neutral-400 focus:border-neutral-500 focus:outline-none w-full transition duration-300 text-neutral-500"
                        >
                            <option value="">Selecione a Posição</option>
                            <option value="Goleira">Goleira</option>
                            <option value="Defensora">Defensora</option>
                            <option value="Meio-campo">Meio-campo</option>
                            <option value="Atacante">Atacante</option>
                        </select>

                        <Input
                            type="date"
                            value={newPlayer.nascimento}
                            onChange={(e) =>
                                setNewPlayer({
                                    ...newPlayer,
                                    nascimento: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                            type="tel"
                            placeholder="Telefone"
                            value={newPlayer.telefone}
                            onChange={(e) =>
                                setNewPlayer({
                                    ...newPlayer,
                                    telefone: formatPhone(e.target.value),
                                })
                            }
                        />

                        <Input
                            type="text"
                            placeholder="CPF"
                            value={newPlayer.cpf || ""}
                            onChange={(e) =>
                                setNewPlayer({
                                    ...newPlayer,
                                    cpf: formatCPF(e.target.value),
                                })
                            }
                        />
                    </div>

                    <Input
                        type="email"
                        placeholder="Email"
                        value={newPlayer.email}
                        onChange={(e) =>
                            setNewPlayer({
                                ...newPlayer,
                                email: e.target.value,
                            })
                        }
                        className={
                            newPlayer.email && !validateEmail(newPlayer.email)
                                ? "border-red-500 border-4"
                                : ""
                        }
                    />
                </div>

                <div className="flex justify-center md:justify-end items-start w-full">
                    <ImageUpload
                        newPlayer={newPlayer}
                        setNewPlayer={setNewPlayer}
                        size={48}
                    />
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
                <Button
                    type="button"
                    variant="gray"
                    onClick={cancelForm}
                    className="w-full"
                >
                    Cancelar
                </Button>
                <Button
                    type="button"
                    variant="green"
                    onClick={confirmForm}
                    className="w-full"
                    disabled={
                        !newPlayer.telefone ||
                        !newPlayer.cpf ||
                        !validateEmail(newPlayer.email)
                    }
                >
                    Próximo
                </Button>
            </div>
        </form>
    );
}
