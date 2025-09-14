import Button from "./Button";
import FormField from "./FormField";

export default function DocumentForm({ newPlayer, setNewPlayer, confirmDoc, cancelDoc }) {
    const handleSubmit = () => {
        if (!newPlayer.documentoTipo || !newPlayer.documentoFoto) {
            alert("Selecione o tipo de documento e envie uma imagem.");
            return;
        }
        confirmDoc();
    };

    return (
        <form className="flex flex-col gap-6">
            <FormField
                isSelect
                placeholder="Selecione o Documento"
                value={newPlayer.documentoTipo}
                field="documentoTipo"
                newPlayer={newPlayer}
                setNewPlayer={setNewPlayer}
                options={["RG", "CNH", "Passaporte"]}
            />

            <div className="flex justify-center">
                <FormField
                    isUpload
                    field="documentoFoto"
                    newPlayer={newPlayer}
                    setNewPlayer={setNewPlayer}
                />
            </div>

            <div className="flex justify-center gap-4 mt-4">
                <Button type="button" variant="gray" onClick={cancelDoc} className="w-full">
                    Cancelar
                </Button>
                <Button type="button" variant="green" onClick={handleSubmit} className="w-full">
                    Confirmar
                </Button>
            </div>
        </form>
    );
}
