[Paperclip](github.com/mojo-js/paperclip.js) precompiling plugin for [SystemJS](github.com/systemjs/systemjs)

# Usage

## Install it

Install with an alias of `pc`, so we can `import 'tmpl.html!pc'` instead of having to do `import 'tmpl.html!system-paperclip'`.

```
jspm install pc=npm:system-paperclip
```

## Import

```js
import compiled from './tmpl.html!pc';
import pc from 'paperclip';

// Pass the compiled function into pc.template to 'rehydrate'
var tmpl = pc.template(compiled);
```
