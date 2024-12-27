import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Container,
  Form,
  Pagination,
  Button,
  Modal,
} from "react-bootstrap";
import styled from "styled-components";
import * as XLSX from "xlsx"; // Import the XLSX library
import "./index.css";

const AnimatedTable = styled(Table)`
  tbody tr:hover {
    transform: scale(1.02);
  }
  tbody tr:hover td {
    color: #fff; /* White text on hover */
    box-shadow: inset 0 0 0 9999px #28a745; /* Green background on hover */
  }
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const FilterGroup = styled(Form.Group)`
  flex: 1;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0; /* No margin for the last element */
  }
`;

const StyledPagination = styled(Pagination)`
  .page-item.active .page-link {
    background-color: #28a745; /* Green background for active page */
    border-color: #28a745; /* Match border color */
    color: white; /* White text color for links */
  }

  .page-link {
    color: #28a745; /* Green background for links */
  }

  .page-link:hover {
    background-color: #218838; /* Darker green on hover */
    color: white; /* Maintain white text on hover */
  }
`;

const Report = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    country: "",
    search: "",
    promotions: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt", // Default sorting by "createdAt"
    direction: "descending", // Most recent first
  });
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [userIdToDelete, setUserIdToDelete] = useState(null); // Store user ID to delete
  const apiUrl = process.env.REACT_APP_PUBLIC_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/users`, {
          headers: {
            Authorization: `Bearer wIz@rd_Adm1n_T0k3n!2024`,
          },
        });
        setUsers(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : "Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const uniqueCountries = [...new Set(users.map((user) => user.countryName))];

  const filteredUsers = users.filter((user) => {
    const matchesCountry = filters.country
      ? user.countryName === filters.country
      : true;
    const matchesSearch =
      user.Firstname.toLowerCase().includes(filters.search.toLowerCase()) ||
      user.Lastname.toLowerCase().includes(filters.search.toLowerCase());
    const matchesPromotions = filters.promotions
      ? filters.promotions === "yes"
        ? user.promotions
        : !user.promotions
      : true;

    return matchesCountry && matchesSearch && matchesPromotions;
  });

  // Sorting logic
  const requestSort = (key) => {
    let direction = "ascending";
    // If already sorted by the same key, toggle the direction
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedUsers = React.useMemo(() => {
    let sortableUsers = [...filteredUsers];

    // If sorting by "createdAt", ensure the default behavior is descending (most recent first)
    if (sortConfig.key === "createdAt") {
      sortableUsers.sort((a, b) => {
        return sortConfig.direction === "ascending"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else {
      // Sort alphabetically by the selected key (e.g., Firstname, Lastname, etc.)
      sortableUsers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return sortableUsers;
  }, [filteredUsers, sortConfig]);

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

  const displayedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    setFilters({
      country: "",
      search: "",
      promotions: "",
    });
    setCurrentPage(1); // Reset to first page
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Format "Created At" date for frontend
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // New function to handle exporting data to Excel
  const handleExportToExcel = () => {
    // Prepare the data
    const exportData = filteredUsers.map((user) => ({
      createdAt: formatDate(user.createdAt),
      IpAddress: user.IpAddress,
      Firstname: user.Firstname,
      Lastname: user.Lastname,
      Email: user.Email,
      Phone: user.phone,
    }));

    // Create a new workbook
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    // Export the workbook to a file
    XLSX.writeFile(workbook, "UsersReport.xlsx");
  };

  const handleRemoveUser = async () => {
    try {
      await axios.delete(`${apiUrl}/api/users/${userIdToDelete}`, {
        headers: {
          Authorization: `Bearer wIz@rd_Adm1n_T0k3n!2024`,
        },
      });
      setUsers(users.filter((user) => user._id !== userIdToDelete)); // Update state to remove the user
      setShowModal(false); // Close modal after deleting
    } catch (err) {
      setError(err.response ? err.response.data : "Error deleting user");
      setShowModal(false); // Close modal even if there's an error
    }
  };

  const showConfirmationModal = (userId) => {
    setUserIdToDelete(userId);
    setShowModal(true); // Show confirmation modal
  };

  return (
    <>
      <Container className="my-4">
        <FilterRow>
          <FilterGroup className="exportbtn">
            <Button className="btn btn-success" onClick={handleExportToExcel}>
              Export to Excel
            </Button>
          </FilterGroup>
        </FilterRow>
      </Container>
      <Container className="my-4">
        <FilterRow className="FilterRow">
          <FilterGroup className="FilterRowflex">
            <Form.Label>Search</Form.Label>
            <Form.Control
              type="text"
              name="search"
              placeholder="Search by name"
              value={filters.search}
              onChange={handleFilterChange}
            />
          </FilterGroup>

          {/* <FilterGroup>
            <Form.Label>Filter by Country</Form.Label>
            <Form.Select
              name="country"
              value={filters.country}
              onChange={handleFilterChange}
            >
              <option value="">All Countries</option>
              {uniqueCountries
                .filter((country) => country) // Filter out empty options
                .map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
            </Form.Select>
          </FilterGroup> */}

          {/* <FilterGroup>
            <Form.Label>Filter by Promotions</Form.Label>
            <Form.Select
              name="promotions"
              value={filters.promotions}
              onChange={handleFilterChange}
            >
              <option value="">All Promotions</option>
              <option value="yes">Has Promotions</option>
              <option value="no">No Promotions</option>
            </Form.Select>
          </FilterGroup> */}
          <FilterGroup>
            <Button className="btn btn-dark" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </FilterGroup>
        </FilterRow>

        <div className="tableoverflow">
          <AnimatedTable className="tableline" bordered hover variant="light">
            <thead style={{ backgroundColor: "white", color: "#28a745" }}>
              <tr>
                <th>Created At</th>
                <th>IP Address</th>
                <th
                  onClick={() => requestSort("Firstname")}
                  style={{ cursor: "pointer" }}
                >
                  First Name <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th
                  onClick={() => requestSort("Lastname")}
                  style={{ cursor: "pointer" }}
                >
                  Last Name <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th
                  onClick={() => requestSort("Email")}
                  style={{ cursor: "pointer" }}
                >
                  Email <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th
                  onClick={() => requestSort("phone")}
                  style={{ cursor: "pointer" }}
                >
                  Phone <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th>Action</th>
                {/* <th
                  onClick={() => requestSort("countryName")}
                  style={{ cursor: "pointer" }}
                >
                  Country <i className="fa fa-sort" aria-hidden="true"></i>
                </th>
                <th
                  onClick={() => requestSort("promotions")}
                  style={{ cursor: "pointer" }}
                >
                  Promotions <i className="fa fa-sort" aria-hidden="true"></i>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {displayedUsers.map((user) => (
                <tr key={user._id}>
                  <td>{formatDate(user.createdAt)}</td>
                  <td>{user.IpAddress}</td>
                  <td>{user.Firstname}</td>
                  <td>{user.Lastname}</td>
                  <td>{user.Email}</td>
                  <td>{user.phone}</td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      className="remove_button"
                      onClick={() => showConfirmationModal(user._id)}
                    >
                      Remove
                    </Button>
                  </td>
                  {/* <td>{user.countryName}</td>
                  <td>{user.promotions ? "Yes" : "No"}</td> */}
                </tr>
              ))}
            </tbody>
          </AnimatedTable>
        </div>
        {totalPages > 1 && (
          <StyledPagination className="justify-content-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </StyledPagination>
        )}
      </Container>
      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this detail?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={handleRemoveUser}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Report;
