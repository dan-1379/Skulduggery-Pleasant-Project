import { BookOpen, X } from 'lucide-react';
import { TheSeriesBooks } from '../constants';
import { useState } from 'react';
import { motion } from "framer-motion";


const Books = () => {
    const [selectedBook, setSelectedBook] = useState(null);

    return (
        <div className="text-center mt-10 p-5 lg:p-10">
            <div className="inline-flex justify-center bg-slate-800 p-5 rounded-lg text-amber-500">
                <BookOpen size={40}/>
            </div>
            <h3 className="text-3xl mt-2">The Series</h3>
            <p className="sm:text-md md:text-xl lg:text-2xl text-neutral-400 mt-5">
                Follow Skulduggery Pleasant and Valkyrie Cain in their adventures.
            </p>

                <div className="mt-10 space-y-12">
                    {TheSeriesBooks.map((series, index) => (
                        <div key={index} className="text-center">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-amber-500">
                                {series.trilogy}
                            </h3>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                                    {series.books.map((book, bookIndex) => (
                                        <div key={bookIndex}>
                                            <img
                                            src={book.image}
                                            alt={book.text}
                                            className="w-150 rounded-lg hover:scale-101 transition"
                                            onClick={() => setSelectedBook(book)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            {selectedBook && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedBook(null)}/>

                    <div className="relative bg-slate-900 rounded-lg  w-[90vw] max-w-xl sm:max-w-2xl max-h-[90vh] overflow-y-auto z-10">
                        <X className="absolute top-3 right-3 text-white hover:text-neutral-400" onClick={() => setSelectedBook(null)}/>
                        <div className="flex flex-col sm:flex-row"> 
                            <img src={selectedBook.image} alt={selectedBook.title} className="w-full sm:w-48 rounded-md object-cover"/>
                            <div className="flex flex-col justify-center p-5">
                                <h3 className="text-2xl mb-2">{selectedBook.title}</h3>
                                <p className="text-neutral-400">{selectedBook.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Books