<!-- CON CTRL + SHIFT + V, para visualizar el documento markdown -->
# Guía sobre la propiedad CSS `display`

La propiedad `display` en CSS controla cómo se presenta un elemento en el flujo del documento. Existen varios valores que se pueden aplicar, pero en esta guía nos enfocaremos en los más comunes: `inline`, `block`, `inline-block` y `none`.

El valor `inline` hace que un elemento se comporte como parte del flujo del texto, es decir, se muestra en línea con otros elementos y ocupa solo el espacio necesario para su contenido. Este tipo de elementos no inicia en una nueva línea y no acepta propiedades de ancho (`width`) ni de alto (`height`). Algunos elementos HTML que tienen un comportamiento `inline` por defecto son `<span>`, `<a>` y `<strong>`. Por ejemplo:

```html
<span style="background: yellow;">Elemento inline</span>
```

Por otro lado, `block` convierte un elemento en un bloque que ocupa todo el ancho disponible del contenedor. Este tipo de elementos sí inicia en una nueva línea, y se pueden aplicar propiedades como `width`, `height`, `margin` y `padding`. Los elementos más comunes con este comportamiento son `<div>`, `<p>`, `<section>` y los encabezados `<h1>` a `<h6>`. Un ejemplo de uso sería:

```html
<div style="background: lightgreen;">Elemento block</div>
```

Existe también el valor `inline-block`, que combina características de los dos anteriores. Un elemento con `display: inline-block` se comporta como `inline` en el sentido de que no inicia en una nueva línea, pero al mismo tiempo acepta `width`, `height`, `margin` y `padding`, como un bloque. Esto lo hace útil para diseñar botones u otros componentes alineados horizontalmente. Un ejemplo práctico es:

```html
<span style="display: inline-block; width: 120px; height: 40px; background: lightblue;">
  Inline-block
</span>
```

Finalmente, el valor `none` oculta completamente el elemento, tanto visualmente como en el flujo del documento. Es como si el elemento no existiera: no ocupa espacio ni se muestra. Este valor es útil para ocultar elementos dinámicamente mediante JavaScript o ciertas clases de CSS. Por ejemplo:

```html
<p style="display: none;">Este texto está oculto y no ocupa espacio</p>
```

A modo de resumen, la siguiente tabla compara las características clave de estos valores:

| `display`       | Ocupa espacio | Salta de línea | Acepta `width`/`height` |
|------------------|----------------|------------------|---------------------------|
| `inline`         | ✅              | ❌                | ❌                        |
| `block`          | ✅              | ✅                | ✅                        |
| `inline-block`   | ✅              | ❌                | ✅                        |
| `none`           | ❌              | ❌                | ❌                        |

Para más información, puedes consultar las siguientes fuentes:
- [MDN Web Docs: display](https://developer.mozilla.org/es/docs/Web/CSS/display)
- [CSS Tricks - Display](https://css-tricks.com/almanac/properties/d/display/)
