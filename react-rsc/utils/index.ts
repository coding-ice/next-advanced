import escapeHtml from "escape-html";

// 常见的布尔属性（HTML 中只需存在属性名即可）
const BOOLEAN_ATTRS = new Set([
  "disabled",
  "checked",
  "selected",
  "readonly",
  "required",
  "hidden",
  "multiple",
  "open",
  "async",
  "autofocus",
  "autoplay",
  "controls",
  "default",
  "defer",
  "formnovalidate",
  "ismap",
  "itemscope",
  "loop",
  "muted",
  "nomodule",
  "novalidate",
  "playsinline",
  "reversed",
  "scoped",
]);

// 特殊 prop 名映射
const PROP_NAME_MAP = {
  className: "class",
  htmlFor: "for",
};

// 将 style 对象转为 CSS 字符串
function styleToString(style) {
  if (!style) return "";
  return Object.entries(style)
    .map(([key, value]) => {
      if (value == null) return "";
      // 驼峰转 kebab-case（简单处理，不完全准确但够用）
      const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${cssKey}: ${value}`;
    })
    .filter(Boolean)
    .join("; ");
}

// 递归展平 children（模拟 React.Children.toArray）
function flattenChildren(children) {
  if (children == null || typeof children === "boolean") return [];
  if (Array.isArray(children)) {
    return children.flatMap((child) => flattenChildren(child));
  }
  return [children];
}

export function renderJSXToHTML(jsx) {
  if (typeof jsx === "string" || typeof jsx === "number") {
    return escapeHtml(String(jsx));
  } else if (jsx == null || typeof jsx === "boolean") {
    return "";
  } else if (Array.isArray(jsx)) {
    return jsx.map((child) => renderJSXToHTML(child)).join("");
  } else if (typeof jsx === "object") {
    if (jsx.$$typeof === Symbol.for("react.element")) {
      const { type, props } = jsx;

      let html = "<" + type;

      // 处理所有 props（除 children）
      for (const propName in props) {
        if (!props.hasOwnProperty(propName)) continue;
        if (propName === "children") continue;

        const propValue = props[propName];

        // 忽略函数（如 onClick）
        if (typeof propValue === "function") continue;

        // 映射特殊属性名
        const htmlPropName = PROP_NAME_MAP[propName] || propName;

        // 处理 style
        if (propName === "style") {
          const styleStr = styleToString(propValue);
          if (styleStr) {
            html += ` style="${escapeHtml(styleStr)}"`;
          }
          continue;
        }

        // 布尔属性：只输出属性名（如果值为 true）
        if (BOOLEAN_ATTRS.has(htmlPropName)) {
          if (propValue === true) {
            html += ` ${htmlPropName}`;
          }
          continue;
        }

        // 其他属性：转为字符串并 escape
        if (propValue != null) {
          html += ` ${htmlPropName}="${escapeHtml(String(propValue))}"`;
        }
      }

      html += ">";

      // 处理 children（可能为 undefined, null, array, object, string 等）
      const children = flattenChildren(props.children);
      html += children.map((child) => renderJSXToHTML(child)).join("");

      html += `</${type}>`;

      return html;
    } else {
      throw new Error("Cannot render an object that is not a React element.");
    }
  } else {
    throw new Error("Unsupported JSX type: " + typeof jsx);
  }
}
