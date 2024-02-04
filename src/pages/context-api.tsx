/**
 * Context Api
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import { ToastMessage } from "@/components/ToastMessage";
import useAlert from "@/hooks/useAlert";
import styles from "@/styles/context-api.module.css";
import { IToastMessage } from "@/types/toast-message.d";

export interface IAddToastMessage {
  message: string;
  type: "success" | "error";
  duration?: number;
}

export default function ContextApi() {
  const { handleNotify } = useAlert();

  const messages: Array<IToastMessage> = [
    {
      id: "1",
      message: "Mensagem de sucesso",
      type: "success",
    },
    {
      id: "2",
      message: "Mensagem de erro",
      type: "error",
    },
  ];

  function handleSuccessButtonClick(content: IAddToastMessage) {
    handleNotify(content);
  }

  function handleErrorButtonClick(content: IAddToastMessage) {
    handleNotify(content);
  }

  return (
    <>
      <div className={styles.container}>
        <button
          type="button"
          onClick={() =>
            handleSuccessButtonClick({
              message: "Mensagem de sucesso",
              type: "success",
            })
          }
        >
          Disparar mensagem de sucesso
        </button>
        <button
          type="button"
          onClick={() =>
            handleErrorButtonClick({
              message: "Mensagem de erro",
              type: "error",
            })
          }
        >
          Disparar mensagem de erro
        </button>
      </div>

      <div className={styles["toast-container"]}>
        {messages.map((message) => (
          <ToastMessage key={message.id} content={message} />
        ))}
      </div>
    </>
  );
}
