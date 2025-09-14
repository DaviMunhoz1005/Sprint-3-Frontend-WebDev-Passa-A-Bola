export default function PlayerCard({ player }) {
    const calculateAge = (birthdate) => {
        if (!birthdate) return "";
        const [year, month, day] = birthdate.split("-").map(Number);
        console.log(year, month, day);
        const today = new Date();
        let age = today.getFullYear() - year;
        console.log(age)
        if (
            today.getMonth() < month ||
            (today.getMonth() === month && today.getDate() < day)
        ) {
            age--;
        }
        return age;
    };


    return (
        <article className="flex flex-col items-center bg-pastel-pink rounded-xl shadow-md p-4">
            {player.foto ? (
                <img
                    src={URL.createObjectURL(player.foto)}
                    alt={`Foto de ${player.nome}`}
                    className="rounded-md w-50 h-50 object-cover"
                />
            ) : (
                <div className="w-40 h-40 flex items-center justify-center bg-neutral-200 rounded-md">
                    <span>Sem foto</span>
                </div>
            )}
            <h2 className="mt-2 font-medium text-2xl text-center">{player.nome}</h2>
            <p className="text-md">{calculateAge(player.nascimento)} anos</p>
            <p className="text-md">{player.posicao}</p>
            <p className="text-md">{player.telefone}</p>
            <p className="text-md">{player.email}</p>
        </article>
    );
}
