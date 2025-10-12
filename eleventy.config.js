
export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");    
    eleventyConfig.addWatchTarget("./src/assets");

    eleventyConfig.addFilter("cacheBust", (url) => {
        const [path, params] = url.split("?");
        const newParams = new URLSearchParams(params);
        newParams.set("v", Date.now());
        return `${path}?${newParams.toString()}`;
    });

    return {
        dir: {
          input: "src",
          output: "public"
        }
      };
  }
