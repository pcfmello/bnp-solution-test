import { IToastMessage } from "@/types/toast-message";
import { ReactNode, createContext, useContext, useState } from "react";

interface IMessageContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  queue: IToastMessage[];
  setQueue: React.Dispatch<React.SetStateAction<IToastMessage[]>>;
}

interface MessageProviderProps {
  children: ReactNode;
}

const MessageContext = createContext<IMessageContext | undefined>(undefined);

export function MessageProvider({ children }: MessageProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [queue, setQueue] = useState<IToastMessage[]>([]);

  return (
    <MessageContext.Provider
      value={{
        isOpen,
        setIsOpen,
        queue,
        setQueue,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage(): IMessageContext {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage() deve ser usado dentro de um MessageProvider");
  }
  return context;
}
