import React from 'react';
import { moihejresume, 1 } from '../../static/moihejresume.pdf';

class MyApp extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages })
    }

    return(){
    <div>
        <Document
            file = ""
            onLoadSuccess={this.onDocumentLoadSuccess}
        >
            <Page pageNumber={this.onDocumentLoadSuccess} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
    </div>
    }

}