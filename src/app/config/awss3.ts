import {
  CreateBucketCommand,
  GetObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_ACCESS_KEY,
  },
});

const upLoadFile = async (file: File) => {
  const params = {
    Bucket: "sampleBucket",
    key: file.name,
    body: file,
  };

  try {
    const data = await s3.send(new CreateBucketCommand(params));
    console.log("Success", data);
    return data;
  } catch (e) {
    console.error("There was an error uploading your file: ", e);
    throw e;
  }
};

const getFile = async () => {
  const params = {
    Bucket: "sample-bucket-012",
    Key: "sampleImage.webp",
  };

  try {
    const response = await s3.send(new GetObjectCommand(params));
    if (response.Body) {
      const blob = await new Response(response.Body).blob();
      return URL.createObjectURL(blob);
    }
    throw Error("image parsing Failed");
  } catch (e) {
    console.error("There was an error uploading your file: ", e);
    throw e;
  }
};
export { s3, upLoadFile, getFile };
