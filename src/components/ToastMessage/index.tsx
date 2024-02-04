import { IToastMessage } from "@/types/toast-message.d";

import styles from "./style.module.css";
import useAlert from "../../hooks/useAlert";

export type ToastMessageType = "success" | "error";

type ToastMessageProps = {
  content: IToastMessage;
};

export const ToastMessage: React.FC<ToastMessageProps> = ({
  content: data,
}) => {
  const { handleRemoveNotify } = useAlert();

  return (
    <div
      className={styles.container}
      data-toast-type={data.type}
      data-toast-id={data.id}
    >
      <span data-content>{data.message}</span>

      <span data-close onClick={() => handleRemoveNotify(data.id)}>
        ╳
      </span>
    </div>
  );
};
