import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_ACCESS_KEY,
  },
});

export { s3 };
