import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  notifyLoginSuccess,
  notifyRegisterError,
} from "../../../shared/NotificationToastify/Toasts";
import { toggleShowModal } from "../../../redux/modal/modalSlice";
import {
  BtnEyeStyled,
  ErrorsStyled,
  FormStyled,
  InputPasswWrapStyled,
  InputsWrapper,
  LuEyeOffStyled,
  LuEyeStyled,
  ModalTitle,
  StyledModal,
  SubmitBtnStyled,
} from "./LoginForm.styled";
import BtnClose from "../../../shared/components/Buttons/BtnClose";
import InputDefault from "../../../shared/components/InputDefault/InputDefault";
import { setUser } from "../../../redux/auth/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import BtnToggleFormAuth from "../../../shared/components/Buttons/BtnToggleFormAuth/BtnToggleFormAuth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordShown = () => setPasswordShown((show) => !show);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(6, "Enter at least 6 characters")
        .max(20, "Must be maximum 20 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
      // .unwrap()
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          notifyLoginSuccess();
          navigate("/teachers");
          dispatch(toggleShowModal(""));
        })
        .catch((error) => {
          notifyRegisterError(error);
          navigate("/");
        });
    },
  });

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowModal(""));
    navigate("/");
  };

  const handleOpenModal = (e) => {
    handleClickBtnClose();
    dispatch(toggleShowModal(e.currentTarget.name));
  };

  return (
    <>
      <StyledModal>
        <BtnClose onClick={handleClickBtnClose} />
        <ModalTitle>Login</ModalTitle>
        <FormStyled onSubmit={formik.handleSubmit}>
          <InputsWrapper>
            <InputDefault
              name="email"
              type="email"
              value={formik.values.email}
              placeholder="Email"
              // autoComplete="off"
              onChange={formik.handleChange}
              label="Email"
            />

            {formik.touched.email && formik.errors.email ? (
              <ErrorsStyled>{formik.errors.email}</ErrorsStyled>
            ) : null}

            <InputPasswWrapStyled>
              <InputDefault
                variant="input-password"
                name="password"
                type={passwordShown ? "text" : "password"}
                value={formik.values.password}
                placeholder="Password"
                onChange={formik.handleChange}
                label="Password"
              />
              <BtnEyeStyled
                type="button"
                onClick={togglePasswordShown}
                name="togglePassword"
                aria-label="Toggle password visibility"
              >
                {passwordShown ? (
                  <LuEyeStyled size={18} />
                ) : (
                  <LuEyeOffStyled size={18} />
                )}
              </BtnEyeStyled>
            </InputPasswWrapStyled>

            {formik.touched.password && formik.errors.password ? (
              <ErrorsStyled>{formik.errors.password}</ErrorsStyled>
            ) : null}
          </InputsWrapper>
          <SubmitBtnStyled type="submit">Enter</SubmitBtnStyled>
        </FormStyled>
        <BtnToggleFormAuth name="register" onClick={handleOpenModal}>
          Register
        </BtnToggleFormAuth>
      </StyledModal>
    </>
  );
};

export default LoginForm;
