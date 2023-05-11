import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GET_User } from "../../services/USERFetchs.js";
import "./CaregiversStyles.css";

const CaregiverInfo = () => {
  const params = useParams();

  const [dogsitter, setDogsitter] = useState({});
  useEffect(() => {
    GET_User(params.id).then((data) => {
      // console.log(data.user)
      setDogsitter(data.user);
    });
  }, []);

  return (
    <>
      <div className="caregivers">
        <div className="header">
          <h1 className="text-center p-4">BUSCAR CUIDADOR</h1>
        </div>
      </div>

      <div className="container border border-primary shadow my-4">
        <div className="p-4">
          <h3 className="text-body-emphasis text-center pb-4">
            Contacta con: <b>{dogsitter.name}</b>
          </h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={dogsitter.userPhoto}
                className="img-fluid rounded-start"
                width={300}
                alt="..."
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="text-body-emphasis pt-4">Provincia</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> {dogsitter.province}
              </p>

              <h4 className="text-body-emphasis pt-4">
                Sobre {dogsitter.name}
              </h4>
              <p>{dogsitter.aboutMe ? dogsitter.aboutMe : ""}</p>

              <h4 className="text-body-emphasis pt-4">Servicios y Tarifas:</h4>
              <p>Servicios y Tarifas:</p>
              {/* <p>{service_id}</p>
              <p>{price}</p> */}
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Link to="/caregivers-list" className="action-button shadow animate red">
              Ir Atrás
            </Link>
            <Link to="/hire-caregiver" className="action-button shadow animate blue">
              Contratar
            </Link>
          </div>

          <Link
            to="#navbar"
            className="simplescrollup__button simplescrollup__button--hide"
            spy="true"
            smooth="true"
            duration={800}
          >
            <h2>
              <i className="fas fa-arrow-circle-up"></i>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CaregiverInfo;
