import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login() {
    return (
        <div className="bg-pastel-pink w-full min-h-screen flex flex-col">
            <div className="flex flex-col flex-grow items-center justify-center">
                <div className="bg-white flex flex-col md:w-7/12 py-6 px-10 items-center justify-between my-10 rounded-2xl">
                    <h1 className="text-4xl pb-3">Login</h1>
                    <form className="flex flex-col gap-4 w-full">
                        <Input type="text" placeholder="Nome do Time" />
                        <Input type="password" placeholder="Senha" />
                        <a className="underline cursor-pointer hover:font-semibold max-w-fit">Esqueci a Senha</a>
                        <div className="flex md:flex-col lg:flex-row gap-4 w-full items-center">
                            <Button>Entrar</Button>
                            <Button>Cadastre-se</Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    );
}
