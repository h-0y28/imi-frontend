import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const SignUpContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  background: vars.color.background,
});

export const LogoContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '9.375rem',
  height: '9.375rem',
  background: vars.color.white,
  borderRadius: '50%',
  marginBottom: '2.5rem',
});

export const InputContainer = style({
  display: 'flex',
  width: '30rem',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const InputNameContainer = style({
  display: 'flex',
  width: '30.125rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const InputStudentIdContainer = style({
  display: 'flex',
  width: '30.125rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const InputStudentId = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.white,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputStudentIdError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  padding: '1rem',
  background: vars.color.white,
  justifyContent: 'space-between',
  width: '30.125rem',
  border: `1px solid ${vars.color.red}`,
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputStudentIdVariants = styleVariants({
  default: [InputStudentId],
  error: [inputStudentIdError],
});

export const InputName = style({
  display: 'flex',
  alignItems: 'center',
  background: vars.color.white,
  border: `1px solid ${vars.color.primary}`,
  borderRadius: '8px',
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputNameError = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  background: vars.color.white,
  padding: '1rem',
  justifyContent: 'space-between',
  width: '30.125rem',
  height: '3.125rem',
  border: `1px solid ${vars.color.red}`,
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const inputNameVariants = styleVariants({
  default: [InputName],
  error: [inputNameError],
});

export const InputBox = style({
  border: 'none',
  color: 'black',
  width: '100%',
  background: vars.color.background,
  selectors: {
    '&:placehorder': {
      color: vars.color.gray,
      background: 'none',
    },
    '&:valid': {
      background: 'none',
    },
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const Text = style({
  color: ' #1E1E1E',
  textAlign: 'center',
  fontSize: '1rem',
  padding: '0 0 0.25rem 0.58rem',
});

export const UnderText = style({
  color: ' #1E1E1E',
  textAlign: 'center',
  fontSize: '1rem',
});

export const SignoutText = style({
  color: ' #1E1E1E',
  textAlign: 'center',
  fontSize: '1rem',
});

export const GrayText = style({
  color: vars.color.gray,
  textAlign: 'center',
  fontSize: '1rem',
  marginLeft: '0.5rem',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      fontWeight: '600',
    },
  },
});

export const SignUpBtn = style({
  width: '30rem',
  height: '2.4374rem',
  marginTop: '0.74rem',
  background: vars.color.primary,
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width:400px)': {
      width: '100vw',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const PrevBtn = style({
  width: '30rem',
  height: '2.4374rem',
  marginTop: '0.74rem',
  background: vars.color.gray,
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.white,
  '@media': {
    'screen and (max-width:400px)': {
      width: '100vw',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const SigninBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width: '15.6rem',
  height: '1.375rem',
  marginTop: '1.5rem',
});

export const ErrorText = style({
  color: vars.color.red,
  fontSize: '0.9375rem',
});

export const ErrorBox = style({
  width: '100%',
  height: '1.125rem',
  marginTop: '0.45rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'flex-end',
  '@media': {
    'screen and (max-width:481px)': {
      width: '100%',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const BlockSignUpBtn = style({
  width: '30rem',
  height: '2.4374rem',
  marginTop: '0.74rem',
  background: '#F0F4FD',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${vars.color.primary}`,
  cursor: 'not-allowed',
  '@media': {
    'screen and (max-width:400px)': {
      width: '100vw',
    },
    'screen and (max-width: 580px)': {
      width: 'calc(100vw - 5rem)',
    },
  },
});

export const BtnWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.31rem',
  '@media': {
    'screen and (max-width:400px)': {
      flexDirection: 'column',
    },
  },
});
