import { Header } from "./(main)/header";
import { Footer } from "./(main)/footer";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { TeamList } from "./(main)/team-list";
import { Mail, Phone } from "lucide-react";
import { ContactList } from "./(main)/contact-list";
import { ContactListItem } from "@/components/contact-list-item";
import { TeamListItem } from "@/components/team-list-item";
import { EventSlider } from "./(main)/event-slider";
import { EventSliderItem } from "@/components/event-slider-item";

const AppPage = () => {
  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20 lg:pt-24">
        <section id="info" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container flex flex-col max-w-6xl gap-8 px-4 md:px-6">
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-4">
                <Badge>À propos</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl">
                  Brassage de bières d&apos;exception depuis 1985
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  AllBeer est une brasserie familiale qui crée des bières de
                  spécialité de haute qualité depuis plus de 35 ans. Notre
                  passion pour l&apos;artisanat et notre engagement à utiliser
                  les meilleurs ingrédients nous ont valu la réputation
                  d&apos;être l&apos;un des principaux producteurs de bières
                  haut de gamme.
                </p>
              </div>
              <Image
                alt="Brasserie AllBeer"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-4 order-last">
                <h3 className="text-xl lg:text-2xl font-bold">
                  Horaires d&apos;ouverture
                </h3>
                <ul className="text-gray-500 dark:text-gray-400 list-disc pl-8">
                  <li>
                    <div className="flex justify-between w-[250px]">
                      <span>Lundi - Vendredi:</span>
                      <p>9h - 18h</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between w-[250px]">
                      <span>Samedi:</span>
                      <p>10h - 16h</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between w-[250px]">
                      <span>Dimanche:</span>
                      <p>Fermé</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 md:order-last">
                <h3 className="text-2xl font-bold">Notre boutique</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Notre cave showroom d&apos;Elbeuf est un lieu de découvertes
                  et de conseils, dans une ambiance conviviale. Vous y
                  découvrirez une selection de plus de 1500 references de
                  qualité, exclusives ou rares pour certaines. Que vous soyez un
                  particulier, un revendeur, exploitant d&apos;un CHR, membre
                  d&apos;une association ou d&apos;un CSE, venez nous rendre
                  visite !
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="espace-pro"
          className="bg-gray-100 w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container flex flex-col max-w-6xl gap-8 px-4 md:px-6">
            <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-4 md:order-last">
                <Badge>Espace Pro</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl">
                  Ressources pour les professionnels
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Notre Espace Pro est conçu pour fournir aux professionnels de
                  l&apos;industrie les ressources et les informations dont ils
                  ont besoin pour travailler avec nos bières d&apos;exception.
                  Des spécifications techniques aux supports marketing, nous
                  nous efforçons de soutenir nos partenaires de toutes les
                  manières possibles.
                </p>
              </div>
              <Image
                alt="Espace Pro"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-4 order-last">
                <h3 className="text-xl lg:text-2xl font-bold">
                  L&apos;offre professionnelle c&apos;est:
                </h3>
                <ul className="text-gray-500 dark:text-gray-400 list-disc pl-8">
                  <li>
                    <p>Une offre de produits personnalisée.</p>
                  </li>
                  <li>
                    <p>
                      Une indépendance pour une offre plus large de produits.
                    </p>
                  </li>
                  <li>
                    <p>
                      Un savoir faire connu et reconnu depuis plus de dix ans.
                    </p>
                  </li>
                  <li>
                    <p>
                      L&apos;installation et la maintenance de vos équipements.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">AllBeer Pro</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  L&apos;offre &quot;Professionnelle&quot; AllBeer a été
                  ellaborée et évolue pour satisfaire les exploitants du monde
                  CHR et de la revente. Elle se veut différente, et non
                  conventionnelle, de par la nature des produits proposés, et de
                  notre approche du commerce qui se veut équitable... pour
                  durer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="evenements" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl grid items-center md:grid-cols-2 gap-8 lg:gap-16">
            <div className="space-y-4">
              <Badge>Événements</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl">
                Sublimez votre événement avec AllBeer
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Que vous organisiez une fonction d&apos;entreprise, un mariage
                ou une manifestation communautaire, nos services de location
                d&apos;équipement brassicole peuvent vous aider à rendre votre
                événement vraiment mémorable. Notre équipe d&apos;experts
                travaillera avec vous pour assurer la sélection et la
                configuration parfaites de la bière pour vos invités.
              </p>
            </div>
            <EventSlider>
              <EventSliderItem />
              <EventSliderItem />
              <EventSliderItem />
              <EventSliderItem />
            </EventSlider>
          </div>
        </section>

        <section
          id="equipe"
          className="bg-gray-100 w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container flex flex-col max-w-6xl gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <Badge>L&apos;équipe</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl">
                Vos conseillers commerciaux
              </h2>
            </div>

            <TeamList>
              <TeamListItem name="Corentin" desc="Conseiller commercial" />
              <TeamListItem name="Romain" desc="Vendeur" />
              <TeamListItem name="Jason" />
              <TeamListItem name="Nicolas" />
              <TeamListItem name="Carlyne" />
              <TeamListItem name="Julien" />
            </TeamList>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid md:grid-cols-2 max-w-6xl gap-16 px-4 md:px-6">
            <div className="space-y-4">
              <Badge>Contact</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-5xl">
                Contactez-nous
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-base/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Notre équipe dévouée de passionnés de la bière et d&apos;experts
                de l&apos;industrie est là pour vous aider avec toutes vos
                questions ou demandes. N&apos;hésitez pas à nous contacter
                directement, nous serons ravis de vous aider.
              </p>
            </div>
            <ContactList>
              <ContactListItem type="tel" />
              <ContactListItem type="mailto" />
            </ContactList>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AppPage;
