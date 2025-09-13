import { FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer
            className="w-full p-8 flex flex-col md:flex-row justify-between items-start bg-contrast-yellow"
        >
            <div className="flex items-start mb-6 md:mb-0">
                <img
                    src="/passa_a_bola_logo.png"
                    alt="Copa Passa a Bola"
                    className="w-30 mr-2"
                />
                <div>
                    <h2 className="text-4xl uppercase font-titles">
                    Copa Passa a Bola
                    </h2>
                    <p className="text-lg max-w-28">
                    Futebol é pra todas.
                    </p>
                </div>
            </div>

            <div className="flex flex-col mb-6 md:mb-0">
                <h3 className="text-4xl uppercase font-titles font-medium">
                Links Rápido
                </h3>
                <ul className="flex flex-col space-y-1 text-sm">
                {["Início", "Inscrição para a Copa PAB", "Edições Anteriores", "Sobre a Copa", "Fale Conosco"].map((link) => (
                    <li key={link}>
                    <a
                        href="#"
                        className="hover:underline font-light text-lg"
                    >
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            <div className="flex flex-col">
                <h3
                    className="text-4xl uppercase font-titles font-medium"
                >
                    Nossas Redes
                </h3>
                <div className="flex space-x-4 justify-center items-center mt-5">
                    <a href="https://www.instagram.com/passaabola/" className="text-contrast-pink">
                        <FaInstagram size={60} />
                    </a>
                    <a href="contato@passabola.com.br" className="text-contrast-pink">
                        <HiOutlineMail size={70} />
                    </a>
                    <a href="https://www.youtube.com/@passabola" className="text-contrast-pink">
                        <FaYoutube size={70} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
