import React, { useRef } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextBox from '../TextBox';

interface SignOnBaseProps {}

interface SignOnLoginProps extends SignOnBaseProps {
  login: true;
}

interface SignOnSignUpProps extends SignOnBaseProps {
  signup: true;
}

type SignOnProps = SignOnLoginProps | SignOnSignUpProps;

const useStyles = makeStyles({
  container: {
    backgroundColor: "#f5f5f5",
    maxWidth: "inherit",
  },
})

const SignOn: React.FC<SignOnProps> = ({children, ...mode}) => {
  const box1 = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const r = (() => {
    if (mode.hasOwnProperty("login")) return ""
    return undefined
  })();

  return (
    <>
      <TextBox id="Name" user product="Name" ref={box1}></TextBox>
    </>
  );
};

export default SignOn;
