import StaggeredMenu from "./StaggeredMenu";

export default function Header() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home section", link: "#hero" },
    { label: "About", ariaLabel: "Go to about section", link: "#about" },
    { label: "Skills", ariaLabel: "Go to skills section", link: "#skills" },
    { label: "Experience", ariaLabel: "Go to experience section", link: "#timeline" },
    { label: "Projects", ariaLabel: "Go to projects section", link: "#projects" },
    { label: "Contact", ariaLabel: "Go to contact section", link: "#contact" }
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/joaogalimberti" },
    { label: "LinkedIn", link: "https://linkedin.com/in/joaogalimberti" }
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen={true}
      colors={["#B19EEF", "#5227FF"]}
      accentColor="#5227FF"
      isFixed={true}
    />
  );
}
