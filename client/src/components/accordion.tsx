import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  visible: boolean;
};

export default function Accordion({ visible, children }: Props) {
  return (
    <div
      className={`${visible ? 'visible max-h-[1000px]' : 'overflow-hidden max-h-0'} mb-2`}
      style={{
        transition: 'max-height 300ms ease-in-out',
      }}
    >
      {children}
    </div>
  );
}
