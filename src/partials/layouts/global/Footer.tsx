const linkTitles = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];
const iconLinks = ["facebook", "twitter", "pinterest", "instagram"];

export default function Footer() {
  return (
    <footer className="py-16 bg-veryDarkViolet text-white">
      <div className="container lg:flex justify-between space-y-16 lg:space-y-0">
        <h1 className="text-4xl text-center">Shortly</h1>
        <div className="mx-auto sm:text-left text-center space-y-[2.3rem] sm:space-y-0 sm:flex w-max justify-between lg:w-[27.4rem] xl:w-[31rem] sm:w-full lg:mx-0">
          {linkTitles.map(({ title, links }, i) => (
            <div className="space-y-3.5" key={i}>
              <h4>{title}</h4>
              <ul className="space-y-1.5">
                {links.map((link, j) => (
                  <li className="text-base text-grayishViolet" key={j}>
                    <a href="#!" className="hover:text-cyan block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="flex space-x-4 w-max lg:mx-0 mx-auto">
          {iconLinks.map((icon, i) => (
            <a className="block h-max hover:scale-150" href="#!" key={i}>
              <img
                src={`/images/icon-${icon}.svg`}
                title={icon[0].toUpperCase() + icon.slice(1)}
                width={22}
              />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
}
