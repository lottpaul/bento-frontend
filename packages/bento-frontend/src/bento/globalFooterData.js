import env from '../utils/env';
// footerLogoImage ideal image size 310x80 px

export default {
  // footerLogoImage: 'https://raw.githubusercontent.com/cbiit/datacommons-assets/main/bento/images/icons/png/footerlogo.png',
  // footerLogoAltText: 'Footer Logo',
  footerLogoText: 'UCaMP and UCaTS Data Commons',
  footerLogoSubText: 'at UCDavis PDX Bioinformatics Core',
  footerLogoHyperlink: 'https://ucdavis.gov/',
  version: env.REACT_APP_FE_VERSION,
  BEversion: env.REACT_APP_BE_VERSION,
  // A maximum of 3 Subsections (link_sections) are allowed
  // A maximum of 4 Subsection Links ('items' under link_sections) are allowed
  // A maximum of 4 Anchor Links (global_footer_links) are allowed
  // Ideal size for icon is 20x20 px
  link_sections: [
    {
      title: 'Contact Information',
      items: [
        {
          text: 'UCD PDX Bioinformatics Help Desk',
          link: 'plott@ucdavis.edu',
        },
      ],
    },

    {
      title: 'More Information',
      items: [
        {
          text: 'Bento Home',
          link: 'https://bento-tools.org/',
        },
        {
          text: 'UCDavis PDX Bioinformatics Documentation',
          link: 'https://cbiit.github.io/bento-docs/master/index.html',
        },
      ],
    },

    {
      title: 'System Info',
      systemInfoInLinkSection: true,
      items: [
        {
          text: 'Release Notes',
          link: 'https://github.com/CBIIT/bento-frontend/releases',
        },
        {
          text: `FE Version: 3.8.0.45'}`,
        },
        {
          text: 'BE Version: 4.7.0.144',
        },
        {
          text: 'System Info Page',
          link: '/sysinfo',
        },
      ],
    },

    {
      title: 'Policies',
      items: [
        {
          text: 'Disclaimer',
          link: 'https://www.cancer.gov/policies/disclaimer',
        },
        {
          text: 'Accessibility',
          link: 'https://www.cancer.gov/policies/accessibility',
        },
      ],
    },
  ],
  global_footer_links: [
    {
      text: 'UC Davis Genome Center',
      link: 'https://genomecenter.ucdavis.edu/',
    },
    {
      text: 'UC Davis Health Cancer Center',
      link: 'https://health.ucdavis.edu/cancer',
    },
    {
      text: 'University of Texas at Southwestern',
      link: 'https://www.cancer.gov',
    }
  ],
};
