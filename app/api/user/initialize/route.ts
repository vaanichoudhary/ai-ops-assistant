import { NextResponse, NextRequest } from "next/server";
import {
  checkSubscription,
  ensureUserExists,
  getUserSettings,
} from "@lib/account";
import { auth } from "@clerk/nextjs/server";
import { db } from "@lib/db";
import { eq, desc } from "drizzle-orm";
import { chats } from "@lib/db/schema";
import { logger } from "@lib/logger";
import { clerkClient } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  let userId: string | null = null;
  try {
    const auth_result = await auth();
    userId = auth_result.userId;
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await ensureUserExists(userId);
    const _chats = await db
      .select()
      .from(chats)
      .where(eq(chats.userId, userId))
      .orderBy(desc(chats.createdAt));
    const hasValidSubscription = await checkSubscription(userId);
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    const userSettings = await getUserSettings(userId);
    const isAdmin = user.privateMetadata?.role === "admin";
    const safeChats = _chats.map((d) => ({
      ...d,
      createdAt: d.createdAt.toUTCString(),
    }));

    return NextResponse.json({
      chats: safeChats,
      isSubscribed: hasValidSubscription,
      isAdmin,
      messageCount: userSettings?.messageCount || 0,
      freeChats: userSettings?.freeChats || 0,
      freeMessages: userSettings?.freeMessages || 0,
    });
  } catch (error) {
    logger.error("Error initializing user:", {
      error: error,
      userId,
    });
    return NextResponse.json(
      { error: "Failed to initialize user" },
      { status: 500 }
    );
  }
}
