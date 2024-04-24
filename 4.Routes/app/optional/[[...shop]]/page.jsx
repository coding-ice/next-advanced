// [[...shop]] [...shop]区别在于 前者可以匹配到/shop 后者不行
export default ({ params }) => <h1>optional:{JSON.stringify(params)}</h1>;
