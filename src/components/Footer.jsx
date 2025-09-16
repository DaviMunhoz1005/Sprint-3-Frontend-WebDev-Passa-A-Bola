import { FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    const quickLinks = [
        { name: "Início", path: "/" },
        { name: "Inscrição para a Copa PAB", path: "/subscribe" },
        { name: "Meu Time", path: "/login" },
        { name: "Cadastrar Time", path: "/register" },
        { name: "Fale Conosco", path: "/subscribe" },
    ];

    return (
        <footer className="w-full p-8 flex flex-col md:flex-row justify-between items-start bg-contrast-yellow gap-8">
            <section className="flex items-start gap-3">
                <img
                    src="/passa_a_bola_logo.png"
                    alt="Copa Passa a Bola"
                    className="w-20"
                />
                <div>
                    <h2 className="text-3xl md:text-4xl uppercase font-titles">
                        Copa Passa a Bola
                    </h2>
                    <p className="text-lg">Futebol é pra todas.</p>
                </div>
            </section>

            <nav className="flex flex-col" aria-label="Links rápidos">
                <h3 className="text-2xl md:text-3xl uppercase font-titles font-medium mb-3">
                    Links Rápidos
                </h3>
                <ul className="flex flex-col space-y-2 text-lg">
                    {quickLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                onClick={() => navigate(link.path)}
                                className="hover:underline font-light text-left"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <address className="flex flex-col not-italic items-center md:items-start">
                <h3 className="text-2xl md:text-3xl uppercase font-titles font-medium">
                    Nossas Redes
                </h3>
                <div className="flex space-x-6 justify-center items-center mt-5">
                    <a
                        href="https://www.instagram.com/passaabola/"
                        className="text-contrast-pink"
                        aria-label="Instagram Passa a Bola"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="w-10 h-10 md:w-14 md:h-14" />
                    </a>
                    <a
                        href="mailto:contato@passabola.com.br"
                        className="text-contrast-pink"
                        aria-label="E-mail Passa a Bola"
                    >
                        <HiOutlineMail className="w-12 h-12 md:w-16 md:h-16" />
                    </a>
                    <a
                        href="https://www.youtube.com/@passabola"
                        className="text-contrast-pink"
                        aria-label="YouTube Passa a Bola"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube className="w-12 h-12 md:w-16 md:h-16" />
                    </a>
                </div>
            </address>
        </footer>
    );
}
