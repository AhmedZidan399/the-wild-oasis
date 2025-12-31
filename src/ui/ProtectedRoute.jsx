import { useUser } from "../features/authentication/useUser";
import styled from "styled-components";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //   const navigate = useNavigate();
  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if there is no authenticated user, redirect to the /login page
  //   useEffect(
  //     function () {
  //       if (!isAuthenticated && !isLoading) navigate("/login");
  //     },
  //     [isAuthenticated, isLoading, navigate]
  //   );

  // 2. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 3. if there is no authenticated user, redirect to the /login page
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // 4. if there is a user, render the app
  return children;
}

export default ProtectedRoute;
