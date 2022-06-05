import { shallow } from 'enzyme';
import Character from '../components/Character'

describe('Test on <Character/>',() => {
  test('it should have a alt imgl', () =>{
    const name = 'tested name';
    const url = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    const wrapper = shallow( <Character picture={url} name={name}/>);

    expect(wrapper.find('img').prop('alt')).toBe(`${name} profile pic`);
  })

  test('it should have a picture url', () =>{
    const name = 'tested name';
    const url = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    const wrapper = shallow( <Character picture={url} name={name}/>);

    expect(wrapper.find('img').prop('src')).toBe(url);
  })


  test('passing false container', () =>{
    const name = 'tested name';
    const url = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    const wrapper = shallow( <Character picture={url} name={name}/>);

    expect(wrapper.contains(<h2>false container</h2>)).toBe(false);
  })

  test('passing false container 3', () =>{
    const name = 'tested name';
    const url = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    const wrapper = shallow( <Character picture={url} name={name}/>);

    expect(wrapper.contains(<h2>false container 3</h2>)).toBe(false);
  })

  test('passing false container 4', () =>{
    const name = 'tested name';
    const url = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    const wrapper = shallow( <Character picture={url} name={name}/>);

    expect(wrapper.contains(<h1>false container 4</h1>)).toBe(false);
  })
})


