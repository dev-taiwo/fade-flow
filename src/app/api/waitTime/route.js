import { calculateWaitTime } from "@/lib/db";

export async function GET() {
  try {
    const waitTime = await calculateWaitTime();
    return Response.json({ waitTime, success: true });
  } catch (error) {
    console.error("Error calculating wait time:", error);
    return Response.json(
      { waitTime: 0, success: false, error: error.message },
      { status: 500 }
    );
  }
}
