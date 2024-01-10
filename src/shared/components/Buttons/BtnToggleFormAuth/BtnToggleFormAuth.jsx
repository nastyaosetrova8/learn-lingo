import { BtnToggleFormAuthS } from "./BtnToggleFormAuthStyled";


const BtnToggleFormAuth = ({ children, name, onClick }) => {
  return (
    <>
      <BtnToggleFormAuthS type="button" name={name} onClick={onClick}>{children}</BtnToggleFormAuthS>
    </>
  );
};

export default BtnToggleFormAuth;
