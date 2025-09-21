import Image from "next/image"; // 不会存在抖动 (布局便宜)

// 会进行静态分析，推断宽高
import Bear from "@/assets/images/bear.webp";

const HomePage = () => {
  return (
    <>
      <h3>远程图片</h3>
      <div style={{ width: 500, height: 300, position: "relative" }}>
        {/* 远程图片必须设置 width / height 或者 设置 fill 属性 */}
        {/* <Image
          src="https://images.pexels.com/photos/539689/pexels-photo-539689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cat"
          width={300}
          height={150}
        /> */}
        <Image
          src="https://images.pexels.com/photos/539689/pexels-photo-539689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="cat"
          // 填充父级元素
          style={{ objectFit: "cover" }}
          fill
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
      </div>

      <h3>本地图片</h3>
      {/* 会自动推导宽高，所以不会抖动 */}
      {/* 静态分析，生成 blur 图片 */}
      <Image src={Bear} alt="bear" width={400} placeholder="blur" />
    </>
  );
};

export default HomePage;
