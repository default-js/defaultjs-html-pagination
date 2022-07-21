# defaultjs-html-pagination

- [defaultjs-html-pagination](#defaultjs-html-pagination)
  - [How to include](#how-to-include)
    - [NPM](#npm)
    - [HTML - Script Tag](#html---script-tag)
  - [How to Use](#how-to-use)
  - [Events](#events)
    - [`d-pagination:to-page`](#d-paginationto-page)
  - [Javascript API](#javascript-api)

## How to include

### NPM

```console
npm install @default-js/defaultjs-html-pagaination
```

```javascript
include {HTMLPaginationElement} from "@default-js/defaultjs-html-pagaination";
```

### HTML - Script Tag

```html
<script src="[path-to-js]/browser-bundle-defaultjs-html-pagination.min.js"></script>
```

## How to Use

```html
<d-pagination 
    page="[current page]" 
    count="[count of pages]" 
    size="[size of clickable page items]">
</d-pagination>
<d-pagination page="1" count="30" size="5"></d-pagination>
```

## Events

### `d-pagination:to-page`

```html
<d-pagination page="1" count="30" size="5"></d-pagination>
```

```javascript
document.body.on("d-pagination:to-page"(event) => {
    const page = event.detail;
});
```

## Javascript API

Property | | Description
---------|-| ----------
page     | | current page
count    | | count of pages
size     | | size of displayed pages
