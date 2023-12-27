import React from "react";

const muestraResumenDePost = (cuerpo) => {
	let cuerpoSpliced = cuerpo.split(".")[0];

	if (cuerpoSpliced.length > 180) {
		return cuerpo.slice(0, 180);
	} else {
		return cuerpo.split(".")[0];
	}
};

const ProyectoIndividual = ({ proyecto }) => {
	return (
		<div className='card-proyecto'>
			<h2>{proyecto.attributes.titulo}</h2>
			<p>{muestraResumenDePost(proyecto.attributes.cuerpo)}...</p>
		</div>
	);
};

export default ProyectoIndividual;
