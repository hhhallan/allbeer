import { Phone, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

type Props = {
  type: "tel" | "mailto";
};

const NUMBER = "06 95 95 95 95";
const MAIL = "allbeer@gmail.com";

export const ContactListItem = ({ type }: Props) => {
  return (
    <Link href={`${type}:`}>
      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="flex items-center gap-4">
            {type === "tel" ? (
              <Phone className="text-green-500" />
            ) : (
              <Mail className="text-green-500" />
            )}
            <div className="flex gap-8 items-center w-full">
              <p className="text-lg">
                {type === "tel" && "Notre numéro:    "}
                {type === "mailto" && "Notre mail:    "}
              </p>
              <span className="font-bold">
                {type === "tel" ? NUMBER : MAIL}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
