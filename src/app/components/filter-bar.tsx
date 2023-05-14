import { ReactNode } from "react";

type FilterBarProps = {
  children: ReactNode;
};
const FilterBar = ({ children }: FilterBarProps) => {
  return <div className="filter-bar">{children}</div>;
};

export default FilterBar;

export type { FilterBarProps };
