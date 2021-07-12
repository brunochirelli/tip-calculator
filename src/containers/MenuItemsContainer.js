import { connect } from 'react-redux';

import { MenuItems } from '../components/MenuItems';

/**
 * mapStateToProps()
 *
 * É uma forma de você usar a API connect do Redux para
 * isolar o componente sem ter a necessidade de ficar
 * chamando callbacks ou outras coisas do tipo.
 *
 * Imagine a situação onde você tem um teste no jest para
 * este componente, ele teria que chamar todo o provider e
 * fazer toda a lógica de dispatch enquanto que se ele
 * estiver conectado (connect()) não precisaria.
 *
 * @param {object} state redux state
 * @returns object with props 'binded' to the component
 */
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);
