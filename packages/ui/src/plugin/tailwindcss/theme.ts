import type { Config } from "tailwindcss";
import { colorsAsVariablesRef } from "./colors";

export const backgroundImage = {
  "arrow-down-icon":
    "url('data:image/svg+xml,%3Csvg%20aria-hidden%3D%22true%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2010%206%22%3E%3Cpath%20stroke%3D%22%236B7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22m1%201%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')",
  "check-icon":
    "url('data:image/svg+xml,%3Csvg%20aria-hidden%3D%27true%27%20xmlns%3D%27http://www.w3.org/2000/svg%27%20fill%3D%27none%27%20viewBox%3D%270%200%2016%2012%27%3E%3Cpath%20stroke%3D%27white%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27%20stroke-width%3D%273%27%20d%3D%27M1%205.917%205.724%2010.5%2015%201.5%27/%3E%3C/svg%3E')",
  "dash-icon":
    "url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2016%2012%22%3E%3Cpath%20stroke%3D%22white%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%223%22%20d%3D%22M0.5%206h14%22%2F%3E%3C%2Fsvg%3E')",
  "dot-icon":
    "url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22white%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%2F%3E%3C%2Fsvg%3E')",
} as const;

export const boxShadow = {
  "sm-light": "0 2px 5px 0px rgba(255, 255, 255, 0.08)",
} as const;

export const theme: Config["theme"] = {
  backgroundImage,
  boxShadow,
  colors: colorsAsVariablesRef,
};
