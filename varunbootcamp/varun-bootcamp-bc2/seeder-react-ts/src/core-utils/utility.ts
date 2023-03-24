export class Utils {
  static getGreetingMessage() {
    const curHr = new Date().getHours();

    return curHr < 12
      ? 'Good morning'
      : curHr < 18
      ? 'Good afternoon'
      : 'Good evening';
  }
}
