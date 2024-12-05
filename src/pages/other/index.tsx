export default async function OtherPage() {
  return (
    <div>
      <h2>This is an Other Page</h2>
      <p>hello world</p>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};