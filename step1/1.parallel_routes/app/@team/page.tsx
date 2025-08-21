const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const TeamPage = async () => {
  await sleep(3000);
  return <div>TeamPage</div>;
};

export default TeamPage;
