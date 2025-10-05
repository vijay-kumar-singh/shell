declare namespace JSX {
  interface IntrinsicElements {
    'contact-us': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      name?: string;
    }, HTMLElement>;
    'portfolio-wd': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      url?: string;
    }, HTMLElement>;
  }
}
