import { bera, dxnk, element, beraProfile, dxnkProfile, elementProfile, artBlock, azukiElementalBeans, azukiElemental, azuki, bitbears, boredape, doodles, lilpudgys, kaito, pudgy, mutant, thecaptain, honeycomb, jirasan, milady, ether, op, bnb, arb, ava } from "@/assets"
import { BsTwitter, BsTelegram, BsDiscord  } from "react-icons/bs";

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


const signalItems = [
    { id: 1, title: "Pudgy Penguins", url: "/", img: pudgy, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 2, title: "Milady", url: "/", img: milady, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 3, title: "Azuki", url: "/", img: azuki, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 4, title: "Bored Ape", url: "/", img: boredape, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 5, title: "Doodles", url: "/", img: doodles, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 6, title: "Art Blocks", url: "/", img: artBlock, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 7, title: "Kaito", url: "/", img: kaito, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 8, title: "Lil Pudgys", url: "/", img: lilpudgys, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 9, title: "Azuki Elemental Beans", url: "/", img: azukiElementalBeans, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 10, title: "Azuki Elemental", url: "/", img: azukiElemental, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 11, title: "Mutant Ape", url: "/", img: mutant, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 12, title: "The Captain", url: "/", img: thecaptain, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 13, title: "Honey Comb", url: "/", img: honeycomb, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 14, title: "Jirasan", url: "/", img: jirasan, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
    { id: 15, title: "Bitbears by Berachain", url: "/", img: bitbears, floorPrice: "0.5", volume: "100", volumeUp: "200%" },
]

const trackingItems = [
    { id: 1, title: "Pudgy Penguins", url: "/", img: pudgy, floorPrice: "0.5", volume: "100" },
    { id: 2, title: "Milady", url: "/", img: milady, floorPrice: "0.5", volume: "100" },
    { id: 3, title: "Azuki", url: "/", img: azuki, floorPrice: "0.5", volume: "100" },
    { id: 4, title: "Bored Ape", url: "/", img: boredape, floorPrice: "0.5", volume: "100" },
    { id: 5, title: "Doodles", url: "/", img: doodles, floorPrice: "0.5", volume: "100" },
    { id: 6, title: "Art Blocks", url: "/", img: artBlock, floorPrice: "0.5", volume: "100" },
    { id: 7, title: "Kaito", url: "/", img: kaito, floorPrice: "0.5", volume: "100" },
    { id: 8, title: "Lil Pudgys", url: "/", img: lilpudgys, floorPrice: "0.5", volume: "100" },
    { id: 9, title: "Azuki Elemental Beans", url: "/", img: azukiElementalBeans, floorPrice: "0.5", volume: "100" },
    { id: 10, title: "Azuki Elemental", url: "/", img: azukiElemental, floorPrice: "0.5", volume: "100" },
    { id: 11, title: "Mutant Ape", url: "/", img: mutant, floorPrice: "0.5", volume: "100" },
    { id: 12, title: "The Captain", url: "/", img: thecaptain, floorPrice: "0.5", volume: "100" },
    { id: 13, title: "Honey Comb", url: "/", img: honeycomb, floorPrice: "0.5", volume: "100" },
    { id: 14, title: "Jirasan", url: "/", img: jirasan, floorPrice: "0.5", volume: "100" },
    { id: 15, title: "Bitbears by Berachain", url: "/", img: bitbears, floorPrice: "0.5", volume: "100" },
]

const trendingItems = [
    { id: 1, title: "MetaWinners", url: "/", img: pudgy, floorPrice: "0.5", volume: "100" },
    { id: 2, title: "InfiniGods", url: "/", img: milady, floorPrice: "0.5", volume: "100" },
    { id: 3, title: "2049 // Reflection ", url: "/", img: azuki, floorPrice: "0.5", volume: "100" },
    { id: 4, title: "SnackGang", url: "/", img: boredape, floorPrice: "0.5", volume: "100" },
    { id: 5, title: "OCH Genesis", url: "/", img: doodles, floorPrice: "0.5", volume: "100" },
    { id: 6, title: "XPSR24", url: "/", img: artBlock, floorPrice: "0.5", volume: "100" },
    { id: 7, title: "Sprotoladys", url: "/", img: kaito, floorPrice: "0.5", volume: "100" },
    { id: 8, title: "Egg nft", url: "/", img: lilpudgys, floorPrice: "0.5", volume: "100" },
    { id: 9, title: "Honey Comb", url: "/", img: azukiElementalBeans, floorPrice: "0.5", volume: "100" },
    { id: 10, title: "Pirate", url: "/", img: azukiElemental, floorPrice: "0.5", volume: "100" },
    { id: 11, title: "Element Pass Standard", url: "/", img: mutant, floorPrice: "0.5", volume: "100" },
    { id: 12, title: "Element Pass Genesis", url: "/", img: thecaptain, floorPrice: "0.5", volume: "100" },
]

const footerSocials = [
    { id: 0, Logo: BsTwitter, url: "/" },
    { id: 1, Logo: BsTelegram, url: "" },
    { id: 2, Logo: BsDiscord, url: "" },
]

const footerLinks = [
    { id: 0, title: "Docs", url: "/" },
    { id: 1, title: "Privacy Statement", url: "/" },
    { id: 2, title: "Term of service", url: "/" },
]

const networkLists = [
    { id: 0, name: "Ethereum", chainId: 1, logo: ether },
    { id: 1, name: "Optimism", chainId: 1, logo: op },
    { id: 2, name: "BNB Chain", chainId: 1, logo: bnb },
    { id: 3, name: "Arbitrum", chainId: 1, logo: arb },
    { id: 4, name: "Avalanche", chainId: 1, logo: ava },
]

export {
    navlists, heroSlides, 
    trackingItems, signalItems, 
    trendingItems, footerLinks, 
    footerSocials, networkLists
}