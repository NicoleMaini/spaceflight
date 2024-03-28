import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// questo lo andiamo a modificare solo in caso di redux, attualmente è già apposto con as HTMLElement, o in alternativa !
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
