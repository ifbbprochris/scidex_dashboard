import React from 'react';
import axios from 'axios';
import ReactAutocomplete from 'react-autocomplete' 

class Search extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      result:[],
      searchResult:'',
      email:''
    }
    this.search = this.search.bind(this)
  }

  componentWillMount(){
    let that = this
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        that.setState({result:response.data})
      });
  }

  search(){
    if(this.state.email){
      let searchResult = this.state.result.filter( t => {return t.email == this.state.email})
      this.setState({searchResult: searchResult?searchResult:''})
    }
  }

  render() {
    return (
      <div className="search">
        <h1>Search</h1>
        <div className="search-input">
        <ReactAutocomplete
            items={this.state.result}
            shouldItemRender={(item, value) => item.email.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.email}
            renderItem={(item, highlighted) =>
              <div
                key={item.id}
                style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
              >
                {item.email}
              </div>
            }
            value={this.state.email}
            onChange={e => {
              this.setState({ email: e.target.value })
            }}
            onSelect={value => {
              this.setState({ email: value})
            }}
          />
          <button onClick={this.search}>show</button>
        </div>
        <div className="search-result" >
            {this.state.searchResult ? 
              <div>
                <p>id: {this.state.searchResult[0].id}</p>
                <p>postId: {this.state.searchResult[0].postId}</p>
                <p>name: {this.state.searchResult[0].name}</p>
                <p>email: {this.state.searchResult[0].email}</p>
                <p>body: {this.state.searchResult[0].body}</p>
              </div> :''
            }
        </div>
      </div>
    )
  }
}

export default Search;