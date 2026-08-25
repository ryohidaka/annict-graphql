export const USER_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment UserFields on User {
    id
    annictId
    name
    username
    avatarUrl
    backgroundImageUrl
    description
    url
    email
    createdAt
    followersCount
    followingsCount
    notificationsCount
    recordsCount
    wannaWatchCount
    watchingCount
    watchedCount
    onHoldCount
    stopWatchingCount
    viewerCanFollow
    viewerIsFollowing
  }
`;

export const WORK_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment WorkFields on Work {
    id
    annictId
    title
    titleEn
    titleKana
    titleRo
    media
    seasonName
    seasonYear
    episodesCount
    noEpisodes
    watchersCount
    reviewsCount
    satisfactionRate
    malAnimeId
    syobocalTid
    officialSiteUrl
    officialSiteUrlEn
    wikipediaUrl
    wikipediaUrlEn
    twitterUsername
    twitterHashtag
    viewerStatusState
  }
`;

export const EPISODE_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment EpisodeFields on Episode {
    id
    annictId
    title
    number
    numberText
    sortNumber
    recordsCount
    recordCommentsCount
    satisfactionRate
    viewerDidTrack
    viewerRecordsCount
  }
`;

export const CHARACTER_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment CharacterFields on Character {
    id
    annictId
    name
    nameEn
    nameKana
    nickname
    nicknameEn
    age
    ageEn
    birthday
    birthdayEn
    bloodType
    bloodTypeEn
    height
    heightEn
    weight
    weightEn
    nationality
    nationalityEn
    occupation
    occupationEn
    description
    descriptionEn
    descriptionSource
    descriptionSourceEn
    favoriteCharactersCount
  }
`;
