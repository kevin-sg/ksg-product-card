# ksg-product-card

Este es un paquete de pruebas de despliegue en NPM

### Kevin Salazar

## Ejemplo:

```
import ProductCard, {ProductImage, ProductTitle, ProductButtons,} from 'ksg-product-card'

```

```
<ProductCard
	product={product}
	initialValues={{
		count: 4,
		// maxCount: 10,
	}}
>
	{({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
		<>
			<ProductImage />
			<ProductTitle />
			<ProductButtons />
		</>
	)}
</ProductCard>
```
