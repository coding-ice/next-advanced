interface AboutProps {}

export const dynamic = "force-dynamic";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const About: React.FC<AboutProps> = async () => {
  await sleep(2000);

  return <div>About: {new Date().toLocaleString()}</div>;
};

export default About;
