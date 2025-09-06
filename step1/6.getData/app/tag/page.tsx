async function getCatData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    next: {
      tags: ["cat"],
    },
  });
  return res.json();
}

// static rendered
const CatPage = async () => {
  const data = await getCatData();

  return (
    <div>
      <img src={data[0].url} alt="cat" />
    </div>
  );
};

export default CatPage;
