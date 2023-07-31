import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { theme_state } from "../store/features/themeSlice";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(theme_state);
  return (
    <div
      style={{ height: "3rem", background: theme.background }}
      className="flex items-center pl-5 pr-12 justify-between"
    >
      <div>
        <div className="text-2xl font-medium text-gray-200">
          Codetree AI
        </div>
      </div>
    </div>
  );
};
