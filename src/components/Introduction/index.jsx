import iconIA from "../../assets/unjs--giget.svg";
import iconInfo from "../../assets/info-outline-rounded.svg";

export default function Introduction() {
  return (
    <>
      <div className="title-container">
        <img src={iconIA} alt="" />
        <h1>Assistente de E-mails</h1>
      </div>

      <div className="presentation">
        <p>
          Preencha os campos ou envie um arquivo .txt ou .pdf para receber uma
          sugestão de resposta do nosso Agente de IA.
        </p>
      </div>

      <div className="info">
        <img src={iconInfo} alt="" />
        <p>
          Ao habilitar o envio de arquivos, os campos do formulário serão
          desativados.
        </p>
      </div>
    </>
  );
}
