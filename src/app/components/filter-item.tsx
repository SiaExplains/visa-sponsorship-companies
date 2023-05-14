import { ReactNode } from "react";

type FilterItemProps = {
  children: ReactNode;
};
const FilterItem = ({ children }: FilterItemProps) => {
  return <div className="filter-item">{children}</div>;
};

export default FilterItem;

export type { FilterItemProps };
