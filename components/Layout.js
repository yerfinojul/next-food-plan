import React from "react";
import { withAuthUser, AuthAction, useAuthUser } from "next-firebase-auth";
import Header from "./Header";
import Container from "@mui/material/Container";

const Layout = ({ children }) => {
  const AuthUser = useAuthUser();
  return (
    <>
      <Header
        email={AuthUser.email}
        photoURL={AuthUser.photoURL}
        signOut={AuthUser.signOut}
      />
      <Container>{children}</Container>
    </>
  );
};

const LayoutWithUser = withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
})(Layout);

export const getLayout = (page) => <LayoutWithUser>{page}</LayoutWithUser>;

export default LayoutWithUser;
