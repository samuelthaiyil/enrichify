import axios from "axios";
import { EmailEnrichmentResponse } from "../types/pipe0";

const baseUrl = "https://sandbox-proxy.pipe0.com/v1/";

export const createPipe = async (
  contactName: string,
  companyUrl: string,
): Promise<string | null> => {
  try {
    const { data } = await axios.post(
      `${baseUrl}pipes/run/sync`,
      {
        pipes: [
          {
            pipe_id: "people:workemail:waterfall@1",
            config: {
              environment: "sandbox",
              input_fields: {
                company_name: {
                  alias: "",
                },
              },
            },
          },
        ],
        input: [
          {
            id: 1,
            name: contactName,
            company_website_url: companyUrl,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer `,
          "Content-Type": "application/json",
        },
      }
    ) as EmailEnrichmentResponse;

    return data.records["1"].fields.work_email.value || null;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(String(error));
    }
  }
};
