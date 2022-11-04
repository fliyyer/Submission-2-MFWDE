/* eslint-disable max-classes-per-file */
import DicodingDB from '../../data/dbsource';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import customHeader from '../../component/custom-header';
import customFooter from '../../component/custom-footer';

const Home = {
  async render() {
    return `
    <section class="headline" id="headline">
      <h2>Restaurant</h2>
    </section>
    <section class="content" id="list">
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingDB.HomePage();
    const restaurantContainer = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
