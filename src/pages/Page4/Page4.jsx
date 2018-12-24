import React, { Component } from 'react';
import ProductIntro from './components/ProductIntro';
import FeatureList from './components/FeatureList';
import BrandList from './components/BrandList';
import SimpleTestimonial from './components/SimpleTestimonial';
import FooterInfo from './components/FooterInfo';

export default class Page4 extends Component {
  static displayName = 'Page4';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page4-page">
        <ProductIntro />
        <FeatureList />
        <BrandList />
        <SimpleTestimonial />
        <FooterInfo />
      </div>
    );
  }
}
