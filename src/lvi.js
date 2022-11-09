const lvi = () => {
    const style = `
        *, html, body {
            font-family: 'Lvi', serif !important;
        }
    `;
    const lvi = new FontFace('Lvi','url("https://lvi-js.pavone.dev/lvi.woff2")' ,)
    document.fonts.add(lvi);
    let style_tag = document.createElement('style');
    let style_text = document.createTextNode(style);
    style_tag.append(style_text)
    document.querySelector('head').append(style_tag);
}
lvi();