"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const GetWorkflowsForUser = async () => {
  const { userId } = await auth();
  console.log(userId);
  if (!userId) {
    throw new Error("unauthenticated");
  }

  return db.workflow.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};
