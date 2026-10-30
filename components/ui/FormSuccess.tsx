import type { ReactNode } from "react";

export function FormSuccess({ title, body, children }: { title: string; body?: string; children?: ReactNode }) {
  return (
    <div className="card p-8 text-center md:p-10" role="status">
      <h2 className="font-serif text-3xl">{title}</h2>
      {body && <p className="mx-auto mt-3 max-w-md text-mist/70">{body}</p>}
      {children && <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>}
    </div>
  );
}
