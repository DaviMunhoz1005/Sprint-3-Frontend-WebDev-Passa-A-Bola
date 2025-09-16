import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function InfosSubscribeCopa() {
    const navigate = useNavigate();

    return (
        <section className="w-full">
            <div className="flex justify-center">
                <img
                    src="https://i.pinimg.com/originals/6d/38/5d/6d385d010d7e5006312c8fbaeacdb3a1.jpg"
                    alt="Quadra de futebol"
                    className="w-6/12 object-cover rounded-2xl mb-2"
                />
            </div>
            <div className="bg-pastel-pink text-center py-6 rounded-2xl">
                <div className="flex justify-center space-x-6 mb-4">
                    <div>
                        <p className="text-sm">Total de Vagas</p>
                        <p className="text-xl font-bold">10</p>
                    </div>
                    <Button size="medium" onClick={() => navigate("/login")}>Inscrever-se</Button>
                    <div>
                        <p className="text-sm">Vagas Preenchidas</p>
                        <p className="text-xl font-bold">8</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
