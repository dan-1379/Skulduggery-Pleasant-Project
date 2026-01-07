import { TheSeriesBooks } from '../../constants/';
import { ArrowRight, X, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TheSeries = () => {
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
                {TheSeriesBooks.slice(0, 1).map((series, index) => (
                    <div key={index} className="text-center">
                    
                    <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                        {series.trilogy}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                        {series.books.map((book, bookIndex) => (
                            <div key={bookIndex}>
                                <img
                                src={book.image}
                                alt={book.text}
                                className="w-150 rounded-lg hover:scale-105 transition cursor-pointer"
                                onClick={() => setSelectedBook(book)}
                                />
                            </div>
                         ))}
                    </div>
            </div>
        ))}
        </div>


            <div className="mt-5">
                <Link to="/books" className="group flex gap-2 justify-center text-amber-500">
                    <h3 className="text-lg font-semibold">View All Books</h3>
                    <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1"/>
               </Link>
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

export default TheSeries