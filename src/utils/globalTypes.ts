export interface User {
  avatarImage: string;
  email: string;
  isAvatarImageSet: boolean;
  username: string;
  _id: string;
}

export type PartialUser = Pick<
  User,
  '_id' | 'avatarImage' | 'email' | 'username'
>;
