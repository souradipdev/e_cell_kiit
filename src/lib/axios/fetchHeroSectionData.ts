import axios from "axios";

async function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("")
    }, 500);
  })
}

export async function fetchHeroSectionData() {
  await wait();
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
