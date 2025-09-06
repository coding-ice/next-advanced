async function getCatData() {
  // fetch 请求会存在缓存
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
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
