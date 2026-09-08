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
    if (isActive) {
      const newSortType = isAsc ? DESCENDING : ASCENDING;

      setSortType(newSortType);
      onSortTypeChange(title, newSortType);

      return;
    }

    onSortTypeChange(title, sortType);
  };

  return (
    <th onClick={handleChangeSort}>
      {title.charAt(0).toUpperCase() + title.slice(1)}

      {isActive && (
        <span aria-hidden="true">
          {isAsc ? " ↓" : " ↑"}
        </span>
      )}
    </th>
  );
};

export default SortableHeader;

export type { SortType };