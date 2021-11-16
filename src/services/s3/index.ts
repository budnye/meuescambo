import moment from 'moment';
import { RNS3 } from 'react-native-aws3';
import { keys } from '../../../env.json';

export const getImageUrl = async (file: any) => {
  const config = {
    keyPrefix: 'uploads/',
    bucket: 'escambo-images',
    region: 'us-east-1',
    accessKey: keys.accessKey,
    secretKey: keys.secretKey,
    successActionStatus: 201,
  };

  const response: any = await RNS3.put(file, config);

  if (response.status !== 201) {
    throw new Error('Failed to upload image to S3');
  }
  console.log('>>> END getImageUrl', response.body.postResponse.location);
  return response.body.postResponse.location;
};

export const packFile = (uri: string, info: string) => {
  // console.log('packFile', uri, info);
  return {
    uri: uri,
    name: `${info}_${moment().unix()}`,
    type: 'image/png',
  };
};
