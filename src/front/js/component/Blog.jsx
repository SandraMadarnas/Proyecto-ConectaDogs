import React from "react";

export const Blog = () => {
    return (
        <section className="blog">
            <div id="blog"></div>
            <div className="container my-4 p-4 border rounded-3">
                <div className="row">
                    <div className="col-12 p-2">
                        <h2>Blog de Gudog</h2>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg"
                                className="img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Vacunas para perros: cuáles poner y cuándo hacerlo</h5>
                                <p className="card-text">Si estás leyendo esto es porque alguna vez te ha asaltado alguna 
                                duda sobre las vacunas para perros. Cuándo ponerlas, cuándo administrar dosis de recuerdo, 
                                si realmente hay alguna vacuna….</p>
                                <a href="#" className="btn btn-primary">Leer más...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2022/03/24/23/29/havanese-7090054_960_720.jpg"
                                className="img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Primavera y alergia en perros: síntomas y cómo actuar</h5>
                                <p className="card-text">La llegada de la primavera significa el inicio de las alergias y no 
                                solo en nosotros los humanos, sino que la alergia en perros, aunque menos conocida, es también 
                                bastante…</p>
                                <a href="#" className="btn btn-primary">Leer más...</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2016/12/23/06/40/pup-1926897_960_720.jpg"
                                className="img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cómo elegir el mejor cuidador de perros estas vacaciones</h5>
                                <p className="card-text">¡Poooor fin empieza la cuenta atrás para las ansiadas vacaciones de Semana 
                                Santa!, y en Gudog queremos echarte una mano a elegir el mejor cuidador de perros para tu compañero….</p>
                                <a href="#" className="btn btn-primary">Leer más...</a>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Ver todas las publicaciones</button>
                </div>
            </div>
        </section >
    );
};