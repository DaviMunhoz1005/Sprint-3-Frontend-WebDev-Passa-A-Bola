import Button from "./Button";
import FormField from "./FormField";

export default function PlayerForm({ newPlayer, setNewPlayer, confirmForm, cancelForm }) {
    const formatPhone = (value) => {
        let digits = value.replace(/\D/g, "");
        if (digits.length > 11) digits = digits.slice(0, 11);
        if (digits.length <= 2) return `(${digits}`;
        if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    };

    const formatCPF = (value) => {
        let digits = value.replace(/\D/g, "");
        if (digits.length > 11) digits = digits.slice(0, 11);
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
        if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
        return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
    };

    return (
        <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="flex flex-col gap-6 md:col-span-2">
                    <FormField
                        type="text"
                        placeholder="Nome"
                        value={newPlayer.nome}
                        field="nome"
                        newPlayer={newPlayer}
                        setNewPlayer={setNewPlayer}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                            isSelect
                            placeholder="Selecione a Posição"
                            value={newPlayer.posicao}
                            field="posicao"
                            newPlayer={newPlayer}
                            setNewPlayer={setNewPlayer}
                            options={["Goleira", "Defensora", "Meio-campo", "Atacante"]}
                        />
                        <FormField
                            type="date"
                            value={newPlayer.nascimento}
                            field="nascimento"
                            newPlayer={newPlayer}
                            setNewPlayer={setNewPlayer}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                            type="tel"
                            placeholder="Telefone"
                            value={newPlayer.telefone}
                            field="telefone"
                            newPlayer={newPlayer}
                            setNewPlayer={setNewPlayer}
                            formatFn={formatPhone}
                        />
                        <FormField
                            type="text"
                            placeholder="CPF"
                            value={newPlayer.cpf || ""}
                            field="cpf"
                            newPlayer={newPlayer}
                            setNewPlayer={setNewPlayer}
                            formatFn={formatCPF}
                        />
                    </div>

                    <FormField
                        type="email"
                        placeholder="Email"
                        value={newPlayer.email}
                        field="email"
                        newPlayer={newPlayer}
                        setNewPlayer={setNewPlayer}
                    />
                </div>

                <div className="flex justify-center md:justify-end items-start w-full">
                    <FormField
                        isUpload
                        field="foto"
                        newPlayer={newPlayer}
                        setNewPlayer={setNewPlayer}
                    />
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
                <Button type="button" variant="gray" onClick={cancelForm} className="w-full">
                    Cancelar
                </Button>
                <Button type="button" variant="green" onClick={confirmForm} className="w-full">
                    Próximo
                </Button>
            </div>
        </form>
    );
}
