const settings = {
  "name": "salon-bureau",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
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
          "url": "https://espace-bois-59.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
