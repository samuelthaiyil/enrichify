import Exa from "exa-js";

const exa = new Exa("");

export const findEmailsFromName = async (companyName: string): Promise<unknown> =>  {
  return await exa.searchAndContents(`employees at ${companyName} email contact information`, {
    type: "auto",
    text: true,
    category: "linkedin profile"
  });
};
