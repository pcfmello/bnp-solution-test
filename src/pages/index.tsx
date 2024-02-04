import styles from "@/styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="/modal">Modal</Link>
        </li>

        <li>
          <Link href="/modal-de-confirmacao">Modal de confirmação</Link>
        </li>

        <li>
          <Link href="/lista">Lista</Link>
        </li>

        <li>
          <Link href="/formulario">Formulário</Link>
        </li>

        <li>
          <Link href="/context-api">Context API</Link>
        </li>

        <li>
          <Link href="/pagina-estatica">Pagina estática</Link>
        </li>

        <li>
          <Link href="/ciclo-de-vida">Ciclo de vida de componente</Link>
        </li>
      </ul>
    </div>
  );
}
