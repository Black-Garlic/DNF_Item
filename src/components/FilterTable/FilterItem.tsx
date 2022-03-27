import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFilters, removeFilters } from "@services/DataSlice";
import "@assets/css/styles.css";
import { useAppDispatch, useAppSelector } from "@store/store";

interface FilterProps {
  color: string;
  background: string;
  item: string;
  handleClick: any;
}

export default function FilterItem({
  color,
  background,
  item,
  handleClick,
}: FilterProps) {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.data.filters);

  if (filters.includes(item)) {
    return (
      <td
        onClick={(e) => handleClick(item, false)}
        style={{ color: color, background: background }}
        key={item + "-On"}
      >
        {item}
      </td>
    );
  } else {
    return (
      <td
        onClick={(e) => handleClick(item, true)}
        //style={{ color: color, background: background }}
        key={item + "-Off"}
      >
        {item}
      </td>
    );
  }
}
