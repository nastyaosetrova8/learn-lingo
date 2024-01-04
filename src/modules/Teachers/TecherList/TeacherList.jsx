import React, { useEffect, useState } from "react";
// import firebase from "firebase/app";
import "firebase/database";
import { db } from "../../../firebase/config";
import TeacherItem from "../TeacherItem/TeacherItem";
import { TeacherListStyled } from "./TeacherListStyled";
import { getDatabase, ref, child, get, off } from "firebase/database";
import { uid } from "react-uid";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [visibleCart, setVisibleCart] = useState(4);

  const dbRef = ref(db);

  useEffect(() => {
    // ==========================
    // onValue(ref(db), (snapshot) => {
    //     const data = snapshot.val();
    //     if (data !== null) {
    //         Object.values(data).map((teachers) => {
    //             setTeachers((oldArray) => [...oldArray, teachers])
    //         })
    //     }
    // })
    // ==========================

    const fetchData = async () => {
      get(child(dbRef, `teachers/`))
        .then((snapshot) => {
          // `teachers/${teachersId}`
          if (snapshot.exists()) {
            setTeachers(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      // // const database = firebase.database();
      // const teachersRef = db.ref('teachers');
      // // const teachersRef = database.ref('teachers');

      // teachersRef.on('value', (snapshot) => {
      //   const data = snapshot.val();
      //   const teachersArray = Object.values(data || {});
      //   setTeachers(teachersArray);
      // });
    };

    fetchData();

    //   return () => {
    //     off(dbRef);
    //   }
  }, [dbRef]);

  const handleLoadMore = () => {
    setVisibleCart((prev) => prev + 4);
  };

  const showLoadMoreBtn = Math.ceil(teachers.length / visibleCart);
  return (
    <>
      <TeacherListStyled>
        {teachers.slice(0, visibleCart).map((teacher) => {
          return <TeacherItem key={teacher.id} {...teacher} />;
        })}
      </TeacherListStyled>

      {visibleCart.length < teachers.length && (
        <button type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default TeacherList;
