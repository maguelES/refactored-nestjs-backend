export class UserCommonDto {
  name: string;
  first_name: string;
  last_name: string;

  constructor(name: string, first_name: string, last_name: string) {
    this.name = name;
    this.first_name = first_name;
    this.last_name = last_name;
  }
}
