import "./style.scss";

export default function Response({ hasBool, data }) {
  return (
    <>
      <div className="email">
        <p>E-mail enviado:</p>
        {hasBool && (
          <div className="topics">
            <p>
              <strong>Classificação:</strong> {data?.classification ?? ""}
            </p>
            <p>
              <strong>Remetente:</strong> {data?.sender ?? ""}
            </p>
            <p>
              <strong>Assunto:</strong> {data?.subject ?? ""}
            </p>
            <p>
              <strong>Conteúdo:</strong> {data?.content ?? ""}
            </p>
          </div>
        )}
      </div>

      <div className="response-container">
        <p>Resposta:</p>
        {hasBool && (
          <span>{data?.modelResponse.replace(/<br\s*\/?>/gi, "\n") ?? ""}</span>
        )}
      </div>
    </>
  );
}
