import { useDispatch } from "react-redux";
import { showModal } from "../../redux/modalSlice";
import "./index.css";

function CtaButton({ buttonText }) {
  const dispatch = useDispatch();
  return (
    <div>
      <button className="popupbutton" onClick={() => dispatch(showModal())}>
        {buttonText}
      </button>
    </div>
  );
}

export default CtaButton;
