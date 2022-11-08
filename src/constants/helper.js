import {Dimensions} from 'react-native';
import imagePath from './imagePath';

export const {height: DEVICE_HEIGHT, width: DEVICE_WIDTH} =
  Dimensions.get('window');

export const partnersData = [
  {id: 51, image: imagePath.all},
  {id: 52, image: imagePath.partner1},
  {id: 53, image: imagePath.partner2},
  {id: 54, image: imagePath.partner3},
  {id: 55, image: imagePath.partner4},
  {id: 56, image: imagePath.partner5},
  {id: 57, image: imagePath.partner1},
  {id: 58, image: imagePath.partner2},
];

export const categoriesData = [
  {id: 61, image: imagePath.category1, bottomLabel: 'Fitness'},
  {id: 62, image: imagePath.category2, bottomLabel: 'Diet'},
  {id: 63, image: imagePath.category3, bottomLabel: 'Retail'},
  {id: 64, image: imagePath.category4, bottomLabel: 'Health'},
];

export const brandOffersData = [
  {id: 71, image: imagePath.carousel1},
  {id: 72, image: imagePath.carousel2},
];

export const CarouselData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export const brandCardData = [
  {
    title: 'MrFarhan',
    image: imagePath.carousel1,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '53 Deals left',
    brandLogo: imagePath.partner1,
  },
  {
    title: 'The Info Tech',
    image: imagePath.carousel2,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '77 Deals left',
    brandLogo: imagePath.partner2,
  },
];

export const ChallengesCardData = [
  {
    id: 81,
    title: 'MrFarhan',
    image: imagePath.carousel2,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '53 Deals left',
    brandLogo: imagePath.partner3,
  },
  {
    id: 82,
    title: 'The Info Tech',
    image: imagePath.carousel1,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '77 Deals left',
    brandLogo: imagePath.partner4,
  },
];

export const NewOfferData = [
  {
    id: 91,
    title: 'MrFarhan',
    image: imagePath.carousel1,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '53 Deals left',
    brandLogo: imagePath.partner5,
  },
  {
    id: 92,
    title: 'The Info Tech',
    image: imagePath.carousel2,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '77 Deals left',
    brandLogo: imagePath.partner1,
  },
];

export const BrandPageData = [
  {
    id: 11,
    image: imagePath.carousel1,
    partnerImage: imagePath.partner1,
    title: 'Fitness First',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    id: 12,
    image: imagePath.carousel2,
    partnerImage: imagePath.partner2,
    title: 'Hello World',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    id: 13,
    image: imagePath.carousel1,
    partnerImage: imagePath.partner3,
    title: 'The Info Tech',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    id: 14,
    image: imagePath.carousel1,
    partnerImage: imagePath.partner1,
    title: 'MrFarhan',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    id: 15,
    image: imagePath.carousel2,
    partnerImage: imagePath.partner2,
    title: 'Hello World',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    id: 16,
    image: imagePath.carousel1,
    partnerImage: imagePath.partner3,
    title: 'Fitness First',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
];

export const notificationData = [
  {
    id: 21,
    title: 'Congratulations! You have successfully earned a voucher from',
    tagLine: '“AED 50 off on Registration”',
    uniqueKey: 'Fitness First',
  },
  {
    id: 22,
    title: 'Congratulations! You have successfully burned a voucher of from',
    tagLine: '“Get 10% Off”',
    uniqueKey: 'Fitness First',
  },
];

export const lgCardData = [
  {
    id: 31,
    title: 'Fitnglam',
    date: 'Oct 01, 2022',
    review:
      'Excellent personal training. Trainers who really care and go above and beyond to help you achieve your goals.',
    image: imagePath.partner1,
    rating: 4.0,
  },
  {
    id: 32,
    title: 'The Info Tech',
    date: 'Nov 05, 2022',
    review:
      'Excellent personal training. Trainers who really care and go above and beyond to help you achieve your goals.',
    image: imagePath.partner2,
    rating: 3.0,
  },
];
export const coinsEarnedData = [
  {
    id: 41,
    title: 'Congratulations! You have earned 1000 points on Registration',
    time: '3:59 pm',
  },
  {
    id: 42,
    title: 'Congratulations! You have earned 500 points on Registration',
    time: '4:05 pm',
  },
];
