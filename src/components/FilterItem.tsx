import React, { useEffect } from "react";
import "@assets/css/styles.css";

interface FilterProps {
  color: string;
  background: string;
  item: string;
  addFilter: any;
  removeFilter: any;
  filters: string[];
}

export default function FilterItem({
  color,
  background,
  item,
  addFilter,
  removeFilter,
  filters,
}: FilterProps) {
  if (filters.includes(item)) {
    return (
      <td
        onClick={(e) => removeFilter(item)}
        style={{ color: color, background: background }}
        key={item + "-On"}
      >
        {item}
      </td>
    );
  } else {
    return (
      <td
        onClick={(e) => addFilter(item)}
        //style={{ color: color, background: background }}
        key={item + "-Off"}
      >
        {item}
      </td>
    );
  }
}
