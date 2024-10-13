import { useDispatch } from "react-redux";
import { showModal } from "../../redux/modalSlice";

function InnerpageSocial() {
  const dispatch = useDispatch();
  return (
    <div className="hero-section__social">
      <div
        className="hero-section__social-item"
        onClick={() => dispatch(showModal())}
      >
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </div>
      <div
        className="hero-section__social-item"
        onClick={() => dispatch(showModal())}
      >
        <i className="fa fa-youtube-play" aria-hidden="true"></i>
      </div>
      <div
        className="hero-section__social-item"
        onClick={() => dispatch(showModal())}
      >
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </div>
      <div
        className="hero-section__social-item"
        onClick={() => dispatch(showModal())}
      >
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
      <div
        className="hero-section__social-item"
        onClick={() => dispatch(showModal())}
      >
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </div>
    </div>
  );
}
export default InnerpageSocial;
