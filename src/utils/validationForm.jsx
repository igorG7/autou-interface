import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const validateForm = (fileSelected, sender, subject, description) => {
  const formdata = new FormData();
  let flag = false;

  if (fileSelected) {
    const filename = fileSelected.name;
    const ext = filename.substring(filename.lastIndexOf(".") + 1);

    if (ext !== "txt" && ext !== "pdf") {
      flag = true;
      toast.error("Formato de arquivo inválido");
    } else {
      formdata.append("file", fileSelected);
    }
  }

  if (sender && subject && description) {
    formdata.append("sender", sender);
    formdata.append("subject", subject);
    formdata.append("description", description);
  }

  let isEmpty = true;

  for (const [key, value] of formdata) {
    console.log(key, value);
    isEmpty = false;
  }

  if (isEmpty) {
    flag = true;
  }

  return flag ? null : formdata;
};
