import { useState } from "react";
import type { Company } from "../types/company.model";
import { ASCENDING, DESCENDING } from "../constants/constants";

type SortType = "ASC" | "DESC" | null;
type SortableHeaderProps = {
  title: keyof Company;
  isActive: boolean;
  onSortTypeChange: (
    sortedColumnName: keyof Company,
    sortType: SortType
  ) => void;
};

const SortableHeader = ({
  title,
  isActive,
  onSortTypeChange,
}: SortableHeaderProps) => {
  const [sortType, setSortType] = useState<SortType>(ASCENDING);
  const isAsc = sortType === ASCENDING;

  const handleChangeSort = () => {
    if(isActive){
      setSortType(isAsc ? DESCENDING : ASCENDING);
      onSortTypeChange(title, isAsc ? DESCENDING : ASCENDING);
      return;
    }

    onSortTypeChange(title, sortType);
  };

  return (
    <th onClick={handleChangeSort}>
      {title.charAt(0).toUpperCase() + title.slice(1)}
      {isActive && <span> {isAsc ? "🔽" : "🔼"}</span>}
    </th>
  );
};

export default SortableHeader;

export type { SortType };
