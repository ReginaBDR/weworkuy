import React, {Component} from "react";
import Header from "./Components/Header";
import JobCard from './Components/Card';
import * as Contentfull from 'contentful';

// create Contentful SDK with needed credentials
const client = Contentfull.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

export default class App extends Component {
  constructor () {
    super()
    this.state = {articles: []}
  }
  componentDidMount () {
    client.getEntries({content_type: 'jobs'}).then((response) => {
      this.setState({articles: response.items})
    })
  }
  render () {
   const articles = this.state.articles.map((article, i) => 
      <JobCard id={i} key={i} article={article}/>
   )
  
  return (
    <div>
      <Header />
      {articles}
      <footer>
        <p>{(new Date().getFullYear())} © Desarrollado por Regina Borgno. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
}