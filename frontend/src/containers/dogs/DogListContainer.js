import { requestDogs } from "../../actions/dog/dogActions";
import DogList from "../../components/dogs/DogList";

import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    dogs: state.dogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestDogs: () => dispatch(requestDogs())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogList);
