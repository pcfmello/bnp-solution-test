/**
 * Formulário
 *
 * - Primeiramente vá até /src/pages/api/users/create.ts e implemente a API
 * - Deve ser implementado utilizando a lib react-hook-form
 * - O formulário deve ter os seguintes campos: nome, e-mail
 * - Os dois campos são obrigatórios e precisam de validação
 * - Ao dar 'submit', deve ser feito uma request para /api/users/create
 * - Lide com os possíveis erros
 */
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import styles from "@/styles/formulario.module.css";
import { IUserCreate } from "@/types/user";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IUserCreate>();
  const onSubmit: SubmitHandler<IUserCreate> = async (
    formData: IUserCreate
  ) => {
    try {
      const response = await fetch("/api/users/create", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao obter os dados");

      reset();
      alert("Usuário adicionado!");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              className={`${errors.name && styles.inputError}`}
              placeholder="Name *"
              {...register("name", { required: "Nome é obrigatório" })}
            />
            <div className={styles.textError}>
              <ErrorMessage errors={errors} name="name" />
            </div>
          </div>
          <div>
            <input
              type="email"
              className={`${errors.email && styles.inputError}`}
              placeholder="E-mail *"
              {...register("email", { required: "Email é obrigatório" })}
            />
            <div className={styles.textError}>
              <ErrorMessage errors={errors} name="email" />
            </div>
          </div>

          <button type="submit" data-type="confirm">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
