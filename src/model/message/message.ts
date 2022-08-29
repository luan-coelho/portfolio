import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';
import { MessageType } from './messageType';

const toast = (
  messageType: MessageType | MessageType.SUCESS,
  ...messages: string[]
) => {
  messages.forEach((message) => {
    if (message) {
      createToast(message, {
        type: messageType,
        showIcon: true,
      });
    }
  });
};

export default toast;
