import { ReactNode } from "react";

export interface Memory {
  id: number;
  date: string;
  title: string;
  description: string | ReactNode;
  imageUrl?: string;
}
export interface Gallery {
  id: number;
  type: string;
  title: string;
  imageUrl?: string;
}

export interface Message {
  id: number;
  text: string;
  author: string;
}

export interface FunFact {
  id: number;
  text: string;
  icon: string;
}