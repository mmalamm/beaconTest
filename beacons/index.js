export const regions = [
  {
    uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
    identifier: "TJ HQ",
    latitude: 40.7081,
    longitude: -74.0112
  }
];

export const filterWithRegistryData = beacon =>
  beaconsRegistry.filter(
    b => b.major === beacon.major && b.minor === beacon.minor
  ).length > 0;

export const mergeWithRegistryData = beacon =>
  beaconsRegistry
    .filter(
      ({ uuid: rUUID, major: rMajor, minor: rMinor }) =>
        rUUID === beacon.uuid &&
        rMajor === beacon.major &&
        rMinor === beacon.minor
    )
    .reduce((acc, rBeacon) => ({ ...acc, ...rBeacon }), beacon);

export const sortByAccuracy = (a, b) => a.accuracy - b.accuracy;

export const beaconsRegistry = [
  {
    uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
    major: 30684,
    minor: 8638,
    name: "muhammad yellow beacon",
    color: "yellow",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/tj-pwa.appspot.com/o/360_sport.png?alt=media&token=ec25761d-6e64-4ec5-9736-f10033ecc531"
  },
  {
    uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
    major: 60742,
    minor: 19571,
    name: "muhammad purple beacon",
    color: "purple",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/tj-pwa.appspot.com/o/air.png?alt=media&token=5cfcce4e-a647-480e-b599-4d1582af5a55"
  },
  // {
  //   uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
  //   major: 21685,
  //   minor: 2933,
  //   name: "muhammad pink beacon",
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/3/39/Athene_noctua_%28cropped%29.jpg"
  // },
  {
    uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
    major: 64408,
    minor: 25413,
    name: "muhammad yellow 2",
    color: "yellow",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/tj-pwa.appspot.com/o/cool_cotton.png?alt=media&token=20d497c8-4d79-4889-b32a-7879e96779f4"
  },
  {
    uuid: "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
    major: 32381,
    minor: 24223,
    name: "muhammad pink 2",
    color: "pink",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/tj-pwa.appspot.com/o/second_skin.png?alt=media&token=54c61bed-8262-4826-9814-5ab24411e8dc"
  }
];
