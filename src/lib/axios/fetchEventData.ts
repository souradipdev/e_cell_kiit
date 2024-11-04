import axios from "axios";

async function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("")
    }, 500);
  })
}

export async function fetchEventData() {
  // await wait();
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
