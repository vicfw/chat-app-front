import Picker from 'emoji-picker-react';
import { useState } from 'react';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { useChatInput } from './hooks';
import * as Style from './styles';
import * as Type from './types';

const ChatInput: React.FC<Type.ChatInputPropTypes> = ({ handleSendMsg }) => {
  const { getter, setter, method } = useChatInput(handleSendMsg);

  return (
    <Style.Container>
      <div className="button-container" onClick={(e) => {}}>
        <div className="emoji">
          <BsEmojiSmileFill onClick={method.handleEmojiPickerHideShow} />
          {getter.showEmojiPicker && (
            <Picker onEmojiClick={method.handleEmojiClick} />
          )}
        </div>
      </div>
      <form
        className="input-container"
        onSubmit={(event) => method.sendChat(event)}
      >
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setter.setMsg(e.target.value)}
          value={getter.msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Style.Container>
  );
};

export default ChatInput;
