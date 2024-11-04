import axios from "axios";

export async function fetchHeroSectionData() {
  try {
    const response = await axios.get(`${process.env.HOST_NAME}/api/hero-section`);

    return response.data.section[0];
  } catch (error) {
    console.error("Error fetching hero section data:", error);

    return {
      headLine: "Unable to load data",
      innovation: "We are experiencing issues fetching the latest information.",
      ctaButton: "Try Again Later",
    };
  }
}
