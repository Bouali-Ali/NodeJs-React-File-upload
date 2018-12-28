import React from 'react'

class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){

        let F = this.uploadInput.files[0];
        console.log("My File = ", F);
            e.preventDefault();
            const formData = new FormData();
            formData.append('file',this.state.file);

            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
    
            var options = {
            method: 'post',
            body: formData
            }

            fetch('http://localhost:5000/upload', options).then((response) => {
              console.log('res', response);
            }).catch(function (err) {
              console.error("erreur en upload",  err);
            })

    }
    
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input ref={(ref) => { this.uploadInput = ref; }}  type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default Upload