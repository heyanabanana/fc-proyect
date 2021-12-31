import React from "react";
import { classNames } from "./ClassNames";

export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-medium bg-white text-sm font-medium text-gray-dark hover:bg-gray-50 rounded-sm",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
