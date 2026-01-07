
const Hero = () => {
    return (
        <div className="relative isolate text-center p-5 mt-5 lg:p-10 bg-[url(src/assets/header/SP-characters-for-web-1024x500-1.jpg)] bg-no-repeat bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10">
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl">Skulduggery Pleasant</h2>

                <p className="mt-5 mb-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-neutral-400">
                    Dive into the magical world of sorcerers, monsters, 
                    and the wittiest skeleton you’ll ever meet.
                </p>

                <button className="w-full mt-5 md:w-50 text-xl sm:text-2xl md:text-3xl bg-amber-500 p-3 rounded-md hover:bg-amber-600 transition 
                                active:scale-95">
                    Learn more
                </button>
            </div>
        </div>
    );
}

export default Hero