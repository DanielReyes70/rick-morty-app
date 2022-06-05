import { shallow } from 'enzyme';
import AddedList from '../components/AddedList'

describe('Test on <Character/>',() => {
  test('it should be a false button', () =>{
    const reload = false
    const setReload = () => console.log('test function')
    const wrapper = shallow( <AddedList reload={reload} setReload={setReload}/>);

    expect(wrapper.contains(<button className='m-2' type='submit'>false button</button>)).toBe(false);
  })

  test('it should be a false h1', () =>{
    const reload = false
    const setReload = () => console.log('test function')
    const wrapper = shallow( <AddedList reload={reload} setReload={setReload}/>);

    expect(wrapper.contains(<h1>false header</h1>)).toBe(false);
  })

  test('it should be a false label', () =>{
    const reload = false
    const setReload = () => console.log('test function')
    const wrapper = shallow( <AddedList reload={reload} setReload={setReload}/>);

    expect(wrapper.contains(<label>false label</label>)).toBe(false);
  })

  test('it should be a false input', () =>{
    const reload = false
    const setReload = () => console.log('test function')
    const wrapper = shallow( <AddedList reload={reload} setReload={setReload}/>);

    expect(wrapper.contains(<input type='text'/>)).toBe(false);
  })

  test('it should be a false ul', () =>{
    const reload = false
    const setReload = () => console.log('test function')
    const wrapper = shallow( <AddedList reload={reload} setReload={setReload}/>);

    expect(wrapper.contains(<ul />)).toBe(false);
  })


})