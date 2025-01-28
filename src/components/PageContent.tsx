import type { ReactNode } from 'react';
import classes from './PageContent.module.css';

function PageContent({ title, children }: Readonly<{ title: string; children?: ReactNode }>) {
  return (
    <div className={classes.content}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export { PageContent };
