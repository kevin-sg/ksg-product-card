# KSG-PRODUCT-CARD

This is a NPM deployment test package.

### Kevin Salazar

## Installing

Using npm:

```
$ npm install ksg-product-card
```

## Example:

```
import ProductCard, {ProductImage, ProductTitle, ProductButtons,} from 'ksg-product-card'

```

```
<ProductCard
	product={product}
	initialValues={{
		count: 4,
		// maxCount: 10,
	}}>
	{({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
		<>
			<ProductImage />
			<ProductTitle />
			<ProductButtons />
		</>
	)}
</ProductCard>
```
