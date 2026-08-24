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
