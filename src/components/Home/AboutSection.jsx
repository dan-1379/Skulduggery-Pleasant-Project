import { Skull} from 'lucide-react';
import { AboutSeriesInfo } from '../../constants';

const AboutSection = () => {
    return (
        <div className="text-center mt-10 p-5 lg:p-10">
            <div className="inline-flex justify-center bg-slate-800 p-5 rounded-lg text-amber-500">
                <Skull size={40} className="" />
            </div>
            <h3 className="text-3xl mt-2">About the Series</h3>
            <p className="sm:text-md md:text-xl lg:text-2xl text-neutral-400 mt-5">
                Skulduggery Pleasant is a fantasy novel series written by Irish author Derek Landy. 
                The series follows the adventures of the skeleton detective Skulduggery Pleasant and his partner Valkyrie Cain 
                as they combat magical villains who threaten the world.  
            </p>

            <div className="flex flex-row flex-wrap justify-center gap-5 mt-5 m-2">
                {AboutSeriesInfo.map((item, index) => (
                    <div key={index} className="bg-slate-800 p-5 rounded-md w-30% lg:w-1/5">
                        <h4 className="text-amber-400 sm:text-md md:text-xl lg:text-2xl">{item.heading}</h4>
                        <p className="text-neutral-400">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutSection