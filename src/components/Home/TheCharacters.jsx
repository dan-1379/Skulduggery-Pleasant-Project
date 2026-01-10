import { TheSeriesCharacters } from '../../constants';
import { X, UserRound, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import { useState } from 'react';
import { motion } from "framer-motion";

const TheCharacters = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    return (
        <div className="text-center mt-10 p-5 lg:p-10">
            <div className="inline-flex justify-center bg-slate-800 p-5 rounded-lg text-amber-500">
                <UserRound size={40}/>
            </div>

            <h3 className="text-3xl mt-2">The Characters</h3>
            <p className="sm:text-md md:text-xl lg:text-2xl text-neutral-400 mt-5">
                Follow Skulduggery Pleasant and Valkyrie Cain in their adventures.
            </p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 justify-items-center">
                    {TheSeriesCharacters.slice(0, 3).map((item, index) => (
                        <CharacterCard key={index} character={item} onClick={() => setSelectedCharacter(item)}/>
                    ))}
                </div>
            </motion.div>

            <div className="mt-5">
                <Link to="/characters" className="group flex gap-2 justify-center text-amber-500">
                    <h3 className="text-lg font-semibold">View All Characters</h3>
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1"/>
               </Link>
            </div>

            {selectedCharacter && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedCharacter(null)}/>

                    <div className="relative bg-slate-900 rounded-lg max-w-md w-90 z-10">
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

export default TheCharacters