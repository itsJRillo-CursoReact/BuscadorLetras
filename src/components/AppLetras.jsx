import useLetras from "../hooks/useLetras";
import Formulario from "./Formulario";
import Alerta from "./Alerta";
import Letra from "./Letra";
import Spinner from "./Spinner"

const AppLetras = () => {
  const { alerta, cargando, letra } = useLetras();

  return (
    <>
      <header>Búsqueda de Letras</header>

      <Formulario />

      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? <Spinner /> : (
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
