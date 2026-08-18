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
