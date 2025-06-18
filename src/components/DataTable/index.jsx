import { useState } from "react";
import "./index.css";

const data = [
  {
    name: "Pranjal",
    serviceName: "PM",
    date: "2011/11/28",
    profit: "$162,700",
  },
  {
    name: "paritosh",
    serviceName: "PM",
    date: "2007/10/09",
    profit: "$1,200,000",
  },
  { name: "palav", serviceName: "B2b", date: "2009/01/12", profit: "$86,000" },
  {
    name: "Moumita",
    serviceName: "HR",
    date: "2012/10/13",
    profit: "$132,000",
  },
  {
    name: "Mitesh",
    serviceName: "Graphics",
    date: "2011/06/07",
    profit: "$206,850",
  },
  {
    name: "Srinivas",
    serviceName: "Frontend",
    date: "2012/12/02",
    profit: "$372,000",
  },
  {
    name: "hritik",
    serviceName: "Graphics",
    date: "2011/05/03",
    profit: "$163,500",
  },
  { name: "abc", serviceName: "HR", date: "2011/12/12", profit: "$106,450" },
  { name: "xyz", serviceName: "B2b", date: "2011/12/06", profit: "$145,600" },
  { name: "bcd", serviceName: "B2b", date: "2012/03/29", profit: "$433,060" },
  {
    name: "Extra1",
    serviceName: "Dev",
    date: "2020/01/01",
    profit: "$100,000",
  },
  { name: "Extra2", serviceName: "QA", date: "2020/02/01", profit: "$200,000" },
  {
    name: "Extra3",
    serviceName: "Design",
    date: "2020/03/01",
    profit: "$300,000",
  },
  {
    name: "Extra4",
    serviceName: "Support",
    date: "2020/04/01",
    profit: "$400,000",
  },
  {
    name: "Extra5",
    serviceName: "Sales",
    date: "2020/05/01",
    profit: "$500,000",
  },
  {
    name: "Extra6",
    serviceName: "Marketing",
    date: "2020/06/01",
    profit: "$600,000",
  },
  { name: "Extra7", serviceName: "HR", date: "2020/07/01", profit: "$700,000" },
  {
    name: "Extra8",
    serviceName: "Finance",
    date: "2020/08/01",
    profit: "$800,000",
  },
  {
    name: "Extra9",
    serviceName: "Legal",
    date: "2020/09/01",
    profit: "$900,000",
  },
  {
    name: "Extra10",
    serviceName: "Logistics",
    date: "2020/10/01",
    profit: "$150,000",
  },
  {
    name: "Extra11",
    serviceName: "R&D",
    date: "2020/11/01",
    profit: "$250,000",
  },
  {
    name: "Extra12",
    serviceName: "PR",
    date: "2020/12/01",
    profit: "$350,000",
  },
  {
    name: "Extra13",
    serviceName: "Client",
    date: "2021/01/01",
    profit: "$450,000",
  },
  {
    name: "Extra14",
    serviceName: "Data",
    date: "2021/02/01",
    profit: "$550,000",
  },
  {
    name: "Extra15",
    serviceName: "Cloud",
    date: "2021/03/01",
    profit: "$650,000",
  },
  {
    name: "Extra16",
    serviceName: "AI",
    date: "2021/04/01",
    profit: "$750,000",
  },
  {
    name: "Extra17",
    serviceName: "IoT",
    date: "2021/05/01",
    profit: "$850,000",
  },
  {
    name: "Extra18",
    serviceName: "VR",
    date: "2021/06/01",
    profit: "$950,000",
  },
  {
    name: "Extra19",
    serviceName: "AR",
    date: "2021/07/01",
    profit: "$110,000",
  },
  {
    name: "Extra20",
    serviceName: "Block",
    date: "2021/08/01",
    profit: "$210,000",
  },
  {
    name: "Extra21",
    serviceName: "Quantum",
    date: "2021/09/01",
    profit: "$310,000",
  },
  {
    name: "Extra22",
    serviceName: "Robotics",
    date: "2021/10/01",
    profit: "$410,000",
  },
  {
    name: "Extra23",
    serviceName: "Cyber",
    date: "2021/11/01",
    profit: "$510,000",
  },
  {
    name: "Extra24",
    serviceName: "Network",
    date: "2021/12/01",
    profit: "$610,000",
  },
  {
    name: "Extra25",
    serviceName: "Security",
    date: "2022/01/01",
    profit: "$710,000",
  },
  {
    name: "Extra26",
    serviceName: "Systems",
    date: "2022/02/01",
    profit: "$810,000",
  },
  {
    name: "Extra27",
    serviceName: "Arch",
    date: "2022/03/01",
    profit: "$910,000",
  },
  {
    name: "Extra28",
    serviceName: "Admin",
    date: "2022/04/01",
    profit: "$120,000",
  },
  {
    name: "Extra29",
    serviceName: "General",
    date: "2022/05/01",
    profit: "$220,000",
  },
  {
    name: "Extra30",
    serviceName: "Support",
    date: "2022/06/01",
    profit: "$320,000",
  },
  {
    name: "Extra31",
    serviceName: "Consult",
    date: "2022/07/01",
    profit: "$420,000",
  },
  {
    name: "Extra32",
    serviceName: "Training",
    date: "2022/08/01",
    profit: "$520,000",
  },
  {
    name: "Extra33",
    serviceName: "Install",
    date: "2022/09/01",
    profit: "$620,000",
  },
  {
    name: "Extra34",
    serviceName: "Maintain",
    date: "2022/10/01",
    profit: "$720,000",
  },
  {
    name: "Extra35",
    serviceName: "Upgrade",
    date: "2022/11/01",
    profit: "$820,000",
  },
  {
    name: "Extra36",
    serviceName: "Develop",
    date: "2022/12/01",
    profit: "$920,000",
  },
  {
    name: "Extra37",
    serviceName: "Design",
    date: "2023/01/01",
    profit: "$130,000",
  },
  {
    name: "Extra38",
    serviceName: "Test",
    date: "2023/02/01",
    profit: "$230,000",
  },
  {
    name: "Extra39",
    serviceName: "Deploy",
    date: "2023/03/01",
    profit: "$330,000",
  },
  {
    name: "Extra40",
    serviceName: "Monitor",
    date: "2023/04/01",
    profit: "$430,000",
  },
  {
    name: "Extra41",
    serviceName: "Optimize",
    date: "2023/05/01",
    profit: "$530,000",
  },
  {
    name: "Extra42",
    serviceName: "Migrate",
    date: "2023/06/01",
    profit: "$630,000",
  },
  {
    name: "Extra43",
    serviceName: "Audit",
    date: "2023/07/01",
    profit: "$730,000",
  },
  {
    name: "Extra44",
    serviceName: "Plan",
    date: "2023/08/01",
    profit: "$830,000",
  },
  {
    name: "Extra45",
    serviceName: "Review",
    date: "2023/09/01",
    profit: "$930,000",
  },
  {
    name: "Extra46",
    serviceName: "Report",
    date: "2023/10/01",
    profit: "$140,000",
  },
  {
    name: "Extra47",
    serviceName: "Analyze",
    date: "2023/11/01",
    profit: "$240,000",
  },
];

const DataTable = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const totalEntries = filteredData.length;
  const showingFrom = totalEntries === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, totalEntries);

  const getPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 7;
    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-button ${currentPage === i ? "active" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="data-table-container">
      <div className="table-controls">
        <div className="entries-per-page">
          <label htmlFor="show-entries">Show</label>
          <select
            id="show-entries"
            value={entriesPerPage}
            onChange={(e) => {
              setEntriesPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="entries-select"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <span>Entries</span>
        </div>
        <div className="search-box">
          <label htmlFor="table-search-input">Search:</label>
          <input
            id="table-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="table-search-input"
            placeholder=""
          />
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th className="table-header name-header">Name</th>
              <th className="table-header">Service Name</th>
              <th className="table-header">Date</th>
              <th className="table-header">Profit</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="table-data">{row.name}</td>
                <td className="table-data">{row.serviceName}</td>
                <td className="table-data">{row.date}</td>
                <td className="table-data">{row.profit}</td>
              </tr>
            ))}
            {currentData.length === 0 && (
              <tr>
                <td colSpan="4" className="no-data">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="table-pagination">
        <span className="pagination-info">
          Showing {showingFrom} to {showingTo} of {totalEntries} entries
        </span>
        <div className="pagination-buttons-group">
          <button
            className="pagination-button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {getPaginationButtons()}
          <button
            className="pagination-button"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
