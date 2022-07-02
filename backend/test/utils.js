// immutable strings and objects used in testing
const MOCK_USER_EMAIL = 'janedoe@gmail.com';
const MOCK_USER_ID = '61a96504320f3dd99c908425';
const MOCK_INVESTOR_EMAIL = 'johndoe@test.com';
const MOCK_FOUNDER_EMAIL = 'test@email.com';
const NEW_FOUNDER_EMAIL = 'test2@email.com';
const LOGO_FILE = './test/files/startup-logo.png';
const PRESENTATION_DECK_FILE = './test/files/startup-deck.pdf';

// Utilized in before and after hooks
const MOCK_INVESTOR = {
  name: 'John',
  surname: 'Doe',
  provider: 'google',
  email: MOCK_INVESTOR_EMAIL,
  formUrl: 'qDTsnnga',
  formFields: ['revenue', 'growth', 'location', 'segment'],
};

// Utilized in before and after hooks
const MOCK_STARTUP = {
  acceptedTerms: true,
  investorId: MOCK_USER_ID,
  logo: 'http://link.to.file',
  name: 'Great Startup',
  description: 'The best way to do the thing',
  url: 'http://example.com/',
  pitchUrl: 'http://example.com/',
  presentationDeck: 'http://link.to.file',
  founder: 'John Doe',
  founderEmail: MOCK_FOUNDER_EMAIL,
  founderFacebook: 'http://example.com/',
  founderLinkedIn: 'http://example.com/',
  isRevenue: true,
  revenue: 150,
  isSegment: true,
  segment: 'music',
  isLocation: true,
  location: 'USA',
  isGrowth: true,
  growth: 1,
  recaptcha: '',
};

// Utilized in POST /api/forms
const NEW_STARTUP = {
  acceptedTerms: true,
  name: 'Dog Finder',
  description: 'Find my dog',
  url: 'http://dog.com/',
  pitchUrl: 'http://dog.com/',
  founder: 'John Doe',
  founderEmail: NEW_FOUNDER_EMAIL,
  founderFacebook: 'http://example.com/',
  founderLinkedIn: 'http://example.com/',
  isRevenue: true,
  revenue: 150,
  isSegment: true,
  segment: 'Delivery Services',
  isLocation: true,
  location: 'Boston',
  isGrowth: true,
  growth: 200,
  recaptcha: '',
};

// Utilized in POST /api/forms
const LACKING_STARTUP = {
  acceptedTerms: true,
  name: 'Dog Finder',
  description: 'Find my dog',
  url: 'http://dog.com/',
  pitchUrl: 'http://dog.com/',
  founder: 'John Doe',
  founderEmail: NEW_FOUNDER_EMAIL,
  founderFacebook: 'http://example.com/',
  founderLinkedIn: 'http://example.com/',
  recaptcha: '',
};

// Utilized as current user
const MOCK_USER = {
  _id: MOCK_USER_ID,
  name: 'Jane',
  surname: 'Doe',
  provider: 'google',
  email: MOCK_USER_EMAIL,
  formFields: [],
  formUrl: 'ot2S2b',
};

const VALIDATED_USER = {
  user: {
    _id: MOCK_USER_ID,
    name: 'Jane',
    surname: 'Doe',
    provider: 'google',
    email: MOCK_USER_EMAIL,
    formFields: [],
    formUrl: 'ot2S2b',
  },
};

module.exports = {
  MOCK_USER_EMAIL,
  MOCK_USER_ID,
  MOCK_INVESTOR_EMAIL,
  MOCK_FOUNDER_EMAIL,
  MOCK_INVESTOR,
  MOCK_STARTUP,
  NEW_STARTUP,
  LACKING_STARTUP,
  NEW_FOUNDER_EMAIL,
  MOCK_USER,
  VALIDATED_USER,
  LOGO_FILE,
  PRESENTATION_DECK_FILE,
};
