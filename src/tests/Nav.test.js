import { shallow } from 'enzyme';
import Nav from '../components/Nav'

describe('Test on <Character/>',() => {
  test('it should be a false button', () =>{
    const wrapper = shallow( <Nav />);
    expect(wrapper.contains(<button className='m-2' type='submit'>false button</button>)).toBe(false);
  })

  test('it should be a false h1', () =>{
    const wrapper = shallow( <Nav />);
    expect(wrapper.contains(<h1>false header</h1>)).toBe(false);
  })

  test('it should be a false label', () =>{
    const wrapper = shallow( <Nav />);
    expect(wrapper.contains(<label>false label</label>)).toBe(false);
  })

  test('it should be a false input', () =>{
    const wrapper = shallow( <Nav />);
    expect(wrapper.contains(<input type='text'/>)).toBe(false);
  })

  test('it should be a false ul', () =>{
    const wrapper = shallow( <Nav />);
    expect(wrapper.contains(<ul />)).toBe(false);
  })

})