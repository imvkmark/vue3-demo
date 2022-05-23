# Vue 3 Scoped Demo


Scope 是否会对子组件进行穿透

我这里定义了两个 `step` 样式, 样式的加载是存在问题的, 不明确 子元素覆盖父元素, 还是父元素覆盖子元素

这里和 style 的加载顺序有关系, 所以谁能回答下原因以及为什么如此去定义, 这两个是平级的, 如图

![](https://file.wulicode.com/note/2022/5-23/1653279757606.png)

这里是 RFC 定义

https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md
