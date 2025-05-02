import gql from 'graphql-tag';
// import Test from '../assets/header/CTDC_Logo.svg';

// The ideal image size of landingPageHero 1400x600px
// Tile1 Tile2 Tile3 images 293x349 px
// Tile4 image optimum size 600x 436 px
export const landingPageData = {
  callToActionTitle: 'Store, Explore, Analyze, Visualize UCD PDX Bioinformatics Core Data Sets',
  callToActionDescription: 'Model, Store and Share your Tissue, PDX, Organoid, and oPDX Data Sets.',
  callToActionButtonText: 'EXPLORE THE SITE',
  callToActionLink: '/explore',
  landingPageHero: {
    alt: 'Alt tag1',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/png/landing_Hero_Graphic.png',
  },
  landingPageStatsBar: [
    {
      statTitle: 'Programs',
      statAPI: 'numberOfPrograms',
    },
    {
      statTitle: 'Studies',
      statAPI: 'numberOfStudies',
    },
    {
      statTitle: 'Cases',
      statAPI: 'numberOfSubjects',
    },
    {
      statTitle: 'Samples',
      statAPI: 'numberOfSamples',
    },
    {
      statTitle: 'Files',
      statAPI: 'numberOfFiles',
    },
  ],
  tile1: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/png/landing_tileAbout.png',
    titleText: 'UCDavis PDX Data Commons',
    descriptionText: 'Effective data management is key to scientific discovery. The UCD PDX Bioinformatics Core Data Commons was designed to house data generated from our PDX models and functions as central data resource for UC PDX Researchers to store, analyze, visualize, and query data they have generated from important cancer models.',
    callToActionText: 'Read More',
    callToActionLink: '/bento', // This links to the "About" static page.
  },
  tile2: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/png/landing_tileProgam.png',
    titleText: 'Programs',
    descriptionText: 'Access data from the UCDavis Minority-Derived PDX Developement and Trial Center (UCAMP) and University of California and University of Texas Southwestern (UCaTS) projects, on this data sharing platform',
    callToActionText: 'View',
    callToActionLink: '/programs', // This links to the Programs Listing Page.
  },
  tile3: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/png/landing_tileAnalytics.png',
    titleText: 'Resources',
    descriptionText: 'Use the UCD PDX Data Commons APIs and GraphQL queries to accelerate your research. Learn how you can link to them directly from your programs, scripts, and analysis frameworks.',
    callToActionText: 'Read More',
    callToActionLink: '/resources', // Link to the "Resources" Static Page
  },
  tile4: {
    alt: '',
    img: 'https://raw.githubusercontent.com/CBIIT/datacommons-assets/main/bento/images/icons/png/landing_tileCases.png',
    titleText: 'Cases',
    descriptionText: 'Analyze PDX Cancer Models generated at University of California and University of Texas Southwestern (UCaTS)',
    callToActionText: 'Explore',
    callToActionLink: '/explore', // This links to the cases dashboard.
  },
};

// --------------- GraphQL query - Retrieve Landing page data --------------
export const GET_LANDING_PAGE_DATA_QUERY = gql`{
  numberOfPrograms
  numberOfStudies
  numberOfSubjects
  numberOfSamples
  numberOfFiles
  }
  `;
