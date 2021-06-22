import friend0 from "../Images/main.jpg";
import friend1 from "../Images/friend1.jpg";
import friend2 from "../Images/friend2.jpg";
import friend3 from "../Images/friend3.jpg";
import friend4 from "../Images/friend4.jpg";
import friend5 from "../Images/friend5.jpg";
import friend6 from "../Images/friend6.jpg";
import friend7 from "../Images/friend7.jpg";
import friend8 from "../Images/friend8.jpg";
import friend9 from "../Images/friend9.jpg";

export const homePage = 'home';
export const aboutMePage = 'about_me';
export const starWarsPage = 'star_wars';
export const contactPage = 'contact';
export const base_url = 'http://sw-info-api.herokuapp.com';
export const version = '/v1';
export const periodMonth = 1000 * 60 * 60 * 24 * 30;

export const characters = {
    luke: {
        index: 0,
        name: "Luke Skywalker",
        img: friend0,
        url: `${base_url + version}/peoples/1`
    },
    c3po: {
        index: 2,
        name: "C-3PO",
        img: friend2,
        url: `${base_url + version}/peoples/2`
    },
    r2d2: {
        index: 1,
        name: "R2-D2",
        img: friend1,
        url: `${base_url + version}/peoples/3`
    },
    leia: {
        index: 6,
        name: "Leia Organa",
        img: friend6,
        url: `${base_url + version}/peoples/5`
    },
    obi_wan: {
        index: 8,
        name: "Obi-Wan Kenobi",
        img: friend8,
        url: `${base_url + version}/peoples/10`
    },
    chewbacca: {
        index: 4,
        name: "Chewbacca",
        img: friend4,
        url: `${base_url + version}/peoples/13`
    },
    han_solo: {
        index: 5,
        name: "Han Solo",
        img: friend5,
        url: `${base_url + version}/peoples/14`
    },
    yoda: {
        index: 9,
        name: "Yoda",
        img: friend9,
        url: `${base_url + version}/peoples/0`
    },
    ewok: {
        index: 3,
        name: "Wicket Systri Warrick",
        img: friend3,
        url: `${base_url + version}/peoples/30`
    },
    falcon: {
        index: 7,
        name: "Millennium Falcon",
        img: friend7,
        url: `${base_url + version}/transports/10`
    }
};

export const friends = Object.keys(characters);

export const defaultHero = friends[0];

export const starsWarsInfo = `Star Wars is an American epic space-opera media franchise created by George Lucas, which began with
    the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has
been expanded into various films and other media, including television series, video games, novels,
    comic books, theme park attractions and themed areas, comprising an all-encompassing fictional
universe. The franchise holds a Guinness World Records title for the "Most successful film
merchandising franchise."[1] In 2018, the total value of the Star Wars franchise was estimated at
US$65 billion, and it is currently the fifth-highest-grossing media franchise of all time.

    The original film, later subtitled Episode IV – A New Hope, was followed by the sequels Episode V –
                    The Empire Strikes Back (1980) and Episode VI – Return of the Jedi (1983), forming the original Star
Wars trilogy. A prequel trilogy was later released, consisting of Episode I – The Phantom Menace
(1999), Episode II – Attack of the Clones (2002) and Episode III – Revenge of the Sith (2005). Ten
years later, a sequel trilogy began with Episode VII – The Force Awakens (2015), continued with
    Episode VIII – The Last Jedi (2017), and concluded with Episode IX – The Rise of Skywalker (2019).
    Together, the three trilogies form what has been referred to as the 'Skywalker saga'. The first
eight films were nominated for Academy Awards (with wins going to the first two released) and were
commercially successful. Together with the theatrical anthology films Rogue One (2016) and Solo: A
Star Wars Story (2018), the combined box office revenue of the films equates to over US$9
billion,[2] and is currently the second-highest-grossing film franchise.[3]

In 2012, Lucas sold his company to Disney, and in April 2014, most existing spin-off media was made
non-canon and rebranded as 'Star Wars Legends'. The episodic 'Skywalker saga' and The Clone Wars
film and TV series (2008–2014) define the canon, along with most subsequent works.`;
