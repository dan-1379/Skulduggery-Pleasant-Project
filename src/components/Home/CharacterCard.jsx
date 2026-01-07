
const CharacterCard = ({ character, onClick }) => {
    return (
        <div className="rounded-md cursor-pointer hover:scale-101" onClick={onClick}>
            <img src={character.image} alt={character.text} className="rounded-t-lg hover:opacity-70" />
            <div className="bg-slate-800 text-left p-5 rounded-b-lg">
                <h4 className="text-xl">{character.name}</h4>
                <p className="text-neutral-400">{character.power}</p>
            </div>
        </div>
    );
}

export default CharacterCard