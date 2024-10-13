import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Sidebar from "../Sidebar";
import { hideModal, selectModalVisibility } from "../../redux/modalSlice"; // Adjust path as necessary
import "./index.css";

function PopupForm({ modalTitle }) {
  const dispatch = useDispatch();
  const show = useSelector(selectModalVisibility);

  return (
    <>
      <Modal show={show} onHide={() => dispatch(hideModal())}>
        <Modal.Header closeButton>
          <Modal.Title className="modalheading">
            Open Your Free {modalTitle} Code Ai Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Sidebar />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopupForm;
