import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { get } from "lodash";

import { validateForm } from "../../utils/validationForm";

import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

import axios from "../../services/axios";
import Container from "../../components/Container";
import Response from "../../components/Response";
import Introduction from "../../components/Introduction";
import Loading from "../../components/Loading";
import InputField from "../../components/InputField";
import TextAreaField from "../../components/Textarea";
import CheckboxField from "../../components/CheckboxField";
import FileInput from "../../components/FileInput";

export default function Home() {
  const [enable, setEnable] = useState(true);

  const [sender, setSender] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [fileSelected, setFileSelected] = useState(null);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const hasBool = Boolean(data);

  const handleChecked = (e) => {
    setEnable(!e.target.checked);

    if (enable === true) {
      setSender("");
      setSubject("");
      setDescription("");
      return;
    }

    setFileSelected(null);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formDataValidated = validateForm(
      fileSelected,
      sender,
      subject,
      description
    );

    if (!formDataValidated)
      return toast.error("Preencha o formulário ou envie um arquivo válido.");

    try {
      setIsLoading(true);
      const { data } = await axios.post("/file", formDataValidated, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setData(JSON.parse(data));
      setIsLoading(false);
    } catch (errors) {
      console.log(errors);
      const error = get(errors, "response.data.detail", "");
      const status = get(errors, "response.status", "");

      toast.error(`${status} ${error}`);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Introduction />

      <form onSubmit={handleOnSubmit} className="form-container">
        <div>
          <h2>Preencha os campos</h2>
        </div>

        <div>
          <InputField
            label={"Remetente:"}
            onChange={(e) => setSender(e.target.value)}
            value={sender}
            disabled={!enable}
          />

          <InputField
            label={"Assunto:"}
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            disabled={!enable}
          />

          <TextAreaField
            label={"Conteúdo:"}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            disabled={!enable}
          />

          <CheckboxField
            label={"Habilitar envio de arquivos"}
            onChange={handleChecked}
          />

          <div className="divisor">
            <hr />
            <p>ou</p>
            <hr />
          </div>

          <FileInput
            onChange={(e) => setFileSelected(e.target.files?.[0] ?? null)}
            disabled={enable}
          />

          <hr />

          <div className="btn-container">
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </div>
        </div>
      </form>

      {isLoading && <Loading />}

      <Response hasBool={hasBool} data={data} />

      <ToastContainer />
    </Container>
  );
}
