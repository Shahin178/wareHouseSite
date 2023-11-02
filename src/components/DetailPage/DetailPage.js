import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_DATA, selectedWarehouseEditAction } from "../Action/Action";
import "./DetailPage.css";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedWarehouse = useSelector((state) =>
    state.data.rawData.find((warehouse) => warehouse.id === parseInt(id))
  );

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ key: "", value: "" });

  if (!selectedWarehouse) {
    return <div className="not-found">Warehouse not found</div>;
  }

  const handleEdit = (key, value) => {
    setIsEditing(true);
    setEditedData({ key, value });
  };

  const handleSave = () => {
    if (selectedWarehouse && editedData.key !== "") {
      dispatch(selectedWarehouseEditAction(editedData));
      dispatch({ type: UPDATE_DATA });
      setIsEditing(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, key: name, value });
  };

  const renderField = (fieldName, fieldKey, fieldValue) => {
    return (
      <p key={fieldKey}>
        <strong>{fieldName}:</strong>{" "}
        {isEditing && editedData.key === fieldKey ? (
          <input
            type="text"
            name={fieldKey}
            value={editedData.value}
            onChange={handleInputChange}
          />
        ) : (
          fieldValue
        )}
        {!isEditing && (
          <button
            className="edit-button"
            onClick={() => handleEdit(fieldKey, fieldValue)}
          >
            Edit
          </button>
        )}
        {isEditing && editedData.key === fieldKey && (
          <button className="edit-button" onClick={handleSave}>
            Save
          </button>
        )}
      </p>
    );
  };

  const {
    name,
    img,
    code,
    city,
    space_available,
    type,
    cluster,
    is_registered,
    is_live,
  } = selectedWarehouse;

  return (
    <div className="detail-container">
      <Link to="/activeList" className="back-link">
        &lt; Back to Active Listings
      </Link>
      <h1 className="detail-heading">Warehouse Detail</h1>
      <div className="image-container">
        <img src={img} alt={name} className="warehouse-image" />
      </div>
      <div className="warehouse-details">
        <h2>{name}</h2>
        {renderField("Code", "code", code)}
        {renderField("City", "city", city)}
        {renderField("Space Available", "space_available", space_available)}
        {renderField("Type", "type", type)}
        {renderField("Cluster", "cluster", cluster)}
        {renderField(
          "Is Registered",
          "is_registered",
          is_registered ? "Yes" : "No"
        )}
        {renderField("Is Live", "is_live", is_live ? "Yes" : "No")}
      </div>
    </div>
  );
};

export default DetailPage;
