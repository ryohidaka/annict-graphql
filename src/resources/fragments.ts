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

export const LIBRARY_ENTRY_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment LibraryEntryFields on LibraryEntry {
    id
    note
    status {
      state
    }
    user {
      id
      username
    }
    work {
      id
      annictId
      title
    }
    nextEpisode {
      id
      annictId
      title
      number
      numberText
    }
    nextProgram {
      id
    }
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

export const PERSON_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment PersonFields on Person {
    id
    annictId
    name
    nameEn
    nameKana
    nickname
    nicknameEn
    birthday
    bloodType
    height
    genderText
    castsCount
    staffsCount
    favoritePeopleCount
    url
    urlEn
    wikipediaUrl
    wikipediaUrlEn
    twitterUsername
    twitterUsernameEn
  }
`;

export const ORGANIZATION_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment OrganizationFields on Organization {
    id
    annictId
    name
    nameEn
    nameKana
    url
    urlEn
    wikipediaUrl
    wikipediaUrlEn
    twitterUsername
    twitterUsernameEn
    staffsCount
    favoriteOrganizationsCount
  }
`;

export const RECORD_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment RecordFields on Record {
    id
    annictId
    comment
    commentsCount
    rating
    ratingState
    likesCount
    facebookClickCount
    twitterClickCount
    modified
    createdAt
    updatedAt
  }
`;

export const REVIEW_FIELDS_FRAGMENT = /* GraphQL */ `
  fragment ReviewFields on Review {
    id
    annictId
    title
    body
    ratingOverallState
    ratingAnimationState
    ratingMusicState
    ratingStoryState
    ratingCharacterState
    likesCount
    impressionsCount
    modifiedAt
    createdAt
    updatedAt
  }
`;
