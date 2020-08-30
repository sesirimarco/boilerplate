const Loading = ({ isLoading }) => {
	return (
		<>
			{isLoading && <p>Cargando...</p>}
		</>
	);
};
export default Loading;