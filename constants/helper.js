import {Dimensions} from 'react-native';
import imagePath from './imagePath';

export const {height: DEVICE_HEIGHT, width: DEVICE_WIDTH} =
  Dimensions.get('window');

export const partnersData = [
  {image: imagePath.all},
  {image: imagePath.partner1},
  {image: imagePath.partner2},
  {image: imagePath.partner3},
  {image: imagePath.partner4},
  {image: imagePath.partner5},
  {image: imagePath.partner1},
  {image: imagePath.partner2},
];

export const categoriesData = [
  {image: imagePath.category1, bottomLabel: 'Fitness'},
  {image: imagePath.category2, bottomLabel: 'Diet'},
  {image: imagePath.category3, bottomLabel: 'Retail'},
  {image: imagePath.category4, bottomLabel: 'Health'},
];

export const brandOffersData = [
  {image: imagePath.carousel1},
  {image: imagePath.carousel2},
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
    title: 'MrFarhan',
    image: imagePath.carousel2,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '53 Deals left',
    brandLogo: imagePath.partner3,
  },
  {
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
    title: 'MrFarhan',
    image: imagePath.carousel1,
    offerTitle: 'Get 30% off',
    offerExpiry: '* Expiry date 23 sept 2022',
    coins: '3500',
    otherDealsDetail: '53 Deals left',
    brandLogo: imagePath.partner5,
  },
  {
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
    image: imagePath.carousel1,
    partnerImage: imagePath.partner1,
    title: 'Fitness First',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    image: imagePath.carousel2,
    partnerImage: imagePath.partner2,
    title: 'Hello World',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    image: imagePath.carousel1,
    partnerImage: imagePath.partner3,
    title: 'The Info Tech',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    image: imagePath.carousel1,
    partnerImage: imagePath.partner1,
    title: 'MrFarhan',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    image: imagePath.carousel2,
    partnerImage: imagePath.partner2,
    title: 'Hello World',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
  {
    image: imagePath.carousel1,
    partnerImage: imagePath.partner3,
    title: 'Fitness First',
    tagLine: 'Get 15% off on Registration now',
    dealDaysLeft: '10 Deals Left',
    coinsCount: '2,544',
    offerExpiry: '*Expiry date 23 sept 2022',
  },
];
