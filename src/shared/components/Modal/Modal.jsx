import { useDispatch, useSelector } from "react-redux";
import {
  selectIsShowModal,
  selectModalName,
} from "../../../redux/modal/modalSelectors";
import { useEffect } from "react";
import { toggleShowModal } from "../../../redux/modal/modalSlice";
import { createPortal } from "react-dom";
import { StyledOverlay } from "./Modal.styled";
import RegisterForm from "../../../modules/authForms/RegisterForm/RegisterForm";
import LoginForm from "../../../modules/authForms/LoginForm/LoginForm";
import BookingLessonForm from "../../../modules/BookingLessonForm/BookingLessonForm";

const modalRoot = document.querySelector("#modal-root");

const Modal = () => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectIsShowModal);
  const modalName = useSelector(selectModalName);

  useEffect(() => {
    if (!isShowModal) return;
    document.body.classList.add("no-scroll");

    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        document.body.classList.remove("no-scroll");
        dispatch(toggleShowModal(""));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("no-scroll");
    };
  }, [dispatch, isShowModal]);

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleShowModal(""));
      document.body.classList.remove("no-scroll");
    }
  };

  return createPortal(
    <StyledOverlay onClick={handleClickOverlay}>
      {modalName === "register" && isShowModal && <RegisterForm />}
      {modalName === "login" && isShowModal && <LoginForm />}
      {modalName === "bookingLesson" && isShowModal && <BookingLessonForm />}
    </StyledOverlay>,
    modalRoot
  );
};

export default Modal;
