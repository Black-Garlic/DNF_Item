import React, { useCallback, useEffect, useState } from "react";
import "@assets/css/styles.css";
import FilterTable from "@components/FilterTable/FilterTable";
import DataTable from "@components/DataTable/DataTable";
import DungeonTable from "@components/DungeonTable";
import EquipTable from "@components/EquipTable/EquipTable";
import EquipPartTable from "@components/EquipTable/EquipPartTable";

function Home() {
  const [type, setType] = useState("전체");

  return (
    <main>
      <div className="container-fluid px-4">
        <table
          className={"dataTable-table"}
          style={{
            fontSize: 12,
            position: "fixed",
            top: 56,
            left: 0,
            backgroundColor: "#fff",
          }}
        >
          <thead>
            <tr>
              <th
                onClick={() => setType("전체")}
                style={{ width: "50%", textAlign: "center" }}
              >
                전체
              </th>
              <th
                onClick={() => setType("장착 장비")}
                style={{ width: "50%", textAlign: "center" }}
              >
                장착 장비
              </th>
            </tr>
          </thead>
        </table>
        {type === "전체" ? (
          <div style={{ marginTop: 65 }}>
            <FilterTable />
            <DungeonTable />
            <DataTable />
          </div>
        ) : (
          <div style={{ marginTop: 65 }}>
            <EquipPartTable />
            <DungeonTable />
            <EquipTable />
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;
