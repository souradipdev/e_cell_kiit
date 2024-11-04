import axios from "axios";

export async function fetchEventData() {
  try {
    const response = await axios.get(`${process.env.HOST_NAME}/api/events`);

    return response.data.events;
  } catch (error) {
    console.error("Error fetching hero section data:", error);

    return {
      error: true,
      message: "Unable to load the Event Section. Please try again later.",
    };
  }
}
