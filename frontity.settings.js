const settings = {
  "name": "salon-bureau",
  "state": {
    "frontity": {
      "url": "https://salon-bureau-38wi.vercel.app",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "theme-salon",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://api.salon-bureau.fr"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
