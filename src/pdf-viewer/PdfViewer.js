import React from 'react';

export default class PdfViewer extends React.Component {
    iframe(file) {
        const src = `assets/pdfjs/web/viewer.html?file=${file}&beforePrint=true&afterPrint=true&pagesLoaded=true&pageChange=true&openFile=true&download=true&viewBookmark=true&print=true&fullScreen=true&find=true&errorMessage=ops...&errorAppend=true`;
        return {
            __html: `<iframe height="100%" width="100%" src="${src}"></iframe>`
        }
    }

    render() {
        return <div style={{ height: 100 + '%'}} dangerouslySetInnerHTML={this.iframe(this.props.file)} />;
    }
}