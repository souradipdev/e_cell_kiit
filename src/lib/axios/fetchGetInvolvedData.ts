import axios from "axios";

export async function fetchGetInvolvedData() {
  try {
    const response = await axios.get(`${process.env.HOST_NAME}/api/get-involved`);

    return response.data.getInvolved[0];
  } catch (error) {
    console.error("Error fetching hero section data:", error);

    return {
      error: true,
      message: "Unable to load the Get Involved Section. Please try again later.",
    };
  }
}
