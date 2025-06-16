interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/",
    alt: "/",
    title: "ExamGenie",
    url: "/",
  },
  tagline = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  menuItems = [
    {
      title: "Lorem, ipsum.",
      links: [
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
      ],
    },
    {
      title: "Lorem, ipsum.",
      links: [
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
      ],
    },
    {
      title: "Lorem, ipsum.",
      links: [
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
      ],
    },
    {
      title: "Lorem, ipsum.",
      links: [
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
        { text: "Lorem, ipsum.", url: "#" },
      ],
    },
  ],
  copyright = "Lorem, ipsum.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="pt-50 py-16">
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="/">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-3xl font-bold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
