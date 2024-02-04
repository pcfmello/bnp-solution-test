import styles from "@/styles/home.module.css";
import Link from "next/link";

interface ILink {
	linkTo: string;
	label: string;
}

export default function Home() {
	const links: ILink[] = [
		{ linkTo: 'modal', label: 'Modal'},
		{ linkTo: 'modal-de-confirmacao', label: 'Modal de confirmação'},
		{ linkTo: 'lista', label: 'Lista'},
		{ linkTo: 'formulario', label: 'Formulário'},
		{ linkTo: 'context-api', label: 'Context API'},
		{ linkTo: 'pagina-estatica', label: 'Pagina estática'},
		{ linkTo: 'ciclo-de-vida', label: 'Ciclo de vida de componente'},
	];

  return (
    <div className={styles.container}>
      <ul>
        {links.map(link => (
					<li>
          	<Link href={link.linkTo}>{link.label}</Link>
        	</li>
				))}
      </ul>
    </div>
  );
}
