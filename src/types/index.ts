import Image, {StaticImageData} from "next/image"
import { Dispatch, SetStateAction } from "react";

export type Chain = {
  visible: boolean;
  name: string;
  chainId: number;
  logo: StaticImageData;
}

export interface IProfile {
    showProfile: boolean;
    setShowProfile: Dispatch<SetStateAction<boolean>>
}

export type State = {
    showModal: boolean;
    updateModalState: Dispatch<SetStateAction<boolean>>;
}

export type MappedState<T> = {
    [Prop in keyof T]: T[Prop];
}