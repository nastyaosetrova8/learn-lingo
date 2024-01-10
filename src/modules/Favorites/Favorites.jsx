import { useDispatch, useSelector } from "react-redux";
import {
  BsFillArrowLeftSquareFillStyled,
  FavoriteEmptyText,
  FavoriteTitleStyled,
  FindStyled,
  RemoveAllBtnStyled,
  WrapperLinkStyled,
} from "./FavoritesStyled";
import { Link } from "react-router-dom";
import { TeacherPageStyled } from "../Teachers/TecherList/TeacherListStyled";
import TeacherItem from "../Teachers/TeacherItem/TeacherItem";
import {
  removeAllFavorites,
  toggleFavorite,
} from "../../redux/favorites/favoritesSlise";
import { chosenTeacherId, toggleShowModal } from "../../redux/modal/modalSlice";
import { selectFavorite } from "../../redux/favorites/favoritesSelectors";

const Favorites = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectFavorite);
  const favorites = useSelector((state) => state.favorite);

  const handleOpenModal = (e) => {
    const currentTeacher = cards.find(
      (item) => item.id === Number(e.currentTarget.id)
    );
    dispatch(toggleShowModal(e.currentTarget.name));
    dispatch(chosenTeacherId(currentTeacher));
  };

  const handleToggleFavorite = (favoriteItem) => {
    dispatch(toggleFavorite(favoriteItem));
  };

  const handleRemoveAllFavorites = (favoriteItem) => {
    dispatch(removeAllFavorites(favoriteItem));
  };

  return (
    <>
      <FavoriteTitleStyled>Favorite Teachers</FavoriteTitleStyled>
      {favorites.favoriteItems.length === 0 ? (
        <div>
          <FavoriteEmptyText>This page is empty</FavoriteEmptyText>
          <WrapperLinkStyled>
            <Link to="/teachers">
              <BsFillArrowLeftSquareFillStyled />
              <FindStyled>Search for a teacher</FindStyled>
            </Link>
          </WrapperLinkStyled>
        </div>
      ) : (
        <div>
          <TeacherPageStyled>
            {favorites.favoriteItems?.map((favoriteItem) => {
              return (
                <TeacherItem
                  key={favoriteItem.id}
                  {...favoriteItem}
                  onOpenModal={handleOpenModal}
                  onFavorite={() => handleToggleFavorite(favoriteItem)}
                />
              );
            })}
          </TeacherPageStyled>
          <div>
            <RemoveAllBtnStyled
              type="button"
              onClick={() => handleRemoveAllFavorites()}
            >
              Remove all
            </RemoveAllBtnStyled>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
