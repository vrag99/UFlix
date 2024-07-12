import { type video } from "@/lib/types";
import scenicValleyThumbnail from "@/assets/thumbnails/a_scenic_valley.png";
import atheleticHorseThumbnail from "@/assets/thumbnails/atheletic_horse.png";
import beautifulSunsetThumbnail from "@/assets/thumbnails/beautiful_sunset.png";
import insectOnALeafThumbnail from "@/assets/thumbnails/insect_on_a_leaf.png";

export const videoData: video[] = [
  {
    id: "1",
    title: "A Scenic Valley",
    description: "A beautiful valley with a river running through it.",
    thumbnail: scenicValleyThumbnail,
    ipfsHash: "QmQrJUsRMxGL4gsxFB4cC3B2X93qpCAXZ7mCrMAwEGQdE8",
    type: 'free',
    tag: 'nature',
    likes: 2,
    comments: [
      {
        text: "This is so beautiful!",
        username: "natureLover",
        address: "0x32Be343",
      },
    ],
    username: "c1c4d4",
    address: "0x5B281eA3dA7731699EEbF0A034e800bC8e9b722D",
  },
  {
    id: "2",
    title: "An Atheletic Horse",
    description: "An atheletic horse running in a field.",
    thumbnail: atheleticHorseThumbnail,
    ipfsHash: "QmToVqEnJ3GD1UXyr3cap7kuuUnbcuV38U8cyFu7RjdwDL",
    likes: 1,
    type: 'paid',
    tag: 'nature',
    comments: [],
    username: "c1c4d4",
    address: "0x5B281eA3dA7731699EEbF0A034e800bC8e9b722D",
  },
  {
    id: "3",
    title: "A Beautiful Sunset",
    description: "Sun drowns amongst the trees",
    thumbnail: beautifulSunsetThumbnail,
    ipfsHash: "QmVfPi7oekmtrXNoWGuFMToasL9ZqaSf67YwiccXp4c6DV",
    likes: 2,
    type: 'free',
    tag: 'nature',
    comments: [
      {
        text: "This is so beautiful!",
        username: "natureLover",
        address: "0x32Be343",
      },
    ],
    username: "c1c4d4",
    address: "0x5B281eA3dA7731699EEbF0A034e800bC8e9b722D",
  },
  {
    id: "4",
    title: "Insect on a leaf",
    description: "A close up of an insect on a leaf.",
    thumbnail: insectOnALeafThumbnail,
    ipfsHash: "QmaKCKnAQYJMtZos5ykNbjR62hbAiiFHG1s52gmTgh9WrL",
    likes: 2,
    type: 'free',
    tag: 'nature',
    comments: [
      {
        text: "This is so beautiful!",
        username: "natureLover",
        address: "0x32Be343",
      },
    ],
    username: "c1c4d4",
    address: "0x5B281eA3dA7731699EEbF0A034e800bC8e9b722D",
  },
];
