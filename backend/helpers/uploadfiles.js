const AWS = require('aws-sdk');

const { AWS_KEY_ID, AWS_SECRET, BUCKET_NAME } = process.env;

const s3 = new AWS.S3({
  accessKeyId: AWS_KEY_ID,
  secretAccessKey: AWS_SECRET,
});

const uploadFile = (file, id) => {
  // Configure s3 upload
  const params = {
    Bucket: BUCKET_NAME,
    Key: `${id}-${file.name}`, // File name you want to save as in S3
    Body: file.data,
    ACL: 'public-read',
  };
  // Upload image to s3
  return s3.upload(params).promise();
};

module.exports = { uploadFile };
