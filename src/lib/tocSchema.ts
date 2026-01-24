export function generateTOCSchema(items: { id: string; label: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      url: `#${item.id}`
    }))
  };
}
