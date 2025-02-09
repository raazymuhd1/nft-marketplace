import Image, {StaticImageData} from "next/image"

export type Chain = {
  visible: boolean;
  name: string;
  chainId: number;
  logo: StaticImageData;
}
