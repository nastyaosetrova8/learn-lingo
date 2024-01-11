import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowModal } from "../../redux/modal/modalSlice";
import BtnClose from "../../shared/components/Buttons/BtnClose";
import InputDefault from "../../shared/components/InputDefault/InputDefault";
import { useFormik } from "formik";
import * as Yup from "yup";
import { notifyBookingSuccess } from "../../shared/NotificationToastify/Toasts";
import { selectTeacherId } from "../../redux/modal/modalSelectors";
import {
  BookBtnStyled,
  DescBookingStyled,
  ErrorsStyled,
  FormStyled,
  FormTitleStyled,
  InputsWrapper,
  ModalTitle,
  StyledModal,
  TeacherAvatarWrapper,
  TeacherInfoWrap,
  TeacherSubtitle,
} from "./BookingLessonFormStyled";

const BookingLessonForm = () => {
  const dispatch = useDispatch();
  const teacherId = useSelector(selectTeacherId);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      phoneNumber: Yup.string().matches(
        phoneRegExp,
        "Phone number is not valid"
      ),
    }),

    onSubmit: (values) => {
      notifyBookingSuccess();
        // dispatch(bookLesson(values))
        //   .unwrap()
        //   .then((data) => {
        //     //   notifyBookingSuccess();
        //   })
        //   .catch((error) => {
        //     notifyRegisterError(error);
        //     // navigate("/");
        //   });
    },
  });

  const handleClickBtnClose = () => {
    document.body.classList.remove("no-scroll");
    dispatch(toggleShowModal(""));
  };

  return (
    <StyledModal>
      <BtnClose onClick={handleClickBtnClose} />
      <ModalTitle>Book trial lesson</ModalTitle>
      <DescBookingStyled>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </DescBookingStyled>
      <TeacherInfoWrap>
        <TeacherAvatarWrapper>
          <img src={teacherId.avatar_url} alt={teacherId.name} />
        </TeacherAvatarWrapper>
        <div>
          <TeacherSubtitle>Your teacher</TeacherSubtitle>
          <p>
            {teacherId.name} {teacherId.surname}
          </p>
        </div>
      </TeacherInfoWrap>
      <FormTitleStyled>
        What is your main reason for learning English?
      </FormTitleStyled>
      <FormStyled onSubmit={formik.handleSubmit}>
        <InputsWrapper>
          <InputDefault
            name="username"
            type="username"
            value={formik.values.name}
            placeholder="Full Name"
            // autoComplete="off"
            onChange={formik.handleChange}
            label="Username"
          />
          {formik.touched.username && formik.errors.username ? (
            <ErrorsStyled>{formik.errors.username}</ErrorsStyled>
          ) : null}

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

          <InputDefault
            name="phoneNumber"
            type="phoneNumber"
            value={formik.values.tel}
            placeholder="Phone number"
            onChange={formik.handleChange}
            label="PhoneNumber"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <ErrorsStyled>{formik.errors.phoneNumber}. <p>Please enter accoding to example: 0938768787</p></ErrorsStyled>
          ) : null}
        </InputsWrapper>
        <BookBtnStyled type="submit">Book</BookBtnStyled>
      </FormStyled>
    </StyledModal>
  );
};

export default BookingLessonForm;
