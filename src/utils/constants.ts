import { bera, dxnk, element, beraProfile, dxnkProfile, elementProfile } from "@/assets"

const navlists = [
    { id: 0, title: "Create", url: "/create" },
    { id: 1, title: "Ranking", url: "/ranking" },
    { id: 2, title: "Drops", url: "/drops" },
]

const heroSlides = [
    { id: 0, title: "BitBears by Berachain", desc: "2355 ready to build on berachain", url: "/", img: bera, profileImg: beraProfile },
    { id: 1, title: "DXNK", desc: "DXNK is a collection of hand drawn relics, reserved for most dope people on the interner", url: "/", img: dxnk, profileImg: dxnkProfile },
    { id: 2, title: "Element Pass Standard", desc: "Element Pass Standard (EPS) is a standard collection in the Element Pass Series", url: "/", img: element, profileImg: elementProfile },
]

export {navlists, heroSlides}