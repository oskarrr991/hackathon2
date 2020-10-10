export class User {
  name: string;
  key: string;
  emailAddress: string;
  avatarUrls: Map<string, string>[] = [new Map<string, string>()];
  displayName: string;
  active: boolean;
  deleted: boolean;
  timezone: string;
  local: string;
  avatar: string;
  rating: number;
}
