import { createClient } from "@supabase/supabase-js";
import { logger } from "./logger";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local"
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const BUCKET_NAME = "pdfs";

export async function uploadToS3(file: File) {
  const fileKey =
    "uploads/" + Date.now().toString() + "-" + file.name.replace(/\s/g, "-");

  try {
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileKey, file, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      logger.error("Supabase upload error:", {
        message: error.message,
        fileKey,
      });
      throw new Error(`Upload failed: ${error.message}`);
    }

    if (!data) {
      throw new Error("No data returned from upload");
    }

    logger.debug("Successfully uploaded file to Supabase", fileKey);
    return Promise.resolve({ file_key: fileKey, file_name: file.name });
  } catch (error) {
    logger.error("Error uploading file to Supabase:", {
      fileKey,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

export async function removeFileFromS3(fileKey: string) {
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([fileKey]);

    if (error) {
      throw new Error(`Remove failed: ${error.message}`);
    }

    logger.debug("Successfully removed file from Supabase", fileKey);
  } catch (error) {
    logger.error("Error removing file from Supabase:", {
      fileKey,
      error: error instanceof Error ? error.message : String(error),
    });
    throw error;
  }
}

export function getS3Url(file_key: string) {
  if (!supabaseUrl) {
    throw new Error("Supabase URL is not configured");
  }
  const url = `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${file_key}`;
  return url;
}
