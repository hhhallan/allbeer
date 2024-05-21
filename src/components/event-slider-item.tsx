import Image from "next/image";
import { CarouselItem } from "./ui/carousel";

type Props = {};

export const EventSliderItem = ({}: Props) => {
  return (
    <CarouselItem>
      <Image
        alt="Événement 1"
        className="aspect-video object-cover rounded-md"
        height={252}
        src="/placeholder.svg"
        width={448}
      />
    </CarouselItem>
  );
};
