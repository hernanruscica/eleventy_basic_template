
import fs from "fs";

export default async function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets");    
    eleventyConfig.addWatchTarget("./src/assets");

    eleventyConfig.addShortcode("svg", (file) => {
        const _path = `./src/assets/icons/${file}`;
        const data = fs.readFileSync(_path, (err, contents) => {
            if (err) {
                return err;
            }
            return contents;
        });
        return data.toString("utf8");
    });

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
