import Button from "./Button";
import FormField from "./FormField";

export default function DocumentForm({ newPlayer, setNewPlayer, confirmDoc, cancelDoc }) {
    const handleSubmit = () => {
        if (!newPlayer.documentoTipo || !newPlayer.documentoFoto || !newPlayer.selfieDoc) {
            alert("Selecione o tipo de documento e envie as imagens necessárias.");
            return;
        }
        confirmDoc();
    };

    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-neutral-700 mb-4 text-center md:text-left">
                Documento de Identificação
            </h2>

            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                    <FormField
                        isSelect
                        placeholder="Selecione o Documento"
                        value={newPlayer.documentoTipo}
                        field="documentoTipo"
                        newPlayer={newPlayer}
                        setNewPlayer={setNewPlayer}
                        options={["RG", "CNH", "Passaporte"]}
                    />
                    <div className="flex justify-center md:justify-end">
                        <FormField
                            isUpload
                            field="documentoFoto"
                            newPlayer={newPlayer}
                            setNewPlayer={setNewPlayer}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <span className="text-sm text-neutral-600">
                        Foto do rosto segurando o documento selecionado
                    </span>
                    <div className="flex justify-center md:justify-end">
                        <FormField
                            isUpload
                            field="selfieDoc"
                            newPlayer={newPlayer}
                            setNewPlayer={setNewPlayer}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
                <Button type="button" variant="gray" onClick={cancelDoc} className="w-full md:w-1/2">
                    Voltar
                </Button>
                <Button type="button" variant="green" onClick={handleSubmit} className="w-full md:w-1/2">
                    Salvar
                </Button>
            </div>
        </div>
    );
}
