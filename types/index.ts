import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SetManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarModel {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarProps {
    car: CarModel
}

export interface filterProps {
  manufacturer: string;
  year: number; 
  fuel: string;
  limit: number;
  model: string;
}

export interface optionProps{
  title: string;
  value: string;
}

export interface customFilterProps{
  title: string;
  options: optionProps[];
}

export interface showMoreProps{
  pageNo: number;
  isNext: boolean;
}