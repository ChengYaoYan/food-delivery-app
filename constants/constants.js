import {screens} from './routes';

const bottom_tabs = [
  {
    id: 0,
    label: screens.Home,
  },
  {
    id: 1,
    label: screens.Search,
  },
  {
    id: 2,
    label: screens.Cart,
  },
  {
    id: 3,
    label: screens.Favourite,
  },
  {
    id: 4,
    label: screens.Notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: '10 Mins',
  },
  {
    id: 2,
    label: '20 Mins',
  },
  {
    id: 3,
    label: '30 Mins',
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: 'Burger',
  },
  {
    id: 2,
    label: 'Fast Food',
  },
  {
    id: 3,
    label: 'Pizza',
  },
  {
    id: 4,
    label: 'Asian',
  },
  {
    id: 5,
    label: 'Dessert',
  },
  {
    id: 6,
    label: 'Breakfast',
  },
  {
    id: 7,
    label: 'Vegetable',
  },
  {
    id: 8,
    label: 'Taccos',
  },
];

export default {
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
};
