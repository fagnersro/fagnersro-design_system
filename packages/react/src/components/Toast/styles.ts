import * as Toast  from "@radix-ui/react-toast";
import { styled, keyframes } from "../../styles";

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  padding: '0.75rem 1.25rem',
  borderRadius: '$sm',
  height: '5.125rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  '&[data-state="open"]':{
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const Button = styled('button', {
  all: 'unset',
  backgroundColor: '$gray600',
  borderRadius: '$sm',
  cursor: 'pointer',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  
  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      small: {
        fontSize: '$xs',
        padding: '0 0.625rem',
        lineHeight: '1.563rem',
        height: 25,
        backgroundColor: '$gray800'
      },
      large: {
        fontSize: '$sm',
        padding: '0 0.938rem',
        lineHeight: '2.188rem',
        height: 35,
      },
    },
  },

  defaultVariants: {
    size: 'large',
  }
})


export const WrapperGeral = styled('div', {
  height: '3.625rem',
})

export const WrapperTitleAction = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '2rem',
  width: '100%',
})

export const Title = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '1.25rem',
})

export const Description = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',

  height: '1.375rem',
  width: '20rem',

  color: '$gray200',
  
  time: {
    fontFamily: '$default',
    fontStyle: 'normal',
    fontWeight: '$regular',
    fontSize: '$sm',

    width: '20rem',
    height: '1.375rem',
  }
})

export const Action = styled(Toast.Action, {
  padding: '$1',
})

export const ToastView = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 60,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})