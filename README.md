[Paperclip](github.com/mojo-js/paperclip.js) precompiling plugin for [SystemJS](github.com/systemjs/systemjs)

# Usage

## Install it

```
jspm install system-paperclip=github:apiv/system-paperclip
```

## Add `pc` plugin to your config.js

This adds a shortcut to `system-paperclip`.

```js
System.config({
    map: {
        "pc": "system-paperclip"
    }
});
```

Now we can `import 'tmpl.html!pc'` instead of having to do `import 'tmpl.html!system-paperclip'`.

## Import

```js
import compiled from './tmpl.html!pc';
import pc from 'paperclip';

// Pass the compiled function into pc.template to 'rehydrate'
var tmpl = pc.template(compiled);
```