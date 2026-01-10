
const CharacterCard = ({ character, onClick }) => {
    return (
        <div className="rounded-md cursor-pointer hover:scale-101" onClick={onClick}>
            <div className="relative">
                <img src={character.image} alt={character.text} className="rounded-t-lg hover:opacity-70" />
                <div className={`absolute bottom-0 left-5 px-3 py-2 my-2 rounded-md text-sm font-semibold ${character.hero ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                    {character.hero ? "Hero" : "Villain"}
                </div>
            </div>
            <div className="bg-slate-800 text-left p-5 rounded-b-lg">
                <h4 className="text-xl">{character.name}</h4>
                <p className="text-neutral-400">{character.power}</p>
            </div>
        </div>
    );
}

export default CharacterCard