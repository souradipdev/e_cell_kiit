import path from 'path';
import fs from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "src/data", "aboutUs.json");
  try{
    const dataResponse = await fs.promises.readFile(filePath, "utf-8");
    return Response.json(JSON.parse(dataResponse), {status: 200});
  } catch (error) {
    console.log(error);

    return Response.json({error}, {status: 500});
  }
}