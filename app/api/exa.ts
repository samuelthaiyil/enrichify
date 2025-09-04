import Exa, { SearchResponse } from "exa-js";

const exa = new Exa();

export const findEmailFromName = async (name: string): Promise<unknown> =>  {
  return await exa.searchAndContents(`Find the work email of ${name}`, {
    type: "auto",
    text: true,
  });
};
