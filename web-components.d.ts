declare namespace JSX {
  interface IntrinsicElements {
    'contact-us': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      name?: string;
      'prefill-subject'?: string;
      'prefill-message'?: string;
    }, HTMLElement>;
    'portfolio-wd': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      url?: string;
    }, HTMLElement>;
  }
}
