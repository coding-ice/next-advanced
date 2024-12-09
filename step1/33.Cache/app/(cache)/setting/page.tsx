interface SettingProps {}

export const dynamic = "force-dynamic";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Setting: React.FC<SettingProps> = async () => {
  await sleep(2000);

  return <div>Setting: {new Date().toLocaleString()}</div>;
};

export default Setting;
