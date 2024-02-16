import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title,disabled, onClick }: IButtonProps) => {


   if(disabled===false){
    return  <ButtonContainer disabled onClick={onClick}>{title}</ButtonContainer>;
  }else {
    return  <ButtonContainer  onClick={onClick}>{title}</ButtonContainer>;
  }
   
};

export default Button;
