export type FlashCard = {
  title?: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
};

export type NavLink = {
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export type Breadcrumb = {
  title: string;
  link: string;
};
