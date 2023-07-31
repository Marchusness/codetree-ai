import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  editor_state,
  toggle_logs_tab,
} from "../../store/features/editorSlice";
import { compiler_state } from "../../store/features/compilerSlice";
import { RiTerminalLine } from "react-icons/ri";

const Footer = () => {
  const { logs } = useAppSelector(editor_state);
  const { isCompiling } = useAppSelector(compiler_state);
  const dispatch = useAppDispatch();

  return (
    <div
      style={{ height: "2rem" }}
      className="h-full w-full flex items-center justify-between bg-tree-hard border-t-2 border-black text-gray-300 pl-5 pb-0.5 flex-shrink-0 z-50"
    >
      <div className="flex items-center">
        {isCompiling && (
          <div className="ml-10">
            <span className="loader --1" />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <div
          onClick={() => dispatch(toggle_logs_tab())}
          className="flex items-center cursor-pointer text-gray-400"
        >
          <RiTerminalLine size={20} />
        </div>

        <div className="ml-2  w-6">
          {logs.length > 0 && (
            <div className="h-5 w-5 flex justify-center items-center">
              <div className="absolute p-1.5 bg-teal-400 rounded-full animate-ping" />
              <div className="absolute p-1 bg-teal-400  border-white rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
