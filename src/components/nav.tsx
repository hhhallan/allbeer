import { NavItem } from "./nav-item";

export const Nav = () => {
  return (
    <nav className="hidden space-x-4 md:flex">
      <NavItem label="Accueil" href="info" />
      <NavItem label="Espace Pro" href="espace-pro" />
      <NavItem label="Événements" href="evenements" />
      <NavItem label="Équipe" href="equipe" />
      <NavItem label="Contact" href="contact" />
    </nav>
  );
};
