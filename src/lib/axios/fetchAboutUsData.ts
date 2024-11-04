import axios from "axios";

export async function fetchHeroSectionData() {
  try {
    const response = await axios.get(`${process.env.HOST_NAME}/api/about-us`);

    return response.data.aboutUs[0];
  } catch (error) {
    console.error("Error fetching hero section data:", error);

    return {
      error: true,
      message: "Unable to load the About Us section. Please try again later.",
    };
  }
}
