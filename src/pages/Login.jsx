import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="bg-pastel-pink w-full min-h-screen flex flex-col">
            <main className="flex flex-col flex-grow items-center justify-center">
                <section 
                    aria-labelledby="login-title" 
                    className="bg-white flex flex-col md:w-7/12 py-6 px-10 items-center justify-between my-10 rounded-2xl"
                >
                    <h1 id="login-title" className="text-4xl pb-3">Login</h1>
                    <form className="flex flex-col gap-4 w-full">
                        <Input type="text" placeholder="Nome do Time" />
                        <Input type="password" placeholder="Senha" />
                        <a 
                            href="#"
                            className="underline cursor-pointer hover:font-semibold max-w-fit"
                        >
                            Esqueci a Senha
                        </a>
                        <div className="flex md:flex-col lg:flex-row gap-4 w-full items-center">
                            <Button type="submit" onClick={() => navigate("/subscribe")}>Entrar</Button>
                            <Button type="button" onClick={() => navigate("/register")}>Cadastre-se</Button>
                        </div>
                    </form>
                </section>
            </main>

            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
}
