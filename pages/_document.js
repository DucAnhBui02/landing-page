import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocumentInherit extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default DocumentInherit;
