import reducer, { InitialState } from '../category';
import { setCategorySearch, setCategoryValue } from '../../actions';

it('tests reviving: when called with empty state it returns initial stats', () => {
    expect(reducer(undefined, {}).toJS()).toEqual(new InitialState().toJS());
});

it('tests reviving: when it is called with non-Record state it is merged with Initial state', () => {
    expect(reducer({value: 'Movie', isChecked: false}, {}).toJS()).toEqual(new InitialState({value: 'Movie', isChecked: false}).toJS());
});

it('tests action for setting the category search checkbox', () => {
    expect(reducer(undefined, setCategoryValue('2')).toJS()).toEqual(new InitialState({value: '2'}).toJS());
});

it('tests action for setting the category value', () => {
    expect(reducer(undefined, setCategorySearch(false)).toJS()).toEqual(new InitialState({isChecked: false}).toJS());
});