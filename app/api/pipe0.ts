import axios from "axios"

const baseUrl = "https://api.pipe0.com/v1/";

export const createPipe = async (companyName: string) => {
    const result = await axios.post(`${baseUrl}/pipes/run/sync`, {
        "pipes": [
          { 
            "pipe_id": "company:identity@1",
            "config": {
              "input_fields": {
                "company_name": {
                  "alias": ""
                }
              }
            }
          }
        ],
        "input": [
          {
            "id": 1,
            "name": "Tom Schmidt",
            "company_name": "Pipe0"
          }
        ]
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.PIPE0_API_KEY}`,
            'Content-Type': 'application/json'
        }
    });
    
    console.log("result: ", result);
}