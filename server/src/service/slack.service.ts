import axios from 'axios';

export default class SlackService {

  static hooks = ''

  sendMessage = async (text: String) => {
    return await axios({
      method: 'post',
      url: SlackService.hooks,
      data: {
        text
      }
    });
  }
}