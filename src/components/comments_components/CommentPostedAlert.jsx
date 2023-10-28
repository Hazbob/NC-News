import { FcApproval, FcCancel } from "react-icons/fc";

function CommentPostedAlert({ error }) {
  const image = error ? <FcCancel /> : <FcApproval />;
  return !error ? (
    <p className={"comment-alert"}>Comment Posted: {image}</p>
  ) : (
    <p className={"comment-alert"}>Comment Not Posted: {image}</p>
  );
}
export default CommentPostedAlert;
