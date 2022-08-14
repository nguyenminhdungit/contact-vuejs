const NAME_REX = /^[a-zA-Z]+ [a-zA-Z]+$/;
const EMAIL_REX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_REX = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

const REX = {
  NAME_REX,
  EMAIL_REX,
  PHONE_REX,
};
export default REX;
