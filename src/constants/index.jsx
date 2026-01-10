import { House } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { UserRound } from 'lucide-react';

{/* Book images */}
    {/* The Faceless Ones Trilogy */}
import SkulduggeryPleasant from "../assets/books/01SkulduggeryPleasant.jpg";
import PlayingWithFire from "../assets/books/02PlayingWithFire.jpg";
import TheFacelessOnes from "../assets/books/03TheFacelessOnes.jpg";

    {/* The Death Bringer Trilogy */}
import DarkDays from "../assets/books/04DarkDays.jpg";
import MortalCoil from "../assets/books/05MortalCoil.jpg";
import DeathBringer from "../assets/books/06DeathBringer.jpg";

    {/* The Darquesse Trilogy */}
import KingdomOfTheWicked from "../assets/books/07KingdomOfTheWicked.jpg";
import LastStandOfDeadMen from "../assets/books/08LastStandOfDeadMen.jpg";
import TheDyingOfTheLight from "../assets/books/09TheDyingOfTheLight.jpg";

    {/* The Abyssinia Trilogy */}
import Resurrection from "../assets/books/10Resurrection.jpg";
import Midnight from "../assets/books/11Midnight.jpg";
import Bedlam from "../assets/books/12Bedlam.jpg";

    {/* The Obsidian Trilogy */}
import SeasonsOfWar from "../assets/books/13SeasonsOfWar.jpg";
import DeadOrAlive from "../assets/books/14DeadOrAlive.jpg";
import UntilTheEnd from "../assets/books/15UntilTheEnd.jpg";

    {/* The NEW Trilogy */}
import AMindFullOfMurder from "../assets/books/16AMindFullOfMurder.jpg";
import AHeartFullOfHatred from "../assets/books/17AHeartFullOfHatred.jpg";
import ASoulFullOfShadows from "../assets/books/18ASoulFullOfShadows.jpg";

    {/* From the World of Skulduggery Pleasant */}
import AllHellBreaksLoose from "../assets/books/19AllHellBreaksLoose.jpg";
import TheHauntedHouseOnHollowHill from "../assets/books/20TheHauntedHouseOnHollowHill.jpg";
import ASmallMatterOfImpendingCatastrophe from "../assets/books/21ASmallMatterOfImpendingCatastrophe.jpg";

import BadMagic from "../assets/books/22BadMagic.jpg";
import Grimoire from "../assets/books/23Grimoire.jpg";
import ArmageddonOuttaHere from "../assets/books/24ArmageddonOuttaHere.jpg";

{/* Character images */}
import China_Sorrows from "../assets/characters/ChinaSorrows.jpeg";
import Skulduggery_Pleasant from "../assets/characters/SkulduggeryPleasant.jpeg";
import Valkyrie_Cain from "../assets/characters/ValkyrieCain.jpeg";
import Ghastly_Bespoke from "../assets/characters/GhastlyBespoke.jpeg";
import Tanith_Low from "../assets/characters/TanithLow.jpeg";
import Omen_Darkly from "../assets/characters/OmenDarkly.jpeg";
import Mevolent from "../assets/characters/Mevolent.jpeg";


export const NavItems = [
    { icon: <House />, label: "Home", href: "/" },
    { icon: <BookOpen />, label: "Books", href: "/books" },
    { icon: <UserRound />, label: "Characters", href: "/characters" },
];

export const AboutSeriesInfo = [
    {heading: "24", text: "Books"},
    {heading: "2007", text: "First Published"},
    {heading: "Derek Landy", text: "Author"},
];

export const TheSeriesBooks = [
    {
        trilogy: "The Faceless Ones Trilogy",
        books: [
            {image: SkulduggeryPleasant, title: "Skuldugery Pleasant", description: "He's dead. She's deadly. The bad guys don't stand a chance. The iconic first book in the bestselling Skulduggery Pleasant series. There is a hidden world of magic and monsters, of secret histories and ancient gods. Stephanie was built for it. Stephanie was born for it. But can she survive it? Her only hope lies with Skulduggery Pleasant, the skeleton detective, a wisecracking genius with a past as dark as Stephanie's future"},
            {image: PlayingWithFire, title: "Playing with fire", description: "He's dead. She's deadly. The bad guys don't stand a chance. The second book in the bestselling Skulduggery Pleasant series. Vengeous. Dusk. Sanguine.Three of the deadliest killers alive are in town to resurrect an unstoppable creature of horrifying power…And only Skulduggery Pleasant and Valkyrie Cain stand in their way."},
            {image: TheFacelessOnes, title: "The faceless ones", description: "He's dead. She's deadly. The bad guys don't stand a chance. The third book in the bestselling Skulduggery Pleasant series. You've seen it all before: some bad guy wants to bring about the end of the world. A few people get hurt, sure, but everything's all right in the end.Well, not this time."},   
        ]
    },

    {
        trilogy: "The Death Bringer Trilogy",
            books: [
                {image: DarkDays, title: "Dark Days", description: "He's dead. She's deadly. The bad guys don't stand a chance. The fourth book in the bestselling Skulduggery Pleasant series. Skulduggery is gone, sucked into a parallel dimension. There is no OFFICIAL plan to save him.But Valkyrie's never had much time for plans."},
                {image: MortalCoil, title: "Mortal Coil", description: "He's dead. She's deadly. The bad guys don't stand a chance. The fifth book in the bestselling Skulduggery Pleasant series. Skulduggery and Valkyrie are back - just in time to see their whole world turned upside down.As Valkyrie struggles to protect her dark secret, Skulduggery and their friends are more vulnerable than ever as a plague of body-snatching Remnants are released upon the world."},
                {image: DeathBringer, title: "Death Bringer", description: "He's dead. She's deadly. The bad guys don't stand a chance. The sixth book in the bestselling Skulduggery Pleasant series. The Death Bringer has risen. Skulduggery and Valkyrie have seven days to uncover the Necromancers' secret before it's too late. The clock is ticking. Lord Ville is loose.And after this one, nothing will ever be the same again."},
        ]
    },

    {
        trilogy: "The Darquesse Trilogy",
            books: [
                {image: KingdomOfTheWicked, title: "Kingdom Of The Wicked", description: "He's dead. She's deadly. The bad guys don't stand a chance. The seventh book in the bestselling Skulduggery Pleasant series. Magic is a disease. Across the land, normal people are suddenly developing wild and unstable powers. Wielding the magic of the gods, they're set to tear the city apart, unless someone stands up to them.For Skulduggery and Valkyrie, it's going to be another one of those days."},
                {image: LastStandOfDeadMen, title: "Last Stand Of Dead Men", description: "He's dead. She's deadly. The bad guys don't stand a chance. The eighth book in the bestselling Skulduggery Pleasant series. Two wars rage. One is a war between Sanctuaries - a war of loyalty and betrayal and last, desperate stands. The other is a war within Valkyrie Cain's own soul. If she loses, Darquesse will rise.And the world will burn."},
                {image: TheDyingOfTheLight, title: "The Dying Of The Light", description: "He's dead. She's deadly. The bad guys don't stand a chance. The ninth book in the bestselling Skulduggery Pleasant series. Following the loss of Valkyrie Cain, Skulduggery Pleasant must track down Darquesse before she turns the world into a charred, lifeless cinder - and so he draws together a team of soldiers, monster hunters, criminals and Valkyrie's now murderous reflection.Not everyone gets out of this alive."},
        ]
    },

    {
        trilogy: "The Abyssinia Trilogy",
            books: [
                {image: Resurrection, title: "Resurrection", description: "Skulduggery Pleasant is dead. Valkyrie Cain is cool. Omen Darkly is neither.A lot has changed. Roarhaven is now a magical city, where sorcerers can live openly. Valkyrie Cain has been out of action for years, recovering from the war against her alter-ego Darquesse, which nearly destroyed her and everyone else. Some things never change though: bad people still want to do bad things, and Skulduggery Pleasant is still there to stop them."},
                {image: Midnight, title: "Midnight", description: "For years, Valkyrie Cain has struggled to keep her loved ones safe from harm, plunging into battle - time and time again - by Skulduggery Pleasant's side, and always emerging triumphant.But now the very thing that Valkyrie fights for is in danger, as a ruthless killer snatches her little sister in order to lure Valkyrie into a final confrontation. With Skulduggery racing to catch up and young sorcerer Omen scrambling along behind, Valkyrie only has twelve hours to find Alice before it's too late. The clock is ticking…"},
                {image: Bedlam, title: "Bedlam", description: "On a desperate journey to recover her sister's lost soul, Valkyrie Cain goes up against the High Sanctuary itself, and there's nothing Skulduggery Pleasant can do to stop her.With Abyssinia's grand plan about to kick off in a night of magic, terror, and bloodshed, it falls to Omen Darkly to save the lives of thousands of innocent people."},
        ]
    },

    {
        trilogy: "The Obsidian Trilogy",
            books: [
                {image: SeasonsOfWar, title: "Seasons Of War", description: "War is coming.To avert catastrophe, Skulduggery and Valkyrie are sent on a secret mission that takes them away from everything they know, to a forsaken land of magic and grim, unrelenting terror. It is here that Valkyrie will have to fight the hardest - not only against the enemies who want her dead, but also against her own self-destructive impulses. It's only by crawling through darkness that she'll be able to once again stand in the light…"},
                {image: DeadOrAlive, title: "Dead Or Alive", description: "In a matter of days, the world will change.Billions of lives will be wiped away in a final, desperate search for the Child of the Faceless Ones - she who is destined to bring about the return of humankind's ancient overlords.To prevent this, Skulduggery Pleasant and Valkyrie Cain have one last - terrible - option: the assassination of Damocles Creed. With protests stirring in the magical city of Roarhaven, with riots and revolutions on the horizon, Valkyrie must decide who she wants to be."},
                {image: UntilTheEnd, title: "Until The End", description: "The Faceless Ones have returned to our universe. The bad guys have won.With the end of everything just days away - and no longer able to rely on Valkyrie Cain - Skulduggery must make allies of enemies if he's going to stand any chance of saving what's left of the world. And just when things are looking their bleakest, they manage to get even worse, with Omen Darkly suddenly having to step up when his brother, the Chosen One, falls.There's a lot going on. Most of it is bad. Sorry about that."},
        ]
    },

    {
        trilogy: "The NEW Trilogy",
            books: [
                {image: AMindFullOfMurder, title: "A Mind Full Of Murder", description: "SIX YEARS AGO, THE UNIVERSE ENDED.When it restarted, blinking back into existence, it brought with it a darkness that remains hidden from the mortal population.A week ago - fuelled by unimaginable hatred and unstoppable rage - a masked sorcerer killed one of those mortals. Then he killed another. And another.With their time running out, Skulduggery Pleasant and Valkyrie Cain must work to solve the puzzles the killer leaves behind before more innocents die, embarking on a journey that will force them to deal with the apocalypse they failed to prevent the first time around."},
                {image: AHeartFullOfHatred, title: "A Heart Full Of Hatred", description: "A killer is stalking and murdering sorcerers, and Valkyrie Cain is next on his list.While hunting down a cult of magical terrorists intent on taking their revenge on the mortal world, Skulduggery and Valkyrie are drawn into a murder investigation with unsettling similarities to a case they just closed - the case that nearly took the lives of both Valkyrie's sister and girlfriend.With the body count rising, a special night approaches - a night where the elite of sorcerer society will gather on a remote island to witness a ceremony that could change that society forever."},
                {image: ASoulFullOfShadows, title: "A Soul Full Of Shadows", description: "Skulduggery Pleasant has many enemies - many, many enemies - and people try to kill him multiple times a day. But when someone puts a price on his head, he finds himself going up against a foe that not even he can beat. Valkyrie Cain is in prison, fighting to stay alive in a place where everyone wants to kill her.With an island of sorcerers ready to cut themselves off from the rest of the world, a terrorist group enjoying unprecedented public support, and a showdown looming, Skulduggery and Valkyrie find that their options, like their chances, are quickly running out."},
        ]
    },

    {
        trilogy: "From the World of Skulduggery Pleasant",
            books: [
                {image: AllHellBreaksLoose, title: "All Hell Breaks Loose", description: "Italy, 1703. As the war with Mevolent rages on, the Dead Men are dispatched to a town in the Tuscan hills - not to assassinate the Lord of the Dark Sorcerers, but to save him. A rift has opened to a hellish dimension, and only Mevolent is strong enough to seal it and save the world.A simple mission, then, which turns ever-so-slightly trickier when Skulduggery is presented with the opportunity to finally get revenge on Nefarian Serpine, the man who murdered him and killed his family thirteen years earlier."},
                {image: TheHauntedHouseOnHollowHill, title: "The Haunted House On Hollow Hill", description: "On a dark and stormy night, A pair of ghost-hunting journalists arrive at the most haunted house in Britain - the Hollow Hotel to interview the Dark King of television magic, Romeo Gideon.Instead, they discover the body of a murdered man hanging from the rafters - the work of a killer who wields actual magic as viciously as he does his blade. With the storm closing in, all exit routes cut off, and the killer taking them out one by one, their only hope lies with the two mysterious Irish detectives who seem quite at home with all this bloodshed …Skulduggery Pleasant and Valkyrie Cain have only hours to figure out who the killer is."},
                {image: ASmallMatterOfImpendingCatastrophe, title: "A Small Matter of Impending Catastrophe", description: "In 1962, three sorcerers converged to do battle in a hidden chamber near a disused platform in the London Underground. Prophecy foretold that the victor would hold the very fate of humanity in their hands. Since then… nothing.Now, the people who are trying to find out exactly what happened all those years ago are being murdered - there is a killer coming after them, a killer with a plan - and their only hope for survival lies with Skulduggery Pleasant and Valkyrie Cain.Because when the end of the world comes knocking, our first line of defence must always be sarcasm.Unstoppable, withering sarcasm."},
        ]
    },

    {
        trilogy: "",
            books: [
                {image: BadMagic, title: "Bad Magic", description: "A small town in the middle of Ireland, a string of unexplained deaths and a monster on the loose. Better call in the experts.When Skulduggery Pleasant and Valkyrie Cain drive into Termoncara, they discover a town with a dark past and a people haunted by their own secrets. There is a creature stalking the streets - a creature who delights in cruelty, who feeds off the little hatreds, who grows stronger with every drop of blood spilled."},
                {image: Grimoire, title: "Grimoire", description: "Relive the adventures of Skulduggery Pleasant in this lavishly illustrated compendium. Featuring a unique run-down of the books so far, it also includes an invaluable reference tool for the dizzying cast of characters, as well as bonuses, surprises and a dark story all of its own. "},
                {image: ArmageddonOuttaHere, title: "Armageddon Outta Here", description: "ENTER A WORLD OF MAGIC AND MYSTERY. Enter a world where Apocalypse Kings and ancient monsters stalk beside the killers, the misfits, the oddballs and the weirdos.Enter the world of Skulduggery Pleasant.This definitive story collection has been updated with seven new twisted tales of darkness and light, of heroes and villains and everything in-between."},
        ]
    },
];   


export const TheSeriesCharacters = [
    {image: Skulduggery_Pleasant, name: "Skulduggery Pleasant", power: "Elemental", species: "Human", age: "444", hero: true},
    {image: Valkyrie_Cain, name: "Valkyrie Cain", power: "White Lightning | Sensitive", species: "Human", age: "30", hero: true},
    {image: China_Sorrows, name: "China Sorrows", power: "Signum Linguist", species: "Human", age: "443", hero: true},
    {image: Ghastly_Bespoke, name: "Ghastly Bespoke", power: "Elemental", species: "Human", age: "400+", hero: true},
    {image: Tanith_Low, name: "Tanith Low", power: "Adept", species: "Human", age: "106", hero: true},
    {image: Omen_Darkly, name: "Omen Darkly", power: "Elemental | Adept", species: "Human", age: "21", hero: true},
    {image: Mevolent, name: "Mevolent", power: "Elemental", species: "Human", age: "Unknown", hero: false},
];