import Exa from "exa-js";

const exa = new Exa(process.env.EXA_API_KEY);

export const findEmailsFromName = async (companyName: string): Promise<unknown> =>  {
  return await exa.searchAndContents(`Find emails for employees of ${companyName}`, {
    type: "auto",
    text: true,
  });
};
