import { useSelector } from "react-redux";
import Modal from "../../shared/components/Modal/Modal";
import AppBar from "../AppBar";
import { Outlet } from "react-router-dom";
import { selectIsShowModal } from "../../redux/modal/modalSelectors";

const SharedLayout = () => {
  const isShowModal = useSelector(selectIsShowModal);

  return (
    <div>
        <AppBar />
        <Outlet />
        {isShowModal && <Modal />}
    </div>
  );
};

export default SharedLayout;