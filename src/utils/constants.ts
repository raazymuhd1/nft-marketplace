import { bera, dxnk, element, beraProfile, dxnkProfile, elementProfile, artBlock, azukiElementalBeans, azukiElemental, azuki, bitbears, boredape, doodles, lilpudgys, kaito, pudgy, mutant, thecaptain, honeycomb, jirasan, milady, ether, op, bnb, arb, ava, azuki1, azuki2, azuki3, azuki4, azuki5, azuki6, azuki7, azuki8, azuki9, azuki10, opensea, blur, weth, eth } from "@/assets"
import { BsTwitter, BsTelegram, BsDiscord  } from "react-icons/bs";
import { FaGlobe, FaStar, FaMedium  } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdOutlineRefresh, MdOutlineStarOutline, MdShare   } from "react-icons/md";

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

// item socials
const colSocials = [
    { id: 0, Logo: FaGlobe, url: "/" },
    { id: 1, Logo: BsTwitter, url: "/" },
    { id: 2, Logo: BiLogoInstagramAlt, url: "/" },
    { id: 3, Logo: BsDiscord, url: "/" },
]

const colExtraIcons = [
    {id: 0, Logo: MdOutlineRefresh, url: "/"},
    {id: 1, Logo: FaStar, url: "/"},
    {id: 2, Logo: MdShare, url: "/"},
]

const colTabs = [
    {id: 0, title: "Items", isActive: false},
    {id: 1, title: "My Items", isActive: false},
    {id: 2, title: "Offers", isActive: false},
    {id: 3, title: "Analytics", isActive: false},
    {id: 4, title: "Activity", isActive: false},
]

const priceFilters = [
    { id: 0, title: "Recently Listed", selected: false },
    { id: 1, title: "Price: High to Low", selected: false },
    { id: 2, title: "Price: Low to High", selected: false },
    { id: 3, title: "Rarity: High to Low", selected: false },
    { id: 4, title: "Recently Transfer", selected: false },
    { id: 5, title: "Recently Created", selected: false },
    { id: 6, title: "Ending Soon", selected: false },
]

const accountSocialLinks = [
    { id: 0, Logo: BsTwitter, url: "https://x.com/" },
    { id: 1, Logo: BiLogoInstagramAlt, url: "https://instagram.com/" },
    { id: 2, Logo: BsTelegram, url: "https://t.me.com/@" },
    { id: 3, Logo: BsDiscord, url: "https://discord.gg/" },
    { id: 4, Logo: FaMedium, url: "https://medium.com/@" },
]

// dummy collections
const dummyCollections = [
    { id: 0, price: "1", tokenId: "100", img: azuki1 },
    { id: 1, price: "1", tokenId: "100", img: azuki2 },
    { id: 2, price: "1", tokenId: "100", img: azuki3 },
    { id: 3, price: "1", tokenId: "100", img: azuki4 },
    { id: 4, price: "1", tokenId: "100", img: azuki5 },
    { id: 5, price: "1", tokenId: "100", img: azuki6 },
    { id: 6, price: "1", tokenId: "100", img: azuki7 },
    { id: 7, price: "1", tokenId: "100", img: azuki8 },
    { id: 8, price: "1", tokenId: "100", img: azuki9 },
    { id: 9, price: "1", tokenId: "100", img: azuki10 },
]

// marketplaces
const marketplaces = [
    { id: 0, title: "Opensea", img: opensea, rate: "288 (2,88%)" },
    { id: 1, title: "Blur", img: blur, rate: "248 (2,48%)" }
]

const currencies = [
    {id: 0, title: "WETH", logo: weth},
    {id: 1, title: "ETH", logo: eth},
]

export {
    navlists, heroSlides, 
    trackingItems, signalItems, 
    trendingItems, footerLinks, 
    footerSocials, networkLists, colSocials,
    colExtraIcons, colTabs, priceFilters, accountSocialLinks,
    dummyCollections,
    marketplaces,
    currencies
}