import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { NewItemForm } from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';

const mapDispatchToProps = {
  /**
   * Este logo abaixo é o jeito mais eficiente.
   * Dessa maneira você só passa um objeto simples com a
   * função e você terá acesso ao dispatch e tudo mais que
   * for pertinente para gestão da store.
   */
  onSubmit: (name, price) => addNewItem(name, price)
};

/**
 *  Nesta função, podemos passar a função de dispatch direto
 *  para essa props onSubmit que será uma função que lidará
 *  exatamente com esta lógica.
 *
 * @param {function} dispatch
 * @returns dispatch function e outras que quiser
 */
// const mapDispatchToProps = (dispatch) => {
//
// return bindActionCreators(
//   {
//     // Pode ser simples assim, ou passar o bindActionCreators()
//     // onSubmit: (name, price) => dispatch(addNewItem(name,
//     // price))
//     onSubmit: (name, price) => addNewItem(name, price)
//   },
//   dispatch
// );
// };

/**
 * Apenas fazendo isso (connect()(Component)), ja tornamos a
 * função dispatch() disponível em nosso componente.
 *
 * Esta é outra forma de isolar o componente de sua
 * interface para a lógica de gestão do state.
 */
export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
