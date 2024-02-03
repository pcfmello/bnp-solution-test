/**
 * Modal de confirmação
 *
 * - Crie um component para o modal de confirmação
 * - Utilize o código abaixo como base
 * - O modal deve ser aberto ao clicar no botão "Abrir modal de confirmação"
 * - O título deve ser "Confirmação"
 * - O conteudo deve ser dinâmico
 */

import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/modal.module.css";
import { Modal } from "@/components/Modal";

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleToggleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function handleModalConfirm() {
    handleToggleModal();
    alert("Confirmado");
  }

  function renderModalContent() {
    return (
      <div data-modal-content>
        <p>Deseja confirmar essa ação?</p>
      </div>
    );
  }

  return (
    <>
      <main className={styles.container}>
        <button type="button" onClick={handleToggleModal}>
          Abrir modal de confirmação
        </button>
      </main>

      {/* Renderizar modal de confirmação */}
      <Modal
        isOpen={modalIsOpen}
        title="Confirmação"
        isHideHeaderClose={true}
        onClose={handleToggleModal}
        onConfirm={handleModalConfirm}
        children={renderModalContent()}
        footer={{ confirmText: "OK", cancelText: "Cancelar" }}
      />
    </>
  );
}
