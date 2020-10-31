const temp = 0;

export const uses = [
  {
    name: 'every day carry',
    description:
      'These are the things that I have with me if I am going outside. Obviously not going out that often these days due to the COVID-19 pandemic.',
    sort: true,
    itemList: [
      {
        name: 'Breadband Wallet',
        attributeList: [
          {
            name: 'Check out other wallets that I like',
            url: 'https://youtu.be/LNc06yF3IAQ',
          },
        ],
      },
      {
        name: 'Hedley & Bennett Wake Up & Fight Mask',
        url: 'https://www.hedleyandbennett.com/products/wake-up-and-fight-mask',
        attributeList: [
          {
            name: "Something for this new normal that we're living in",
          },
          {
            name: 'Check out my video review',
            url: 'https://youtu.be/Yc53Yg2xY6Y',
          },
        ],
      },
      { name: 'Jabra Elite 75t' },
      {
        name: 'Mission Workshop The Rummy Messenger Bag',
        attributeList: [
          {
            name: "The most expensive messenger bag I have bought but it's totally worth it",
          },
          {
            name: "Extremely durable and it's weather proof",
          },
        ],
      },
      {
        name: 'Samsung Galaxy S10+',
        attributeList: [
          {
            name: 'dbrand Kind of Purple skin',
            url: 'https://dbrand.com/shop/samsung-galaxy-s10-plus-skins',
          },
        ],
      },
      {
        name: 'Samsung Galaxy Watch Active2 40mm LTE',
        attributeList: [
          {
            name:
              "I don't actually use the LTE, got it over the bluetooth version because of the stainless steel casing",
          },
        ],
      },
      {
        name: 'iPad Pro 11-inch (2nd generation)',
        attributeList: [
          { name: 'Apple Pencil 2' },
          {
            name: 'Zugu Case The Alpha Case',
            url: 'https://www.zugucase.com/the-alpha-case-2020-ipad-pro-11-2nd-gen-new-model/',
          },
          { name: 'I use this primarily for note taking and visualizing programming problems' },
        ],
      },
      {
        name: 'Zojirushi Stainless Mug',
        url: 'https://www.amazon.com/gp/product/B00HYOGUM2?psc=1',
        attributeList: [
          { name: "The best water bottle I've used. Keeps cold water cold and hot water hot." },
        ],
      },
      { name: 'Tile Pro' },
    ],
  },
  {
    name: 'hardware',
    description:
      'Since I spend a lot of time creating content, I have invested in quite a bit of gear to help streamline my workflow.',
    categoryList: [
      {
        name: 'setup',
        list: [
          {
            name: 'MacBook Pro 16-inch (Late 2019)',
            attributeList: [
              { name: '2.4GHz 8-core Intel Core i9' },
              { name: '32GB 2667MHz DDR4' },
              { name: 'AMD Radeon Pro 5500M with 8GB GDDR6 memory' },
              { name: '2TB SSD' },
              {
                name: 'dbrand Black Camo Skin',
                url: 'https://dbrand.com/shop/apple-macbook-pro-16-skins-2019',
              },
            ],
          },
          { name: 'Dell U2415 24-inch Monitor' },
          {
            name: 'BenQ ScreenBar Plus',
            url: 'https://www.benq.com/en-us/lamps/computer-desklamp/screenbar-plus.html',
          },
          { name: 'Rain Design iLevel2' },
          { name: 'AmazonBasics Computer Speakers' },
          {
            name: 'Keychron K2 (Version 1)',
            url: 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard',
            attributeList: [
              { name: 'Gateron Brown Switches' },
              { name: 'RGB Backlight' },
              { name: 'Aluminum Frame' },
              {
                name: 'Drop + Matt3o MT3 /dev/tty Keycaps',
                url: 'https://drop.com/buy/drop-matt3o-mt3-dev-tty-keycap-set',
              },
            ],
          },
          { name: 'Logitech MX Anywhere 3' },
          { name: 'World Map Mousepad' },
          { name: 'Tripp Lite 10 Outlet Surge Protector' },
          { name: 'Anker 40W 5-port USB Wall Charger' },
          { name: 'SitSmart Posture Plus Seat' },
          { name: 'Ikea BEKANT desk' },
        ],
      },
      {
        name: 'storage',
        sort: true,
        list: [
          { name: 'Samsung T5 SSD' },
          { name: 'Sandisk Extreme PRO SD Card' },
          { name: 'Sandisk Extreme micro SD Card' },
          { name: 'Western Digital My Passport Ultra' },
        ],
      },
      {
        name: 'camera',
        sort: true,
        list: [{ name: 'Canon AE-1 Program' }, { name: 'Panasonic Lumix DC-G9' }],
      },
      {
        name: 'lenses',
        sort: true,
        list: [
          { name: 'Canon 50mm f/1.4 FD' },
          { name: 'Helios 44-2 58mm f/2.0' },
          { name: 'Olympus 12-40mm f/2.8 PRO' },
          { name: 'Panasonic 7-14mm f/4.0' },
          { name: 'Panasonic 25mm f/1.7' },
          { name: 'Sigma 18-35mm f/1.8 for Canon EF' },
        ],
      },
      {
        name: 'audio',
        sort: true,
        list: [
          { name: 'Rode VideoMic NTG' },
          { name: 'Rode VideoMicro' },
          { name: 'Sony MDR-7506' },
          { name: 'Tascam DR-10L' },
          { name: 'Zoom H1' },
        ],
      },
      {
        name: 'camera accessories',
        sort: true,
        list: [
          { name: 'Giottos Rocket Air Blaster' },
          { name: 'Manfrotto Element Traveller Tripod' },
          { name: 'Manfrotto XPRO Fluid Head' },
          { name: 'Parrot Teleprompter 2' },
          { name: 'Peak Design Slide Lite' },
          { name: 'Pelican SD Memory Card Case' },
          {
            name: 'Viltrox EF-M2 II',
            attributeList: [{ name: 'Use this to adapt Canon EF lenses to MFT' }],
          },
          { name: 'Aputure MC RGBWW LED Light' },
        ],
      },
    ],
  },
  {
    name: 'software',
    description:
      "You can't really have hardware without software. Here's a list of programs that I have installed on my devices.",
    categoryList: [
      {
        name: 'common',
        sort: true,
        list: [
          { name: 'Affinity Photo' },
          { name: 'Davinci Resolve' },
          { name: 'Dropbox' },
          { name: 'Figma' },
          { name: 'Google Chrome' },
          { name: 'Malwarebytes' },
          { name: 'Microsoft Office' },
          { name: 'Notion' },
          { name: 'Spotify' },
          { name: 'Visual Studio Code' },
          { name: 'WhatsApp' },
          { name: 'Logi Options' },
          { name: 'Tweeten' },
          { name: 'Zoom' },
        ],
      },
      {
        name: 'mac',
        sort: true,
        list: [
          { name: '1Password 7' },
          { name: 'Alfred' },
          { name: 'Dozer' },
          { name: 'iTerm2' },
          { name: 'Macs Fan Control' },
          { name: 'MacTeX' },
          { name: 'Magnet' },
          { name: 'iStat Menus' },
          { name: 'AppCleaner' },
        ],
      },
      {
        name: 'windows',
        sort: true,
        list: [
          { name: 'FreeFileSync' },
          { name: 'MiKTeX' },
          { name: 'PhotoScape' },
          { name: 'Windows Terminal' },
        ],
      },
      {
        name: 'android',
        list: [
          {
            name: "Check out my What's on my Android phone video",
            url: 'https://youtu.be/iLKrwYxdtb0',
          },
        ],
      },
      {
        name: 'chrome extensions',
        sort: true,
        list: [
          { name: '1Password X Beta' },
          { name: 'axe - Web Accessibility Testing' },
          { name: 'ColorPick Eyedropper' },
          { name: 'GoFullPage - Full Page Screen Capture' },
          { name: 'Grammarly' },
          { name: 'Honey' },
          { name: 'HTTPS Everywhere' },
          { name: 'META SEO inspector' },
          { name: 'Privacy Badger' },
          { name: 'React Developer Tools' },
          { name: 'uBlock Origin' },
          { name: 'vidIQ Vision for YouTube' },
          { name: 'Wappalyzer' },
          { name: 'WAVE Evaluation Tool' },
          { name: 'WhatFont' },
          { name: 'Decentraleyes' },
          { name: 'Disconnect' },
          { name: 'Rakuten' },
          { name: 'Save to Pocket' },
          { name: 'The Camelizer' },
          { name: 'The Great Suspender' },
        ],
      },
      {
        name: 'visual studio code extensions',
        sort: true,
        list: [
          { name: 'Better Comments' },
          { name: 'Code Spell Checker' },
          { name: 'GitLens' },
          { name: 'LaTeX Workshop' },
          { name: 'Live Server' },
          { name: 'Material Icon Theme' },
          { name: 'Peacock' },
          { name: 'Prettier' },
          { name: 'Rainglow' },
          { name: 'Todo Tree' },
        ],
      },
    ],
  },
];
