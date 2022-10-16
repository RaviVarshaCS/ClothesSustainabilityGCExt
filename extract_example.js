import fetch from "node-fetch";
import cheerio from "cheerio";

// function to get the raw data
const getRawData = (URL) => {
   return fetch(URL)
      .then((response) => response.text())
      .then((data) => {
         return data;
      });
};

// URL for data
const URL = "https://www.amazon.com/Nike-Sportswear-T-Shirt-Shirt-Classic/dp/B07FKF9F13/ref=asc_df_B07FKF9F13/?tag=hyprod-20&linkCode=df0&hvadid=346802058703&hvpos=&hvnetw=g&hvrand=2780772733570724711&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028280&hvtargid=pla-657460318987&psc=1&tag=&ref=&adgrpid=72569780769&hvpone=&hvptwo=&hvadid=346802058703&hvpos=&hvnetw=g&hvrand=2780772733570724711&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028280&hvtargid=pla-657460318987";

// start of the program
const getMaterialsData = async () => {
   const tShirtSiteRawData = await getRawData(URL);

   // parsing the data
   const parsedtShirtSiteData = cheerio.load(tShirtSiteRawData);

   // extracting the table data
   const materialsList = parsedtShirtSiteData("span.a-list-item".text())

   console.log("Materials: ");
   console.log(materialsList);
};

// invoking the main function
getMaterialsData();
