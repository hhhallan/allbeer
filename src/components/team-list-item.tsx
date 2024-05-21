import Image from "next/image";

type Props = {
  name: string;
  img?: string;
  desc?: string;
};

export const TeamListItem = ({
  name,
  img = "placeholder.svg",
  desc,
}: Props) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Image
        alt={name}
        className="w-full h-60 object-cover"
        height="240"
        src={`/${img}`}
        style={{
          aspectRatio: "360/240",
          objectFit: "cover",
        }}
        width="360"
      />
      <div className="p-4 h-full bg-white dark:bg-gray-950">
        <h3 className="text-lg font-semibold">{name}</h3>
        {desc && (
          <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
};
