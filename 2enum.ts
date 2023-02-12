// Enum for code structuring
enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership, membershipReverse);

enum SocialMedia {
  VK = "Vk",
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
}

const social = SocialMedia.INSTAGRAM;
console.log(social, typeof Membership);
