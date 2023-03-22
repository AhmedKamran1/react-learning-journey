import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import Wrapper from "../Helpers/Wrapper";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

// function ModalOverlay(props) {
//   return (
//     <Card className={styles.modal}>
//       <header className={styles.header}>
//         <h2>{props.title}</h2>
//       </header>
//       <div className={styles.content}>
//         <p>{props.message}</p>
//       </div>
//       <footer className={styles.actions}>
//         <Button onClick={props.onConfirm}>Okay</Button>
//       </footer>
//     </Card>
//   );
// }

function ErrorModal(props) {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
}

export default ErrorModal;
