<a name="Heading"></a>

## Heading
**Kind**: global class  

* [Heading](#Heading)
    * [new Heading(props)](#new_Heading_new)
    * [~propTypes](#Heading..propTypes) : <code>Object</code>

<a name="new_Heading_new"></a>

### new Heading(props)
This component is wrraper around default html heading elements.


| Param | Type | Description |
| --- | --- | --- |
| props | [<code>propTypes</code>](#Heading..propTypes) | properties received. |

<a name="Heading..propTypes"></a>

### Heading~propTypes : <code>Object</code>
**Kind**: inner typedef of [<code>Heading</code>](#Heading)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| variant | <code>string</code> | Heading variant |
| [content] | <code>string</code> | Heading Content |
| [className] | <code>string</code> | Heading Classes |
| [children] | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | Child nodes |
| [align] | <code>string</code> | loading state of the page |
| [displayAs] | <code>string</code> | Heading Node |

### Usage
```javascript
      <>
        <Heading content={label1} variant="h1" displayAs={displayAs} />
        <Heading content={label2} variant="h2" />
        <Heading content={label3} variant="h3" />
        <Heading content={label4} variant="h4" />
        <Heading content={label5} variant="h5" />
        <Heading content={label6} variant="h6" />
      </>
```

          
