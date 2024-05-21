import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type Props = {
  children: React.ReactNode;
};

export const EventSlider = ({ children }: Props) => {
  return (
    <Carousel
      className="w-full max-w-md mx-auto"
      opts={{
        align: "start",
        loop: true,
        duration: 20,
      }}
    >
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  );
};
