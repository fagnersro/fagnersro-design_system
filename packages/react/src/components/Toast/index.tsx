import { ComponentProps, ElementType, useEffect, useRef, useState } from "react"
import { ToastProvider } from "@radix-ui/react-toast"
import { X } from "phosphor-react";
import { 
  Action, 
  Button, 
  Description, 
  Title, 
  ToastContainer, 
  ToastView, 
  WrapperGeral, 
  WrapperTitleAction 
} from "./styles"

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function Toast(props: ToastProps) {
  const [open, setOpen] = useState(false);
  const eventDateRef = useRef(new Date());
  const timerRef = useRef(0);

  function oneWeekAway(date: string) {
    const now = new Date(date);
    const inOneWeek = now.setDate(now.getDate());
    return new Date(inOneWeek);
  }
  
  function prettyDate(date: Date) {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(date);
  }

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider swipeDirection="right">
      <Button size="large" onClick={() => {
        setOpen(false)
        window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => {
          eventDateRef.current = oneWeekAway(String(new Date));
          setOpen(true);
        }, 100);
      }}
      >
        Click to Toast
      </Button>
        <ToastContainer open={open} onOpenChange={setOpen} {...props}>
          <WrapperGeral>
            <WrapperTitleAction>
                <Title>Agendamento realizado</Title>
                <Action asChild altText="Goto schedule to undo">
                  <Button size='small'>
                    <X weight="bold" size={11}/>
                  </Button>
                </Action>
            </WrapperTitleAction>

            <Description asChild>
              <time dateTime={eventDateRef.current.toISOString()}>
                {prettyDate(eventDateRef.current)}
              </time>
            </Description>
          </WrapperGeral>
        </ToastContainer>
      <ToastView />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'