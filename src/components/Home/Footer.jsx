import { Skull } from 'lucide-react';

const Footer = () => {
    return (
        <div className="flex justify-between p-5 items-end">
            <div className="flex gap-3">
                <div>
                    <Skull size={40} />
                </div>

                <div>
                    <h5 className="text-xl">Skulduggery Pleasant</h5>
                    <p className="text-neutral-400">Fan Site</p>
                </div>
            </div>

            <div>
                <p className="text-neutral-400">Created by Dan Courtney</p>
            </div>
        </div>
    );
}

export default Footer