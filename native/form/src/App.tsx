import Form from './components/Form';

function App() {
  return (
    <Form initialValues={{ username: '123', password: '123' }} onFinish={values => console.log(values)}>
      <Form.Item label="姓名" name="username">
        <input />
      </Form.Item>
      <Form.Item label="密码" name="password">
        <input type="password" />
      </Form.Item>
      <Form.Item label={null}>
        <button type="submit">提交</button>
      </Form.Item>
    </Form>
  );
}

export default App;
