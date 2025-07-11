"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateAIInsights = async (industry) => {
  const prompt = `
          Analyze the current state of the ${industry} industry across India and provide insights in ONLY the following JSON format without any additional notes or explanations. All salary figures should be in Indian Rupees (INR).
          {
            "salaryRanges": [
              { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
            ],
            "growthRate": number,
            "demandLevel": "High" | "Medium" | "Low",
            "topSkills": ["skill1", "skill2"],
            "marketOutlook": "Positive" | "Neutral" | "Negative",
            "keyTrends": ["trend1", "trend2"],
            "recommendedSkills": ["skill1", "skill2"]
          }
          
          IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
          Include at least 5 common roles for salary ranges.
          Growth rate should be a percentage.
          Include at least 5 skills and trends.
        `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    // Clean the text: remove markdown code blocks if present
    const cleanedText = text.replace(/```json\n?|```\n?/g, "").trim();

    return JSON.parse(cleanedText);
  } catch (error) {
    // console.error("Error generating AI insights:", error);
    // Optionally, return a default/empty structure or re-throw the error
    throw new Error("Failed to generate AI insights.");
  }
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: {
      industryInsight: true,
    },
  });

  if (!user) throw new Error("User not found");

  // If no insights exist, generate them
  if (!user.industryInsight) {
    // console.log("No existing insights, generating new ones...");
    const insights = await generateAIInsights(user.industry);

    const industryInsight = await db.industryInsight.create({
      data: {
        industry: user.industry,
        ...insights,
        lastUpdated: new Date(), // Set lastUpdated when generating
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Next update in 7 days
      },
    });

    return industryInsight;
  }

  // Check if existing insights are older than 7 days and regenerate if needed
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  if (user.industryInsight.lastUpdated < sevenDaysAgo) {
    // console.log("Insights are outdated, regenerating...");
    const insights = await generateAIInsights(user.industry);

    const updatedInsight = await db.industryInsight.update({
      where: { id: user.industryInsight.id },
      data: {
        ...insights,
        lastUpdated: new Date(), // Update lastUpdated to now
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Set new next update date
      },
    });
    return updatedInsight;
  }

  // console.log("Returning existing insights.");
  return user.industryInsight;
}