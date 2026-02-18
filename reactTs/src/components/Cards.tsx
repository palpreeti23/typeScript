// import React from 'react'
import type { ReactNode, PropsWithChildren } from "react";

interface cardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

function Cards({ title, children, footer }: cardProps) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </section>
  );
}

export default Cards;
