export class MessageService {
    public static processMessage(text: string): string {
      if (text === 'eventloop') {
        return 'eventloop';
      }
      return 'Not an envelope is sad 😔';
    }
  }