import React, { useEffect, useState } from "react";
import "firebase/database";
import { db } from "../../../firebase/config";
import TeacherItem from "../TeacherItem/TeacherItem";
import { TeacherListStyled, TeacherPageStyled } from "./TeacherListStyled";
import { ref, child, get } from "firebase/database";
import MainBtn from "../../../shared/components/MainBtn/MainBtn";
import { useDispatch } from "react-redux";
import {
  chosenTeacherId,
  toggleShowModal,
} from "../../../redux/modal/modalSlice";
import { toggleFavorite } from "../../../redux/favorites/favoritesSlise";
import useAuth from "../../../hooks/useAuth";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleCart, setVisibleCart] = useState(4);
  const dispatch = useDispatch();
  const { isAuth } = useAuth();

  const dbRef = ref(db);

  useEffect(() => {
    const fetchData = async () => {
      get(child(dbRef, `teachers/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setTeachers(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, [dbRef]);

  const handleOpenModal = (e) => {
    const currentTeacher = teachers.find(
      (teacher) => teacher.id === Number(e.currentTarget.id)
    );
    dispatch(toggleShowModal(e.currentTarget.name));
    dispatch(chosenTeacherId(currentTeacher));
  };

  // const handleToggleFavorite = (teacher) => {
  //   if (isAuth) {
  //     dispatch(toggleFavorite(teacher));
  //   }
  //   notifyFavoriteReject();
  // };

  const handleLoadMore = () => {
    setVisibleCart((prev) => prev + 4);
  };

  return (
    <TeacherPageStyled>
      <TeacherListStyled>
        {teachers.slice(0, visibleCart).map((teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              {...teacher}
              onOpenModal={handleOpenModal}
              // onFavorite={() => handleToggleFavorite(teacher)}
              onFavorite={() => dispatch(toggleFavorite(teacher))}
            />
          );
        })}
      </TeacherListStyled>
      {visibleCart < teachers.length && (
        <MainBtn type="button" onClick={handleLoadMore}>
          Load more
        </MainBtn>
      )}
    </TeacherPageStyled>
  );
};

export default TeacherList;
