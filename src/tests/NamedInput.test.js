import { shallow } from 'enzyme';
import NamedInput from '../components/NameInput'

describe('Test on <Character/>',() => {
  test('it should be a false button', () =>{
    const wrapper = shallow( <NamedInput />);
    expect(wrapper.contains(<button className='m-2' type='submit'>false button</button>)).toBe(false);
  })

  test('it should be a false h1', () =>{
    const wrapper = shallow( <NamedInput />);
    expect(wrapper.contains(<h1>false header</h1>)).toBe(false);
  })

  test('it should be a false label', () =>{
    const wrapper = shallow( <NamedInput />);
    expect(wrapper.contains(<label>false label</label>)).toBe(false);
  })

  test('it should be a false input', () =>{
    const wrapper = shallow( <NamedInput />);
    expect(wrapper.contains(<input type='text'/>)).toBe(false);
  })

  test('it should be a false ul', () =>{
    const wrapper = shallow( <NamedInput />);
    expect(wrapper.contains(<ul />)).toBe(false);
  })

  test('it should have a alt imgl', () =>{
    const wrapper = shallow( <NamedInput />);
    expect(wrapper.find('input').prop('type')).toBe('text');
  })
})

