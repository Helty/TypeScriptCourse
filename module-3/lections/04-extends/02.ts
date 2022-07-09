class Document {
    protected header() {
        console.log('Document header')
    }
    protected body() {
        console.log('Document body')
    }
    protected footer() {
        console.log('Document footer')
    }
    public show() {
        this.header()
        this.body()
        this.footer()
        console.log()
    }
}

class PdfDocument extends Document {
    protected body() {
        console.log('PdfDocument body')
    }
}

class HtmlDocument extends Document{
    protected body() {
        console.log('HtmlDocument body')
    }
}

const docs: Document[] = [new Document(), new PdfDocument(), new HtmlDocument()]
docs.forEach(doc => doc.show())
