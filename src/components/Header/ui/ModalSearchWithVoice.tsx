import { BaseModal } from "@src/shared/ui/BaseModal";
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BaseIcon } from "@src/shared/Icons";
import WithAnimation from "@src/hoc/WithAnimation";

interface ModalSearchWithVoiceProps {
  setOpen: (value: boolean) => void;
  isOpen: boolean;
}

type STATUS = "idle" | "listening" | "recording" | "quiet";

export const ModalSearchWithVoice: FC<ModalSearchWithVoiceProps> = memo(
  ({ setOpen, isOpen }) => {
    const recordingTimeout = useRef<number | null>(null);
    const [status, setStatus] = useState<STATUS>("listening");

    const clearRecordingTimeout = () => {
      if (recordingTimeout.current) {
        clearTimeout(recordingTimeout.current);
        recordingTimeout.current = null;
      }
    };

    const isStatus = useCallback(
      (...statuses: STATUS[]) => {
        return statuses.includes(status);
      },
      [status],
    );

    const updateStatus = useCallback(
      (statusItem?: STATUS) => {
        if (statusItem) {
          setStatus(statusItem);
        } else if (isStatus("recording")) {
          setStatus("idle");
        } else if (isStatus("listening")) {
          setStatus("recording");
        } else {
          setStatus("listening");
        }
      },
      [isStatus],
    );

    const handleRecordingTimeout = useCallback(() => {
      if (isStatus("listening", "recording")) {
        clearRecordingTimeout();
        recordingTimeout.current = setTimeout(() => {
          updateStatus("quiet");
        }, 5000);
      }
    }, [isStatus, updateStatus]);

    const toggleRecording = () => {
      clearRecordingTimeout();
      updateStatus();
      handleRecordingTimeout();
    };

    const bgColorAndText = `${["listening", "recording"].includes(status) ? "bg-red-600 text-white" : "bg-gray-300 text-black"}`;
    const bgAnimate = `${status === "recording" ? "bg-gray-300" : "border border-gray-300"}`;
    const visibility = `${["listening", "recording"].includes(status) ? "invisible" : "visible"}`;

    const buttonClasses = `w-16 h-16 mx-auto rounded-full flex justify-center items-center relative ${bgColorAndText}`;
    const buttonHintClasses = `text-center text-sm text-gray-500 mt-4 ${visibility}`;
    const buttonAnimateClasses = `animate-ping absolute w-14 h-14 rounded-full ${bgAnimate}`;
    const text = useMemo(() => {
      if (status === "quiet") {
        return "Didn't hear that";
      }

      if (["listening", "recording"].includes(status)) {
        return "Listening...";
      }

      return "Microphone off. Try again";
    }, [status]);

    useEffect(() => {
      handleRecordingTimeout();

      return () => {
        clearRecordingTimeout();
      };
    }, [handleRecordingTimeout]);

    return (
      <BaseModal setOpen={setOpen} isOpen={isOpen}>
        <p className="text-2xl mb-52">{text}</p>
        <div className="flex justify-center items-center">
          {isStatus("listening", "recording") && (
            <span className={buttonAnimateClasses}></span>
          )}
          <button className={buttonClasses} onClick={toggleRecording}>
            <BaseIcon icon="microphone" />
          </button>
        </div>

        <div className={buttonHintClasses}>Tap the microphone to try again</div>
      </BaseModal>
    );
  },
);

ModalSearchWithVoice.displayName = "ModalSearchWithVoice";
