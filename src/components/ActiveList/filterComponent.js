import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../Action/Action";
import "./filterComponent.css";

const SelectFilterKey = {
  city: "city",
  cluster: "cluster",
  space_available: "spaceAvailable",
};

const SelectDefaultValue = {
  city: "",
  cluster: "",
  spaceAvailable: "",
};

const FilterComponent = () => {
  // state to store the unique values for each filter
  const [filterOption, setFilterOption] = useState({
    city: [],
    cluster: [],
    spaceAvailable: [],
  });
  // state to store the selected filter
  const [selectedFilter, setSelectedFilter] = useState({
    city: "",
    cluster: "",
    spaceAvailable: "",
  });

  // use redux dispatch to update the state
  const dispatch = useDispatch();

  // use redux selector to get the state
  // initial state is {rawData: [], filteredData: [], selectedWarehouse: null}
  const data = useSelector((state) => state.data);

  const handleFilter = (filterKey, filterValue) => {
    // update the selected filter and reset the other filters
    setSelectedFilter({
      ...SelectDefaultValue,
      [SelectFilterKey[filterKey]]: filterValue,
    });

    // dispatch the action to filter the data
    dispatch(filterData({ key: filterKey, value: filterValue }));
  };

  // get the unique values for each filter
  useEffect(() => {
    const getUniqueCity = () => {
      const uniqueCity = data.rawData.map((item) => item.city);
      return [...new Set(uniqueCity)];
    };
    const getUniqueCluster = () => {
      const uniqueCluster = data.rawData.map((item) => item.cluster);
      return [...new Set(uniqueCluster)];
    };
    const getUniqueSpaceAvailable = () => {
      const uniqueSpaceAvailable = data.rawData.map(
        (item) => item.space_available
      );
      return [...new Set(uniqueSpaceAvailable)];
    };

    setFilterOption({
      city: getUniqueCity(),
      cluster: getUniqueCluster(),
      spaceAvailable: getUniqueSpaceAvailable(),
    });
  }, [data.rawData]);

  // reset the selected filter when the data is updated
  useEffect(() => {
    if (data.filteredData.length === 0) {
      setSelectedFilter(SelectDefaultValue);
    }
  }, [data.filteredData]);

  return (
    <div className="filter-container">
      {/* City Filter */}
      <label className="filter-label">City:</label>
      <select
        value={selectedFilter.city}
        onChange={(e) => handleFilter("city", e.target.value)}
      >
        <option value="">Select a city</option>
        {filterOption.city.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Cluster Filter */}
      <label className="filter-label">Cluster:</label>
      <select
        value={selectedFilter.cluster}
        onChange={(e) => handleFilter("cluster", e.target.value)}
      >
        <option value="">Select a cluster</option>
        {filterOption.cluster.map((cluster) => (
          <option key={cluster} value={cluster}>
            {cluster}
          </option>
        ))}
      </select>

      {/* Is Live Filter */}
      <label className="filter-label">Space Available:</label>
      <select
        value={selectedFilter.spaceAvailable}
        onChange={(e) => handleFilter("space_available", +e.target.value)}
      >
        <option value="">Select space Available</option>
        {filterOption.spaceAvailable.map((spaceAvailable) => (
          <option key={spaceAvailable} value={spaceAvailable}>
            {spaceAvailable}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
