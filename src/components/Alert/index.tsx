import styles from './alert.module.css';
import { useMessage } from "@/context/message-context";
import { ToastMessage } from "../ToastMessage";

export default function Alert() {

  const { queue } = useMessage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {!!queue.length && queue.map((content) => 
          <ToastMessage key={content.id} content={content} />
        )}
      </div>
    </div>
  )
}