import { WebComponentConfig } from './webComponentLoader';

export const webComponentConfigs: Record<string, WebComponentConfig> = {
  home: {
    name: 'Home Component',
    scriptUrl: '/components/home-component.js',
    tagName: 'home-component'
  },
  portfolio: {
    name: 'Portfolio Component',
    scriptUrl: '/components/portfolio-component.js',
    tagName: 'portfolio-component'
  },
  userprofile: {
    name: 'User Profile Component',
    scriptUrl: '/components/userprofile-component.js',
    tagName: 'userprofile-component'
  },
  contact: {
    name: 'Contact Component',
    scriptUrl: '/components/contact-component.js',
    tagName: 'contact-component'
  }
};