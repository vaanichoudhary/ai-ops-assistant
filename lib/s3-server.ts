import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import { logger } from "./logger";

const BUCKET_NAME = "pdfs";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local"
    );
  }
  return createClient(url, key);
}

export async function downloadFromS3(fileKey: string) {
  try {
    logger.debug("Downloading file from Supabase", fileKey);

    const { data, error } = await getSupabaseAdmin().storage
      .from(BUCKET_NAME)
      .download(fileKey);

    if (error) {
      logger.error("Supabase download error:", { message: error.message, fileKey });
      throw new Error(`Download failed: ${error.message}`);
    }

    if (!data) throw new Error("No data returned from download");

    const fileName = `/tmp/pdf-${Date.now()}.pdf`;
    const buffer = await data.arrayBuffer();
    fs.writeFileSync(fileName, new Uint8Array(buffer));

    logger.debug("Successfully downloaded file from Supabase", fileKey);
    return fileName;
  } catch (err) {
    logger.error("Error downloading from Supabase", {
      error: err instanceof Error ? err.message : String(err),
    });
    return null;
  }
}