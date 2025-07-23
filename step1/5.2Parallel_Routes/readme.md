## 依赖
``` next@latest react@latest react-dom@latest ```

## 脚本
```json
"scripts": {
  "dev": "next dev",
  "start": "next start",
  "build": "next build"
},
```

## 代码
```jsx
// app > layout
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app > page
export default function Page() {
  return <h1>Hello Next.js!</h1>;
}
```