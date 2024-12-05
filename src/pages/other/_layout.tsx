import { PropsWithChildren } from "react";

export default async function OtherLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1>Other Layout</h1>
      {children}
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};