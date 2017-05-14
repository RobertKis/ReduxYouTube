import reducer, { InitialState } from '../settings-reducer';
import { setSearchMethod } from '../../actions';

it('tests reviving: when called with empty state it returns initial stats', () => {
    expect(reducer(undefined, {}).toJS()).toEqual(new InitialState().toJS());
});

it('tests reviving: when it is called with non-Record state it is merged with Initial state', () => {
    expect(reducer({videoLength: 'long'}, {}).toJS()).toEqual(new InitialState({videoLength: 'long'}).toJS());
});

it('tests the action', () => {
    expect(reducer(undefined, setSearchMethod('long')).toJS()).toEqual(new InitialState({videoLength: 'long'}).toJS());
});