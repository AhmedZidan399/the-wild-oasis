import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3" style={{ marginRight: "1rem" }}>
          Update user data
        </Heading>
        <UpdateUserDataForm />
      </Row>

      <Row type="horizontal">
        <Heading as="h3" style={{ marginRight: "1rem" }}>
          Update password
        </Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
