import React, { useCallback, useEffect, useState } from "react";
import "@assets/css/styles.css";
import FilterTable from "@components/FilterTable";
import DataTable from "@components/DataTable";
import DungeonTable from "@components/DungeonTable";

function Home() {
  const [filters, setFilters] = useState<string[]>([]);
  const addFilter = (filter: string) => {
    if (filters.includes(filter)) return;
    let newFilter: string[] = [...filters];
    newFilter.push(filter);
    setFilters(newFilter);
  };

  const removeFilter = (filter: string) => {
    let newFilter: string[] = [];
    filters.map((value) => {
      if (value !== filter) {
        newFilter.push(value);
      }
    });
    setFilters(newFilter);
  };

  return (
    <main>
      <div className="container-fluid px-4">
        <FilterTable
          addFilter={addFilter}
          removeFilter={removeFilter}
          filters={filters}
        />
        <DataTable filters={filters} />
      </div>
    </main>
  );
}

export default Home;
