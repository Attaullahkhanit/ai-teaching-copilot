// import Cookies from "universal-cookie";
// import { toast} from 'react-toastify';


export const getFileSrcFromPublicimg= (name) => {
    return `${process.env.PUBLIC_URL}/assets/images/${name}`;
}; 


//const API_KEY = "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";
//const API_KEY = "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";
//const API_KEY = "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";
const API_KEY = "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";
const systemMessage = {
  "role": "system",
  "content": ""
};

export const ChatgptApiFunc = async (prompt) => {
  const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
      systemMessage,  // The system message DEFINES the logic of our chatGPT
      { role: "user", content: prompt }
    ]
  };

  try {
    //https://vm-cgpt-node-production.up.railway.app/call-chatgpt-api
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    });

    const data = await response.json();
    return data; // Return the data from the Promise chain
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

      
export const element = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};
export const listpricingCard2Data = [
  {
    title: "For Teachers",
    price: "£6.99 / £60 Annual",
    trialHints: [
      "Full Access",
      "Email Support",
      "Premium Tools",
      "Access Latest Features",
      "Pro Storage",
      "Cancel Any Time",
      "500 Credits",
    ],
    btntext: "GO PRO",
  },
];