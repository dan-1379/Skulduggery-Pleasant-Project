import { TheSeriesCharacters } from '../constants';
import { UserRound, X } from 'lucide-react';
import CharacterCard from '../components/Home/CharacterCard';
import { useState } from 'react';

const Characters = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [selectedType, setSelectedType] = useState("All");

    const filteredCharacters = TheSeriesCharacters.filter(character => {
        if (selectedType === "Hero") return character.hero;
        if (selectedType === "Villain") return !character.hero;
        return true;
    })

    return (
        <div className="text-center mt-10 p-5 lg:p-10">
            <div className="inline-flex justify-center bg-slate-800 p-5 rounded-lg text-amber-500">
                <UserRound size={40}/>
            </div>

            <h3 className="text-3xl mt-2">The Characters</h3>
            <p className="sm:text-md md:text-xl lg:text-2xl text-neutral-400 mt-5">
                Follow Skulduggery Pleasant and Valkyrie Cain in their adventures.
            </p>

            <div className="flex justify-center gap-5">
                <button className={`w-1/3 mt-5 md:w-50 text-xl sm:text-md md:text-xl lg:text-2xl bg-amber-500 p-3 rounded-md transition 
                                active:scale-95 ${selectedType === "All" ? "bg-amber-700" : "bg-amber-500"}`} onClick={() => setSelectedType("All")}>All</button>
                <button className={`w-full mt-5 md:w-50 text-xl sm:text-md md:text-xl lg:text-2xl bg-amber-500 p-3 rounded-md transition 
                                active:scale-95 ${selectedType === "Hero" ? "bg-amber-700" : "bg-amber-500"}`} onClick={() => setSelectedType("Hero")}>Heroes</button>
                <button className={`w-full mt-5 md:w-50 text-xl sm:text-md md:text-xl lg:text-2xl bg-amber-500 p-3 rounded-md transition 
                                active:scale-95 ${selectedType === "Villain" ? "bg-amber-700" : "bg-amber-500"}`} onClick={() => setSelectedType("Villain")}>Villains</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 justify-items-center">
                {filteredCharacters.map((item, index) => (
                    <CharacterCard key={index} character={item} onClick={() => setSelectedCharacter(item)}/>
                ))}
            </div>

            {selectedCharacter && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedCharacter(null)}/>

                    <div className="relative bg-slate-900 rounded-lg max-w-md w-full z-10">
                        <X className="absolute top-3 right-3 text-white hover:text-neutral-400" onClick={() => setSelectedCharacter(null)}/>
                        <img src={selectedCharacter.image} alt={selectedCharacter.name} className="rounded-md mb-4"/>
                        <h3 className="text-2xl mb-2">{selectedCharacter.name}</h3>
                        <div className="flex justify-around"> 
                            <p className="text-neutral-400 mb-2"><span className="text-amber-400">Power: </span>{selectedCharacter.power}</p>
                            <p className="text-neutral-400 mb-2"><span className="text-amber-400">Species: </span>{selectedCharacter.species}</p>
                            <p className="text-neutral-400 mb-2"><span className="text-amber-400">Age: </span>{selectedCharacter.age}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Characters