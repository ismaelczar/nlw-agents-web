import { Navigate, useParams } from 'react-router-dom';

export function Room() {
  const params = useParams();

  if (!params.id) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <h1>Roomes</h1>
      <p>{`ID: ${params.id}`}</p>
    </>
  );
}
