# KSG-PRODUCT-CARD

This is a NPM deployment test package.

## Installing

Using npm:

```
npm install ksg-product-card
```

Examples:

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ksg-product-card'
```

```
// Required
const product = {
  id: "1",
  title: "My Title - Card",
  img: "https://my-image.jpg",
}
```

```
<ProductCard product={product} initialValues={{ count: 0, maxCount: 10 }}>
    {() => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
</ProductCard>
```

or

```
<ProductCard product={product} initialValues={{ count: 4, maxCount: 20 }}>

	// args optional
    {({ count, isMaxCountReached, maxCount, product, increaseBy, reset }) => (
	 <>
	   <ProductCard.Title title="Hello world" className="text-bold" />
	   <ProductCard.Image img="https://my-image.jpg" className="bg-cover" />
	   <ProductCard.Buttons style={{ borderRadius: '20px' }} />
	 </>
    )}
</ProductCard>
```
