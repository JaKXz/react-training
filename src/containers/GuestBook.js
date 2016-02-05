import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addPerson, updateCurrentName } from '../reducers/guestbook';

function mapStateToProps (state) {
  return {
    names: state.guestbook.get('names'),
    currentInput: state.guestbook.get('current'),
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onSubmit: (e, input) => {
      e.preventDefault();
      dispatch(addPerson(input));
    },
    onChange: (e) => dispatch(updateCurrentName(e.target.value)),
  };
}

import Input from '../components/Input';
import ProfileCard from '../components/ProfileCard';
import Form from '../components/Form';

const GuestBook = ({ names, onSubmit, onChange, currentInput }) => {
  return (
    <div>
      <div className="h1 mt1 center">
        Guestbook ({ names.size })
      </div>

      <div className="p1">
        { names.map(listNames) }
      </div>

      <div>
        <Form onSubmit={ (e) => onSubmit(e, currentInput) }>
          <Input onChange={ onChange }
            placeHolder={ 'guest name...' }
            value={ currentInput } />
        </Form>
        { currentInput }
      </div>
    </div>
  );
};

function listNames (name, index) {
  return (
    <ProfileCard key={index} name={name} />
  );
}

GuestBook.propTypes = {

};

GuestBook.defaultProps = {

};

GuestBook.displayName = 'GuestBook';

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GuestBook);
