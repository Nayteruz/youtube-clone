import { BaseModal } from "@src/shared/ui/BaseModal";
import { FC } from "react";
import { BaseIcon } from "@src/shared/Icons";

interface ModalSearchWithVoiceProps {
  setOpen: (value: boolean) => void;
}

export const ModalSearchWithVoice: FC<ModalSearchWithVoiceProps> = ({
  setOpen,
}) => {
  return (
    <div>
      <BaseModal setOpen={setOpen}>
        <p className="text-2xl mb-52">Microphone off. Try again</p>
        <button className="w-16 h-16 mx-auto bg-gray-300 rounded-full text-black flex justify-center items-center relative">
          <BaseIcon icon="microphone" />
        </button>
        <div className="text-center text-sm text-gray-500 mt-4">
          Tap the microphone to try again
        </div>
      </BaseModal>
    </div>
  );
};
