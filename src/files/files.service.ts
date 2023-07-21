import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.services';
import { S3 } from 'aws-sdk';
import { CreateFilesDto } from './dto/files.dto';

@Injectable()
export class FilesService {
    constructor(
        private readonly prisma: PrismaService,
    ){}

    getS3Instance() {
        return new S3({
          accessKeyId: process.env.S3_ACCESS_KEY_ID,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
          region: 'ap-south-1',
        });
      }

      async getS3SignedUrl(key: string) {
        const s3 = this.getS3Instance();
        const params = {
          Bucket: process.env.S3_BUCKET_NAME,
          Key: key,
          Expires: 3600,
        };
        const signedUrl = s3.getSignedUrl('getObject', params);
        return signedUrl;
      }

      async uploadToS3(file: any, bucketName: string, fileName: string) {
        const s3 = this.getS3Instance();
        const uploadParams = {
          Bucket: bucketName, 
          Key: String(Date.now()), 
          Body: file, 
        };
        return new Promise((resolve, reject) => {
          s3.upload(uploadParams, function (err, data) {
            if (err) {
              reject(err);
            }
            if (data) {
              console.log('Upload Success', data);
              resolve(data);
            }
          });
        });
      }

      async uploadFiles(file: CreateFilesDto) {
        // console.log(file);
        // const { originalname } = file;
        // const bucket = process.env.S3_BUCKET_NAME;
        // const fileObject = await this.uploadToS3(file.buffer, bucket, originalname);
        // console.log(fileObject['ETag']);
        // const saveFile = await this.prisma.files.create({
        //   data: {
        //     key: fileObject['key'],
        //   },
        // });
        // const url = await this.getS3SignedUrl(fileObject['key']);
        // return { id: saveFile.id, url: url };
        return await this.prisma.files.create({
          data:{
            key:file.key
          }
        })
      }
    }

