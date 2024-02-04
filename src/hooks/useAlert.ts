import { useMessage } from "@/context/message-context";
import { IAddToastMessage } from "@/pages/context-api";
import { faker } from "@faker-js/faker";

export default function useAlert() {
  const { queue, setQueue } = useMessage();

  function handleNotify(content: IAddToastMessage) {
    const newContent = { ...content, id: faker.database.mongodbObjectId() };
    setQueue([...queue, newContent]);
  }

  function handleRemoveNotify(id: string) {
    const newQueue = queue.filter((item) => item.id !== id);
    setQueue(newQueue);
  }

  return {
    handleNotify,
    handleRemoveNotify,
  };
}
