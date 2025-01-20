import { ThemeConfig } from 'antd';
import { createGlobalStyle } from 'antd-style';

const theme: ThemeConfig = {
  token: {},
  components: {},
};

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
}

:root {
}

body {
}

svg {
  display: block;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.elp {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}
`;

export { theme, Global };
