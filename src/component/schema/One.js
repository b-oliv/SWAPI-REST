import React, { Component } from 'react';
import Data from '../Data';

class One extends Component {

  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        schema: '',
        all: [],
        count: 0,
        next: null,
        prev: null,
        one: [],
        page: 1
      }

    let explodeUrl = props.match.url.split('/')
    let nameSchema = explodeUrl[2]

    this.state.schema = nameSchema
  }

  getData = async () => {
    try {
      const all = await new Data().getAll(this.state.schema);
      const one = await new Data().getOne(this.state.schema, this.props.match.params.id);
      this.setState(() => ({
        isLoaded: true,
        all: all.items,
        count: all.items.count,
        next: all.next,
        prev: all.prev,
        one: one.items,
        page: this.props.match.params.id
      }));
    } catch (error) {
      this.setState(() => ({ error }))
    }
  }

  getOne = async () => {
    try {
      const one = await new Data().getOne(this.state.schema, this.props.match.params.id);
      this.setState(() => ({
        isLoaded: true,
        one: one.items,
        page: this.props.match.params.id
      }));
      window.history.pushState({"html": this.state.one,"pageTitle":this.state.schema},"", '/one/'+ this.state.schema + '/' + this.props.match.params.id );
    } catch (error) {
      this.setState(() => ({ error }))
    }
  }

  componentDidMount(){
    this.getData();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if ( this.props.match.params.id !== prevProps.match.params.id ) {
      this.setState(() => ({
        isLoaded: false,
      }));
      this.getData();
    }
  }
}

export default One;

