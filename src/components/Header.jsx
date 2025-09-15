export default function Header() {
    const links = [
        { name: "Início", href: "#" },
        { name: "Inscrição", href: "#" },
        { name: "Meu Time", href: "#" },
    ];

    const handleSelect = (e) => {
        const url = e.target.value;
        if (url) window.location.href = url;
    };

    return (
        <header className="w-full bg-contrast-yellow py-4 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src="/passa_a_bola_logo.png"
                        alt="Logo Copa Passa a Bola"
                        className="w-20  mr-3"
                    />
                    <div>
                        <h1 className="text-2xl font-titles uppercase">
                            Copa Passa a Bola
                        </h1>
                        <p className="text-sm">
                            Futebol é pra todas.
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <select
                        onChange={handleSelect}
                        className="md:hidden block border border-gray-400 rounded-md px-3 py-2 text-gray-800 bg-pastel-pink focus:outline-none focus:ring-2 focus:ring-contrast-pink"
                    >
                        <option value="">Menu</option>
                        {links.map((link) => (
                        <option key={link.name} value={link.href}>
                            {link.name}
                        </option>
                        ))}
                    </select>

                    <nav className="hidden md:flex">
                        <ul className="flex space-x-6">
                        {links.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-lg hover:underline"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
