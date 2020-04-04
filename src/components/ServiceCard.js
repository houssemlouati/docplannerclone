import React from "react";

const ServiceCard = props =>
  props.service.map(service => {
    return (
      <div className="service-card" style={{ background: service.background }}>
        <p className="category">{service.category}</p>
        <h1 className="title">{service.title}</h1>
        <div className="image">
          {service.list ? (
            <select className="List">
              {service.list.map(country => {
                return <option value={country.value}>{country.name}</option>;
              })}
            </select>
          ) : (
            <div Style="padding: 70px;" />
          )}
          <img className="screenshot" src={service.image} alt="" />
        </div>
      </div>
    );
  });

export default ServiceCard;
