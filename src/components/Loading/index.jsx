import "./style.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      <span>Processando...</span>
      <div className="circle"></div>
    </div>
  );
}
