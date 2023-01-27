import { useRouteError, Link } from "react-router-dom";
import { Header } from "./Header";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <main className="error">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Go back to the homepage...</Link>
        <img src="../404.jpg" alt="Page not found" />
      </main>
    </>
  );
}
